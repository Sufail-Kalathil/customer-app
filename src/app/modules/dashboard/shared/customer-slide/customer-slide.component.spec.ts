import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSlideComponent } from './customer-slide.component';

describe('CustomerSlideComponent', () => {
  let component: CustomerSlideComponent;
  let fixture: ComponentFixture<CustomerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
