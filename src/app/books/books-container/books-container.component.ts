import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { BookState } from '../store/books.reducer';
import { selectBooksState } from '../store/books.selectors';
import { Dictionary } from '@ngrx/entity';
import { LoadBooks } from '../store/books.actions';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksContainerComponent implements OnInit {

  books$: Observable<BookState>;

  constructor(public store: Store<BookState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
    this.books$ = this.store.pipe(select(selectBooksState));
  }

}
