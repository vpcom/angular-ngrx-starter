import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../authors/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Loads JSON data representing a list of all books including minimal data.
   */
  public getAllAuthors(): Observable<Author[]> {
    if (environment.debugMode) {
      console.log('HTTP request: getAllAuthors');
    }
    
    return of(this.localStorageService.getItem('authors'));
  }
}
