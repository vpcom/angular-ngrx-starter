import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, from, zip, throwError, iif } from 'rxjs';
import { map, catchError, tap, mergeMap, concatMap, toArray } from 'rxjs/operators';

const JSON_PATH = './assets/data/';
const APP_PREFIX = 'NGRX-STARTER.';
const JSON_EXTENSION = '.json';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // The books data entry is the most important important reference
  booksDataReferenceName = 'books';
  fileList = ['authors',
              'book-1',
              'book-2',
              'book-3',
              'book-4',
              'books-fromAuthor-1',
              'books-fromAuthor-2',
              this.booksDataReferenceName];

  constructor(private http: HttpClient) { }

  /**
   * Initial load of the fake HTTP resources
   */
  public init(): Observable<any> {
    // localStorage.clear(); // TODO debug only

    const fileContents$ = from(this.fileList).pipe(
      tap(fileName => console.log('loading file: ' + fileName)),
      concatMap(fileName => this.http.get(JSON_PATH + fileName + JSON_EXTENSION).pipe(
        catchError(error => { console.log(error); return throwError(error)})
      ))
    );

    // Data is added only if a known entry doesn't exist.
    const dataToStore$ = this.test().pipe(
      mergeMap(v => iif(() => v === null, fileContents$))
    );

    return zip(from(this.fileList), dataToStore$).pipe(
      map(([fileName, fileContent]) => localStorage.setItem(APP_PREFIX + fileName, JSON.stringify(fileContent))),
      toArray(), // To have only 1 emition
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
   * TODO debug only
   */
  public printAll() {
    console.log(localStorage);
  }

  /**
   * Function used to give back the value of a well known entry for testing its value.
   */
  private test(): Observable<boolean> {
    return of(this.getItem(this.booksDataReferenceName));
  }
}
