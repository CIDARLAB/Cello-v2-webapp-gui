import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPage } from './submit.page';

describe('SubmitPage', () => {
  let component: SubmitPage;
  let fixture: ComponentFixture<SubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
