import { Injectable } from '@angular/core';
import { Book } from '../books.model';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Loads JSON data representing a list of all books including minimal data.
   */
  public getAllBooks(): Observable<Book[]> {
    if (environment.trace) {
      console.log('HTTP request: getAllBooks');
    }
    
    return of(this.localStorageService.getItem('books'));
  }
}
