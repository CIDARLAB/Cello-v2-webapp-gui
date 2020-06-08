import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSensorFileManagerComponent } from './input-sensor-file-manager.component';

describe('InputSensorFileManagerComponent', () => {
  let component: InputSensorFileManagerComponent;
  let fixture: ComponentFixture<InputSensorFileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSensorFileManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSensorFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
