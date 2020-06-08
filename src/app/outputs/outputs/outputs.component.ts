import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { OutputDeviceFileDescriptor } from '@app/library/shared/output-device-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { OutputDeviceFileManagerComponent } from '../output-device-file-manager/output-device-file-manager.component';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.scss'],
})
export class OutputsComponent implements OnInit {
  @Input() symbols: string[];
  outputDeviceFiles: OutputDeviceFileDescriptor[];
  outputDeviceFile: OutputDeviceFileDescriptor;
  outputDevices: any[] = ['YFP', 'RFP'];

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.apiService.outputDeviceFiles().subscribe((data) => {
      this.outputDeviceFiles = data;
    });
  }

  async manage() {
    const modal = await this.modalController.create({
      component: OutputDeviceFileManagerComponent,
    });
    return await modal.present();
  }
}
