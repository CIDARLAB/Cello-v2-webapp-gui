import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputAssignComponent } from './output-assign.component';

describe('OutputAssognComponent', () => {
  let component: OutputAssignComponent;
  let fixture: ComponentFixture<OutputAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputAssignComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
