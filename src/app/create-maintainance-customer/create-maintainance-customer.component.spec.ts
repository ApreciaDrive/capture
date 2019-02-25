import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintainanceCustomerComponent } from './create-maintainance-customer.component';

describe('CreateMaintainanceCustomerComponent', () => {
  let component: CreateMaintainanceCustomerComponent;
  let fixture: ComponentFixture<CreateMaintainanceCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaintainanceCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaintainanceCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
