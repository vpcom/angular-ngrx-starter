import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { BookState } from '../store/books.reducer';
import { selectBooksArray } from '../store/books.selectors';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { selectLocalStorageIsInit } from 'src/app/reducers';
import { LoadBooks } from '../store/books.actions';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksContainerComponent implements OnInit {
  books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor(public store: Store<BookState>,
              public localStorageService: LocalStorageService) { }

  ngOnInit() {
    // Figuring out if and how the books can be loaded
    const alreadyStoredBookData$ = this.store.pipe(select(selectBooksArray));
    const isLocalStorageReady$ = this.store.pipe(select(selectLocalStorageIsInit));
    combineLatest(alreadyStoredBookData$, isLocalStorageReady$)
      .subscribe(([dataAlreadyHere, isLocalStorageReady]) => {
        if (dataAlreadyHere.length === 0 && isLocalStorageReady) {
          this.store.dispatch(new LoadBooks());
          this.store.pipe(select(selectBooksArray)).subscribe(books => this.books$.next(books));
        } else {
          this.store.pipe(select(selectBooksArray)).subscribe(books => this.books$.next(books));
        }
      }
    );
  }

}
