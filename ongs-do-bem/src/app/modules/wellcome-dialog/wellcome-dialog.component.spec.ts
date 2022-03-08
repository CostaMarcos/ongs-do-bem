import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeDialogComponent } from './wellcome-dialog.component';

describe('WellcomeDialogComponent', () => {
  let component: WellcomeDialogComponent;
  let fixture: ComponentFixture<WellcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
