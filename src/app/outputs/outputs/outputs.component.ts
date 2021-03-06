import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { OutputDeviceFileDescriptor } from '@app/library/shared/output-device-file-descriptor.model';
import { ModalController } from '@ionic/angular';
import { OutputDeviceFileListComponent } from '../output-device-file-list/output-device-file-list.component';
import { finalize } from 'rxjs/operators';
import { OutputDevice } from '@app/library/shared/file/output-device.model';
import { ProjectService } from '@app/project/project.service';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.scss'],
})
export class OutputsComponent implements OnInit {
  @Input() symbols: string[];
  outputDeviceFiles: OutputDeviceFileDescriptor[];
  outputDevices: OutputDevice[];

  constructor(
    private apiService: ApiService,
    private projectService: ProjectService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.apiService.getOutputDeviceFiles().subscribe((data) => {
      this.outputDeviceFiles = data;
    });
  }

  onFileInput(event: any) {
    let file = event.target.files[0];
    this.apiService
      .addOutputDeviceFile(file)
      .pipe(
        finalize(() => {
          this.getFiles();
        })
      )
      .subscribe();
  }

  onSelectFile(event: any): void {
    this.projectService.project.library.outputDeviceFile = event.detail.value.file;
    this.apiService.getOutputDeviceFile(event.detail.value.file).subscribe((data) => {
      this.outputDevices = [];
      for (let obj of JSON.parse(data)) {
        if (obj.collection === 'output_devices') {
          this.outputDevices.push(obj);
        }
      }
    });
  }

  onAssign(event: any) {
    let map = {};
    for (let key of Object.keys(event)) {
      map[key] = event[key]['name'];
    }
    this.projectService.project.constraints.output_constraints = map;
  }

  async manage() {
    let deleteEmitter = new EventEmitter();
    deleteEmitter.subscribe((result: OutputDeviceFileDescriptor) => {
      this.apiService
        .deleteOutputDeviceFile(result.file)
        .pipe(
          finalize(() => {
            this.getFiles();
          })
        )
        .subscribe();
    });
    let downloadEmitter = new EventEmitter();
    downloadEmitter.subscribe((result: OutputDeviceFileDescriptor) => {
      this.apiService.getOutputDeviceFile(result.file).subscribe();
    });
    const modal = await this.modalController.create({
      component: OutputDeviceFileListComponent,
      componentProps: {
        outputDeviceFiles: this.outputDeviceFiles,
        delete: deleteEmitter,
        download: downloadEmitter,
      },
      cssClass: 'shrink-modal',
    });
    return await modal.present();
  }
}
