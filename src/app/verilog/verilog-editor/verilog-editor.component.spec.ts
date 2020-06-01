import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilogEditorComponent } from './verilog-editor.component';

describe('VerilogEditorComponent', () => {
  let component: VerilogEditorComponent;
  let fixture: ComponentFixture<VerilogEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerilogEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerilogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
