import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of, fromEvent, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.bookId$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(parseInt(params.get('id'), 10)))
    );
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



