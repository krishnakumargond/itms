import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegistrationFormComponent } from './pre-registration-form.component';

describe('PreRegistrationFormComponent', () => {
  let component: PreRegistrationFormComponent;
  let fixture: ComponentFixture<PreRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
