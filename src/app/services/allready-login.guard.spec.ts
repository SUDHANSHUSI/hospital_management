import { TestBed } from '@angular/core/testing';

import { AllreadyLoginGuard } from './allready-login.guard';

describe('AllreadyLoginGuard', () => {
  let guard: AllreadyLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllreadyLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
