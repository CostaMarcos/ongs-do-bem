import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsRegistrationComponent } from './ongs-registration.component';

describe('OngsRegistrationComponent', () => {
  let component: OngsRegistrationComponent;
  let fixture: ComponentFixture<OngsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngsRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
