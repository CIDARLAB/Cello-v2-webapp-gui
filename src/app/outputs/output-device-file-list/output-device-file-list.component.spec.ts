import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDeviceFileListComponent } from './output-device-file-list.component';

describe('OutputDeviceFileListComponent', () => {
  let component: OutputDeviceFileListComponent;
  let fixture: ComponentFixture<OutputDeviceFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputDeviceFileListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDeviceFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
