import { TestBed } from '@angular/core/testing';

import { ProductsIncartService } from './products-incart.service';

describe('ProductsIncartService', () => {
  let service: ProductsIncartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsIncartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
