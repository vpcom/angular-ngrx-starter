import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsContainerComponent } from './authors-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AuthorsContainerComponent', () => {
  let component: AuthorsContainerComponent;
  let fixture: ComponentFixture<AuthorsContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AuthorsContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
