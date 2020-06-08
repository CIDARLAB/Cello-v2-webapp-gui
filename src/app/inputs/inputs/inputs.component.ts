import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { InputSensorFileListComponent } from '../input-sensor-file-list/input-sensor-file-list.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() symbols: string[];
  inputSensorFiles: InputSensorFileDescriptor[];
  inputSensors: any[] = ['pTac', 'pTet', 'pBAD', 'pLuxStar'];

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.apiService.inputSensorFiles().subscribe((data) => {
      this.inputSensorFiles = data;
    });
  }

  select(event: any) {
    this.apiService.getInputSensorFile(event.detail.value.file).subscribe((data) => {
      console.log(data);
    });
  }

  async manage() {
    const modal = await this.modalController.create({
      component: InputSensorFileListComponent,
      componentProps: {
        inputSensorFiles: this.inputSensorFiles,
      },
      cssClass: 'shrink-modal',
    });
    return await modal.present();
  }
}
