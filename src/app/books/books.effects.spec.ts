import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BooksEffects } from './books.effects';

describe('BooksEffects', () => {
  let actions$: Observable<any>;
  let effects: BooksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BooksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
