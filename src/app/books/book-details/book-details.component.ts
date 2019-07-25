import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookState } from '../store/books.reducer';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  bookId$: Observable<number>;
  book$: Observable<Book>;
  books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor(public store: Store<BookState>) {}

  ngOnInit() {
  }
  
}
