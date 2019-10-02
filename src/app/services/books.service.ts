import { Injectable } from '@angular/core';
import { Book } from '../books/books.model';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Loads JSON data representing a list of all books including minimal data.
   */
  public getAllBooks(): Observable<Book[]> {
    if (environment.debugMode) {
      console.log('HTTP request: getAllBooks');
    }
    
    return of(this.localStorageService.getItem('books'));
  }

  /**
   * Loads JSON data representing a list of all books including minimal data.
   */
  public updateBook(book: Partial<Book>): Observable<Book> {
    console.log(book);
    if (environment.debugMode) {
      console.log('HTTP request: updateBook');
    }

    this.localStorageService.printAll();

    try {
      this.localStorageService.setItem('book-' + book.id, book);
      this.localStorageService.printAll();
      return of(this.localStorageService.getItem('book-' + book.id)).pipe(
        delay(1500)
      );
    } catch (error) {
      console.log('Error while updating the local storage');
      return;
    }
  }
}
