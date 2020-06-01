import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEditorComponent } from './output-editor.component';

describe('OutputEditorComponent', () => {
  let component: OutputEditorComponent;
  let fixture: ComponentFixture<OutputEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
