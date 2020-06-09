import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { InputSensorFileListComponent } from '../input-sensor-file-list/input-sensor-file-list.component';
import { finalize } from 'rxjs/operators';

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
    this.getFiles();
  }

  getFiles(): void {
    this.apiService.getInputSensorFiles().subscribe((data) => {
      this.inputSensorFiles = data;
    });
  }

  onFileInput(event: any) {
    let file = event.target.files[0];
    this.apiService
      .addInputSensorFile(file)
      .pipe(
        finalize(() => {
          this.getFiles();
        })
      )
      .subscribe();
  }

  select(event: any): void {
    this.apiService.getInputSensorFile(event.detail.value.file).subscribe((data) => {
      console.log(data);
    });
  }

  async manage() {
    let deleteEmitter = new EventEmitter();
    deleteEmitter.subscribe((result: InputSensorFileDescriptor) => {
      this.apiService
        .deleteInputSensorFile(result.file)
        .pipe(
          finalize(() => {
            this.getFiles();
          })
        )
        .subscribe();
    });
    let downloadEmitter = new EventEmitter();
    downloadEmitter.subscribe((result: InputSensorFileDescriptor) => {
      this.apiService.getInputSensorFile(result.file).subscribe();
    });
    const modal = await this.modalController.create({
      component: InputSensorFileListComponent,
      componentProps: {
        inputSensorFiles: this.inputSensorFiles,
        delete: deleteEmitter,
        download: downloadEmitter,
      },
      cssClass: 'shrink-modal',
    });
    return await modal.present();
  }
}
