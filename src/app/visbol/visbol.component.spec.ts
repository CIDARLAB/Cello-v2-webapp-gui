import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisbolPage } from './visbol.page';

describe('VisbolPage', () => {
  let component: VisbolPage;
  let fixture: ComponentFixture<VisbolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisbolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
