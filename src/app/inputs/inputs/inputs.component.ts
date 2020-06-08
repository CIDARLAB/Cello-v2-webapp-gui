import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { InputSensorFileManagerComponent } from '../input-sensor-file-manager/input-sensor-file-manager.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() symbols: string[];
  inputSensorFiles: InputSensorFileDescriptor[];
  inputSensorFile: InputSensorFileDescriptor;
  inputSensors: any[] = ['pTac', 'pTet', 'pBAD', 'pLuxStar'];

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.apiService.inputSensorFiles().subscribe((data) => {
      this.inputSensorFiles = data;
    });
  }

  async manage() {
    const modal = await this.modalController.create({
      component: InputSensorFileManagerComponent,
    });
    return await modal.present();
  }
}
