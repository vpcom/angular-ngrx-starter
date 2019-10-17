import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import * as translatedText from  './../assets/i18n/en.json';
import { Store, select } from '@ngrx/store';
import { LocalStorageState } from './local-storage/local-storage.reducer.js';
import { LocalStorageInitSuccess } from './local-storage/local-storage.actions.js';
import { selectLocalStorageIsInit } from './local-storage/local-storage.selectors.js';
import { selectBooksLoading } from './books/store/books.selectors.js';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navigation = [
    { link: 'welcome', label: translatedText['nav.welcome'] },
    { link: 'books', label: translatedText['nav.book'] },
    { link: 'authors', label: translatedText['nav.author'] }
  ];

  constructor(public store: Store<LocalStorageState>,
              private localStorageService: LocalStorageService) { }
  
  ngOnInit() {
    this.localStorageService.printAll();

    // Local storage initialisation for faking a backend
    if (!this.localStorageService.isInit()) {
      this.localStorageService.init().subscribe(x => this.store.dispatch(new LocalStorageInitSuccess()));
    } else this.store.dispatch(new LocalStorageInitSuccess());

    this.loaderHandling();
  }

  loaderHandling() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('main-content');
    const isInit$ = this.store.pipe(select(selectLocalStorageIsInit));
    const isLoading$ = this.store.pipe(select(selectBooksLoading));
    
    combineLatest(isInit$, isLoading$).subscribe(
      ([isInit, isLoading]) => {
      if (isInit) {
        content.style.display = 'block';

        if (isLoading) {
          loader.style.display = 'block';
        } else {
          loader.style.display = 'none';
        }
      } else {
        loader.style.display = 'block';
        content.style.display = 'none';
      }
    });
    
  }
}
