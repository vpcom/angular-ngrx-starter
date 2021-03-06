import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import * as translatedText from  './../assets/i18n/en.json';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data:  { title: translatedText['welcome.title'] }
  },
  {
    path: 'books', 
    loadChildren: () => import('./books/books.module').then(mod => mod.BooksModule)
  },
  {
    path: 'authors', 
    loadChildren: () => import('./authors/authors.module').then(mod => mod.AuthorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
