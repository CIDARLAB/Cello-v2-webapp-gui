import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalTableComponent } from './eval-table.component';

describe('EvalTableComponent', () => {
  let component: EvalTableComponent;
  let fixture: ComponentFixture<EvalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvalTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
