import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectBooksArray, selectCurrentBook } from '../store/books.selectors';
import { BookState } from '../store/books.reducer';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {

  @Input() currentBook: Book;

  bookId$: Observable<number>;
  book$: Observable<Book>;
  books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor(public store: Store<BookState>) {}

  ngOnInit() {
  }
  
}
