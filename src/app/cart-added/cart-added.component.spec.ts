import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddedComponent } from './cart-added.component';

describe('CartAddedComponent', () => {
  let component: CartAddedComponent;
  let fixture: ComponentFixture<CartAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
