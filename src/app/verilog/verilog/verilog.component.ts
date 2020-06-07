import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app/project/project.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file.model';
import { OutputDeviceFile } from '@app/library/shared/output-device-file.model';
import { ApiService } from '@app/api/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verilog',
  templateUrl: './verilog.component.html',
  styleUrls: ['./verilog.component.scss'],
})
export class VerilogComponent implements OnInit {
  inputSensorFiles: InputSensorFileDescriptor[];
  outputDeviceFiles: OutputDeviceFile[];

  public sampleVerilog = [
    'and_gate.v',
    'xor_gate.v',
    'struct.v',
    'mixed.v',
    'sub_modules.v',
    '0x01_behavioral.v',
    '0x01.v',
    '0x6F.v',
    '0x78.v',
    'sr_latch.v',
  ];

  constructor(private apiService: ApiService, public projectService: ProjectService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.apiService.inputSensorFiles().subscribe((data) => {
      this.inputSensorFiles = data;
    });
    this.apiService.outputDeviceFiles().subscribe((data) => {
      this.outputDeviceFiles = data;
    });
  }

  verilog(verilog: string) {
    this.projectService.project.verilog = verilog;
  }

  loadSample(event: any) {
    // console.log(event.detail.value);
    this.httpClient
      .get<string>('/assets/verilog/' + event.detail.value, { responseType: 'text' as 'json' })
      .subscribe((data) => {
        window['editor'].setValue(data, 1);
      });
  }
}
