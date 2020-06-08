import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDeviceFileManagerComponent } from './output-device-file-manager.component';

describe('OutputDeviceFileManagerComponent', () => {
  let component: OutputDeviceFileManagerComponent;
  let fixture: ComponentFixture<OutputDeviceFileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputDeviceFileManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDeviceFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
