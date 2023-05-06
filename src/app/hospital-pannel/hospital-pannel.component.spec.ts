import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPannelComponent } from './hospital-pannel.component';

describe('HospitalPannelComponent', () => {
  let component: HospitalPannelComponent;
  let fixture: ComponentFixture<HospitalPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
