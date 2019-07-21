import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLugarComponent } from './registro-lugar.component';

describe('RegistroLugarComponent', () => {
  let component: RegistroLugarComponent;
  let fixture: ComponentFixture<RegistroLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
