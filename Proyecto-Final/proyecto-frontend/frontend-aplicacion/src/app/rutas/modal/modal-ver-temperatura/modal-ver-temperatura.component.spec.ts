import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerTemperaturaComponent } from './modal-ver-temperatura.component';

describe('ModalVerTemperaturaComponent', () => {
  let component: ModalVerTemperaturaComponent;
  let fixture: ComponentFixture<ModalVerTemperaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerTemperaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
