import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { OutputDeviceFileDescriptor } from '@app/library/shared/output-device-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { OutputDeviceFileListComponent } from '../output-device-file-list/output-device-file-list.component';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.scss'],
})
export class OutputsComponent implements OnInit {
  @Input() symbols: string[];
  outputDeviceFiles: OutputDeviceFileDescriptor[];
  outputDevices: any[] = ['YFP', 'RFP'];

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.apiService.getOutputDeviceFiles().subscribe((data) => {
      this.outputDeviceFiles = data;
    });
  }

  select(event: any) {
    this.apiService.getOutputDeviceFile(event.detail.value.file).subscribe((data) => {
      console.log(data);
    });
  }

  async manage() {
    const modal = await this.modalController.create({
      component: OutputDeviceFileListComponent,
      componentProps: {
        outputDeviceFiles: this.outputDeviceFiles,
      },
      cssClass: 'shrink-modal',
    });
    return await modal.present();
  }
}
