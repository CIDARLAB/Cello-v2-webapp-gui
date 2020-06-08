import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSensorFileListComponent } from './input-sensor-file-list.component';

describe('InputSensorFileListComponent', () => {
  let component: InputSensorFileListComponent;
  let fixture: ComponentFixture<InputSensorFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSensorFileListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSensorFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
