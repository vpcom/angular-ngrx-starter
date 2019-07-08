import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {
  bookForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    summary: ''
  });

  hasUnitNumber = false;

  authors = [
    {name: 'Author 1', abbreviation: 'A1'},
    {name: 'Author 2', abbreviation: 'A2'}
  ];

  bookId$: Observable<number>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit(e) {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      alert('Saved!');
    }
  }

  onDelete() {
    alert('Are you sure you want to delete this book?');
  }

}



