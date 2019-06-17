import { Injectable } from '@angular/core';
import { Book } from '../books.model';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private localStorageService: LocalStorageService) { }

  public getAllBooks(): Observable<Book[]> {
    console.log('Fake HTTP request getAllBooks called');
    return of(this.localStorageService.getItem('books'));
  }
}
