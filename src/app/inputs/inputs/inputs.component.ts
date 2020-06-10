import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { InputSensorFileListComponent } from '../input-sensor-file-list/input-sensor-file-list.component';
import { finalize } from 'rxjs/operators';
import { InputSensor } from '@app/library/shared/file/input-sensor.model';
import * as fileSaver from 'file-saver';
import { ProjectService } from '@app/project/project.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() symbols: string[];
  inputSensorFiles: InputSensorFileDescriptor[];
  inputSensors: InputSensor[];

  constructor(
    private apiService: ApiService,
    private projectService: ProjectService,
    private modalController: ModalController
  ) {}

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

  onSelectFile(event: any): void {
    this.projectService.project.library.inputSensorFile = event.detail.value.file;
    this.apiService.getInputSensorFile(event.detail.value.file).subscribe((data) => {
      this.inputSensors = [];
      for (let obj of JSON.parse(data)) {
        if (obj.collection === 'input_sensors') {
          this.inputSensors.push(obj);
        }
      }
    });
  }

  onAssign(event: any) {
    let map = {};
    for (let key of Object.keys(event)) {
      map[key] = event[key]['name'];
    }
    this.projectService.project.constraints.input_constraints = map;
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
    downloadEmitter.subscribe((descriptor: InputSensorFileDescriptor) => {
      this.apiService.getInputSensorFile(descriptor.file).subscribe((data) => {
        let blob: any = new Blob([data], { type: 'application/json' });
        fileSaver.saveAs(blob, descriptor.file);
      });
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
