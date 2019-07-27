import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Input() book: Book;

  bookForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    summary: ''
  });

  hasUnitNumber = false;
  selectedAuthor: string;

  authors = [
    {name: 'Fake author 1', id: '1'},
    {name: 'Fake author 2', id: '2'}
  ];

  bookId$: Observable<number>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.book);
    this.bookForm.patchValue(this.book);
    this.bookForm.get('author').setValue(this.book.authorId.toString());
  }

  onSubmit(e) {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      alert('Not really saved yet!');
    }
  }

  onDelete() {
    alert('Are you sure you want to delete this book?');
  }

}



