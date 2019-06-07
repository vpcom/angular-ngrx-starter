import { Component } from '@angular/core';
import * as translatedText from  './../assets/i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigation = [
    { link: 'welcome', label: translatedText['nav.welcome'] },
    { link: 'books', label: translatedText['nav.book'] }
  ];
}
