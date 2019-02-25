import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceCustomersComponent } from './maintainance-customers.component';

describe('MaintainanceCustomersComponent', () => {
  let component: MaintainanceCustomersComponent;
  let fixture: ComponentFixture<MaintainanceCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanceCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
