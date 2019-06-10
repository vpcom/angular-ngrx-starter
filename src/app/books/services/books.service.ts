import { Injectable } from '@angular/core';
import { Book } from '../books.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public getAllBooks(): Observable<Book[]> {
    console.log('getAllBooks called');
    return of([
      {
        id: '1',
        name: 'Big book 1'
      },
      {
        id: '2',
        name: 'Big book 2',
      }
    ]);
  }
}
