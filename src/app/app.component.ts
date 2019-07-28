import { Component, OnInit } from '@angular/core';
import * as translatedText from  './../assets/i18n/en.json';
import { Store } from '@ngrx/store';
import { LocalStorageState } from './local-storage/local-storage.reducer.js';
import { ActionLocalStorageInit } from './local-storage/local-storage.actions.js';
import { ConditionalExpr } from '@angular/compiler';

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

  constructor(public store: Store<LocalStorageState>) { }
  
  ngOnInit() {
    this.store.dispatch(new ActionLocalStorageInit());  
  }
}
