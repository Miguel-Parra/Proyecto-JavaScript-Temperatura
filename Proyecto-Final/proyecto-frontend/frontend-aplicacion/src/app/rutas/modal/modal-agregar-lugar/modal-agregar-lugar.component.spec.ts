import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarLugarComponent } from './modal-agregar-lugar.component';

describe('ModalAgregarLugarComponent', () => {
  let component: ModalAgregarLugarComponent;
  let fixture: ComponentFixture<ModalAgregarLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
