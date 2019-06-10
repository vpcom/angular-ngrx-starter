import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { BookState } from '../store/books.reducer';
import { selectBooksState, selectBooksArray } from '../store/books.selectors';
import { Dictionary } from '@ngrx/entity';
import { LoadBooks } from '../store/books.actions';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksContainerComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(public store: Store<BookState>) { }

  ngOnInit() {
    // No need to do "this.store.dispatch(new LoadBooks());"
    // because the effect ofType(BookActionTypes.LoadBooks) has a startWith operator.
    // The selection occurs immediately after.
    this.books$ = this.store.pipe(select(selectBooksArray));
  }

}
