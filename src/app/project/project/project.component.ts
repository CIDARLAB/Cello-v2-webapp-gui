import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(public projectService: ProjectService, private alertController: AlertController) {}

  ngOnInit(): void {}

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
            this.projectService.submit();
          },
        },
      ],
    });
    return await alert.present();
  }
}
