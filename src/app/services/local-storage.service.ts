import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, from, zip, throwError, iif } from 'rxjs';
import { map, catchError, tap, mergeMap, concatMap, toArray } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LocalStorageState } from '../local-storage/local-storage.reducer';
import { LocalStorageInitSuccess } from '../local-storage/local-storage.actions';
import { environment } from 'src/environments/environment';

const JSON_PATH = './assets/data/';
const APP_PREFIX = 'NGRX-STARTER.';
const JSON_EXTENSION = '.json';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  jsonDataList = ['authors', 'books'];

  constructor(private http: HttpClient,
              private store: Store<LocalStorageState>) { }

  /**
   * Test if a book-catalog entry is found in the local storage.
   */
  public isInit(): boolean {
    console.log(localStorage.getItem('book-catalog'), typeof localStorage.getItem('book-catalog'));
    const isInit = typeof localStorage.getItem('book-catalog') === 'string';

    console.log(isInit, environment.debugMode);
    if (environment.debugMode) {
      if (isInit) console.log('Local storage initialized');
      else console.log('Local storage empty');
    }
    
    return isInit;
  }

  /**
   * Initial load of the fake HTTP resources
   */
  public init(): Observable<any[]> {
    // localStorage.clear(); // TODO debug only

    console.log('init')

    const jsonData$ = this.getJsonData();


    console.log(jsonData$);
      
    // const filesContent$ = from(this.jsonDataList).pipe(
    //   tap(fileName => console.log('loading file: ' + fileName)),
    //   concatMap(fileName => this.http.get(JSON_PATH + fileName + JSON_EXTENSION).pipe(
    //     catchError(error => { console.log(error); return throwError(error) })
    //   ))
    // );


    return this.loadDataIntoLocalStorage(jsonData$);

    // Data is added only if a known entry doesn't exist.
    //const dataToStore$ = filesContent$;
    // this.test().pipe(
    //   mergeMap(v => iif(() => v === null, filesContent$))
    // );

    // return zip(from(this.jsonDataList), filesContent$).pipe(
    //   map(([fileName, fileContent]) => localStorage.setItem(APP_PREFIX + fileName, JSON.stringify(fileContent))),
    //   toArray(), // To have only 1 emition
    //   tap(x => localStorage.setItem('book-catalog', '')),
    //   catchError(error => { console.log(error); return throwError(error)})
    // );
  }
  
  private getJsonData(): Observable<any> {
    return from(this.jsonDataList).pipe(
      tap(fileName => console.log('loading file: ' + fileName)),
      concatMap(fileName => this.http.get(JSON_PATH + fileName + JSON_EXTENSION).pipe(
        catchError(error => { console.log(error); return throwError(error) })
      ))
    );
  
    //return this.jsonDataList.map(fileName => this.http.get(JSON_PATH + fileName + JSON_EXTENSION));
  }
  
  public loadDataIntoLocalStorage(jsonData$: Observable<any[]>) {    
    return zip(from(this.jsonDataList), jsonData$).pipe(
      map(([fileName, fileContent]) => localStorage.setItem(APP_PREFIX + fileName, JSON.stringify(fileContent))),
      toArray(), // To have only 1 emition
      tap(x => localStorage.setItem('book-catalog', '')),
      catchError(error => { console.log(error); return throwError(error)})
    );
  }
  
  public setItem(key: string, value: any) {
    localStorage.setItem(APP_PREFIX + key, JSON.stringify(value));
  }
  
  public getItem(key: string): any {
    return JSON.parse(localStorage.getItem(APP_PREFIX + key));
  }
  
  public removeItem(key: string) {
    localStorage.removeItem(APP_PREFIX + key);
  }

  /**
   * Prints all the local storage when in debug mode.
   */
  public printAll() {
    if (environment.debugMode) console.log(localStorage);
  }

  /**
   * For testing
   */
  public getAll(): any {
    return localStorage;
  }

}
