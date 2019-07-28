import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authors } from '../authors.model';

@Component({
  selector: 'app-authors-container',
  templateUrl: './authors-container.component.html',
  styleUrls: ['./authors-container.component.css']
})
export class AuthorsContainerComponent implements OnInit {

  constructor(private store: Store<Authors>) { }

  ngOnInit() {
  }

}
