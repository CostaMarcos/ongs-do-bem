import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseRegistrationComponent } from './case-registration.component';

describe('CaseRegistrationComponent', () => {
  let component: CaseRegistrationComponent;
  let fixture: ComponentFixture<CaseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
