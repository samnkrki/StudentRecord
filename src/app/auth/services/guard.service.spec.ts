import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './guard.service';

describe('GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });AuthGuard
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
