import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnuityCustomerComponent } from './edit-annuity-customer.component';

describe('EditAnnuityCustomerComponent', () => {
  let component: EditAnnuityCustomerComponent;
  let fixture: ComponentFixture<EditAnnuityCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnnuityCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnnuityCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
