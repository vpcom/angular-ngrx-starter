import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../books.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';  

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Input() book: Book;
  @Output() updatedBook = new EventEmitter<Book>();

  bookForm = this.fb.group({
    id: [null],
    title: [null, Validators.required],
    authorId: [null, Validators.required],
    summary: ''
  });

  hasUnitNumber = false;
  selectedAuthor: string;

  // TODO take date from service/store
  authors = [
    {name: 'Fake author 1', id: '1'},
    {name: 'Fake author 2', id: '2'}
  ];

  bookId$: Observable<number>;

  constructor(private fb: FormBuilder,
              public store: Store<AppState>) { } // Should be moved to smart parent component

  ngOnInit() {
    console.log(this.book);
    this.bookForm.patchValue(this.book);
    this.bookForm.get('authorId').setValue(this.book.authorId.toString());
  }

  onSubmit(e) {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);

      this.updatedBook.emit(this.bookForm.value);
    }
  }

  onDelete() {
    alert('Are you sure you want to delete this book?');
  }

}



