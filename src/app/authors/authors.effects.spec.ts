import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthorsEffects } from './authors.effects';

describe('AuthorsEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthorsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthorsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
