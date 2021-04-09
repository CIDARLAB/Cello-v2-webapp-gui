import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(
    public projectService: ProjectService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {}

  async toast(message: string, color: string = '') {
    const toast = await this.toastController.create({
      message,
      position: 'bottom',
      color,
      duration: 2000,
    });
    return await toast.present();
  }

  async submit() {
    const alert = await this.alertController.create({
      header: 'Submit',
      inputs: [
        {
          name: 'name',
          placeholder: 'Project name',
        },
        {
          name: 'description',
          placeholder: 'Description',
          type: 'textarea',
        },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: (data) => {
            this.projectService.project.name = data.name;
            this.projectService.project.description = data.description;
            if (!this.projectService.project.name) {
              this.toast('Project Name is Empty. Please fill out Project Name.');
            } else if (!this.projectService.project.description) {
              this.toast('Description Name is Empty. Please fill out Project Description.');
            } else {
              this.projectService.submit();
            }
          },
        },
      ],
    });
    return await alert.present();
  }
}
