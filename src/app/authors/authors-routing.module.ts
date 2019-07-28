import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsContainerComponent } from './authors-container/authors-container.component';

const routes: Routes = [
  { path: '', component: AuthorsContainerComponent },
  { path: ':id', component: AuthorsContainerComponent },
  { path: ':id/edit', component: AuthorsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
