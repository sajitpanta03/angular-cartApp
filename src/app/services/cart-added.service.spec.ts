import { TestBed } from '@angular/core/testing';

import { CartAddedService } from './cart-added.service';

describe('CartAddedService', () => {
  let service: CartAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
