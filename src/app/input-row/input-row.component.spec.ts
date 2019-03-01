import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRowPage } from './input-row.page';

describe('InputRowPage', () => {
  let component: InputRowPage;
  let fixture: ComponentFixture<InputRowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
