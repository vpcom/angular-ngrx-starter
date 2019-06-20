import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  bookForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    summary: [null, Validators.required],
  });

  hasUnitNumber = false;

  authors = [
    {name: 'Author 1', abbreviation: 'A1'},
    {name: 'Author 2', abbreviation: 'A2'}
  ];

  bookId$: Observable<number>;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,) {}

  ngOnInit() {
    this.bookId$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(parseInt(params.get('id'), 10)))
    );
  }

  onSubmit() {
    alert('Thanks!');
  }
}
