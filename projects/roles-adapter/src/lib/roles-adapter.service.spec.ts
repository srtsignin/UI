import { TestBed, inject } from '@angular/core/testing';

import { RolesAdapterService } from './roles-adapter.service';

describe('RolesAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesAdapterService]
    });
  });

  it('should be created', inject([RolesAdapterService], (service: RolesAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
