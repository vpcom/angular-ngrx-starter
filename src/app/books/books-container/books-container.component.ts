import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { selectBooksArray, selectCurrentBook,
         selectUrlBookIdExists, selectUrlBookEdit, selectAreBooksSaving } from '../store/books.selectors';
import { selectLocalStorageIsInit } from 'src/app/reducers';
import { LoadBooks, UpdateBook, DeleteBook } from '../store/books.actions';
import { AppState } from '../../reducers/index';
import { Update } from '@ngrx/entity';

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
  isBookBeingEdited$: Observable<any> = this.store.pipe(select(selectUrlBookEdit));
  currentBook$: Observable<Book> = this.store.pipe(select(selectCurrentBook));

  constructor(public store: Store<AppState>) { }

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

    this.currentBook$ = this.store.pipe(select(selectCurrentBook));
  }


  onBookUpdate(book: Book) {
    console.log(book);
    
    var savingMessage = document.getElementById('saving');
    savingMessage.innerText = 'saving';

    const bookUpdate: Update<Book> = {
      id: book.id,
      changes: book
    };

    this.store.dispatch(new UpdateBook({book: bookUpdate}));
    this.store.pipe(select(selectAreBooksSaving)).subscribe(data => {
      savingMessage.innerText = 'saving done';
    })
    
  }

  onBookDelete(id: string) {
    this.store.dispatch(new DeleteBook({id: id}));
  }

}
