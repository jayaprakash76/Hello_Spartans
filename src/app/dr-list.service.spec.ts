import { TestBed } from '@angular/core/testing';

import { DrListService } from './dr-list.service';

describe('DrListService', () => {
  let service: DrListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
