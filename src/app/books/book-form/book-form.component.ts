import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Input() book: Book;
  @Output() updatedBook = new EventEmitter<Book>();
  @Output() deletedBook = new EventEmitter<Book>();

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
              private router: Router) { }

  ngOnInit() {
    console.log(this.book);
    this.bookForm.patchValue(this.book);
    this.bookForm.get('authorId').setValue(this.book.authorId.toString());
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.updatedBook.emit(this.bookForm.value);
    }
  }

  onDelete() {
    this.deletedBook.emit(this.bookForm.controls.id.value);
    this.router.navigate(['/books']);
  }

}



