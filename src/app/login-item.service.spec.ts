import { TestBed } from '@angular/core/testing';

import { LoginItemService } from './login-item.service';

describe('LoginItemService', () => {
  let service: LoginItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
