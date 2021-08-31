import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletypeFormComponent } from './vehicletype-form.component';

describe('VehicletypeFormComponent', () => {
  let component: VehicletypeFormComponent;
  let fixture: ComponentFixture<VehicletypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicletypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicletypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
