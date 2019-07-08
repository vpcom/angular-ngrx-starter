import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksContainerComponent } from './books-container/books-container.component';

const routes: Routes = [
  { path: '', component: BooksContainerComponent },
  { path: ':id', component: BooksContainerComponent },
  { path: ':id/edit', component: BooksContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
