import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletypeListComponent } from './vehicletype-list.component';

describe('VehicletypeListComponent', () => {
  let component: VehicletypeListComponent;
  let fixture: ComponentFixture<VehicletypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicletypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicletypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
