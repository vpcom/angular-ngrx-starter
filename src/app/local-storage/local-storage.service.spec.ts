import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [LocalStorageService]
  }));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });
});
