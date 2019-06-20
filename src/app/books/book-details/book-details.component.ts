

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {

  bookId$: Observable<number>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bookId$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(parseInt(params.get('id'), 10)))
    );
  }
  
}
