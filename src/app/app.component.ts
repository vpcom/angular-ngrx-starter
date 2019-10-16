import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import * as translatedText from  './../assets/i18n/en.json';
import { Store } from '@ngrx/store';
import { LocalStorageState } from './local-storage/local-storage.reducer.js';
import { LocalStorageInitSuccess } from './local-storage/local-storage.actions.js';


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

    // Local storage initialisation
    if (!this.localStorageService.isInit()) {
      this.localStorageService.init().subscribe();
    }
    this.store.dispatch(new LocalStorageInitSuccess());
  }
}
