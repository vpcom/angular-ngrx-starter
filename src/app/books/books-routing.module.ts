import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  { path: '', component: BooksContainerComponent },
  { path: ':id', component: BookDetailsComponent },
  { path: ':id/edit', component: BookFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
