import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaintainanceCustomerComponent } from './edit-maintainance-customer.component';

describe('EditMaintainanceCustomerComponent', () => {
  let component: EditMaintainanceCustomerComponent;
  let fixture: ComponentFixture<EditMaintainanceCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaintainanceCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaintainanceCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
