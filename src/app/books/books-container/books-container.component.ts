import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { selectBooksArray, selectCurrentBook, selectUrlBookIdExists, selectUrlBookEdit } from '../store/books.selectors';
import { selectLocalStorageIsInit } from 'src/app/reducers';
import { LoadBooks } from '../store/books.actions';
import { AppState } from '../../reducers/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksContainerComponent implements OnInit {
  books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  isEditing: boolean;
  bookSelected: boolean;
  isBookSelected$: Observable<any> = this.store.pipe(select(selectUrlBookIdExists));
  isBookEdited$: Observable<any> = this.store.pipe(select(selectUrlBookEdit));
  // TODO, add the Author value to the current book object
  currentBook$: Observable<Book> = this.store.pipe(select(selectCurrentBook));

  constructor(public store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    // Loading books from store and initialize the books store data if needed.
    const storedBookData$ = this.store.pipe(select(selectBooksArray));
    const isLocalStorageReady$ = this.store.pipe(select(selectLocalStorageIsInit));
    combineLatest(storedBookData$, isLocalStorageReady$)
      .subscribe(([storedBookData, isLocalStorageReady]) => {
        if (storedBookData.length === 0 && isLocalStorageReady) {
          this.store.dispatch(new LoadBooks());
          this.store.pipe(select(selectBooksArray)).subscribe(books => this.books$.next(books));
        } else {
          this.store.pipe(select(selectBooksArray)).subscribe(books => this.books$.next(books));
        }
      }
    );
  }

}
