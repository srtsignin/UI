import { TestBed, inject } from '@angular/core/testing';

import { RosefireAdapterService } from './rosefire-adapter.service';

describe('RosefireAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosefireAdapterService]
    });
  });

  it('should be created', inject([RosefireAdapterService], (service: RosefireAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
