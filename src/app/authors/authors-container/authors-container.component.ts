import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Author } from '../authors.model';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { selectAuthorsArray } from '../authors.selector';
import { selectLocalStorageIsInit } from 'src/app/local-storage/local-storage.selectors';
import { LoadAuthors } from '../authors.actions';

@Component({
  selector: 'app-authors-container',
  templateUrl: './authors-container.component.html',
  styleUrls: ['./authors-container.component.css']
})
export class AuthorsContainerComponent implements OnInit {
  authors$: BehaviorSubject<Author[]> = new BehaviorSubject([]);

  constructor(private store: Store<Author>) { }

  ngOnInit() {
    // Loading authors from store and initialize the authors store data if needed.
    const storedAuthorData$ = this.store.pipe(select(selectAuthorsArray));
    const isLocalStorageReady$ = this.store.pipe(select(selectLocalStorageIsInit));
    combineLatest(storedAuthorData$, isLocalStorageReady$)
      .subscribe(([storedAuthorData, isLocalStorageReady]) => {
        if (storedAuthorData.length === 0 && isLocalStorageReady) {
          this.store.dispatch(new LoadAuthors());
          this.store.pipe(select(selectAuthorsArray)).subscribe(authors => this.authors$.next(authors));
        } else {
          this.store.pipe(select(selectAuthorsArray)).subscribe(authors => this.authors$.next(authors));
        }
      }
    );
  }

}
