import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAssignComponent } from './input-assign.component';

describe('InputAssignComponent', () => {
  let component: InputAssignComponent;
  let fixture: ComponentFixture<InputAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputAssignComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
