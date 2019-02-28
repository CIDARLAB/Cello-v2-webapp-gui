import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilogPage } from './verilog.page';

describe('VerilogPage', () => {
  let component: VerilogPage;
  let fixture: ComponentFixture<VerilogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerilogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerilogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
