import { Injectable } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { Observable } from 'rxjs';
import { Project } from './shared/project.model';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  project: Project;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.project = new Project();
  }

  // async submit() {
  // return this.apiService.specify(this.project.getSpecification(), this.project.name);
  // }

  async alert(message: any) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK'],
    });
    return await alert.present();
  }

  async toast(message: string, color: string = '') {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: color,
      duration: 2000,
    });
    return await toast.present();
  }

  async submit() {
    const name = this.project.name;
    return Promise.resolve()
      .then(() => {
        // let body = this.project.getSpecification();
        this.toast('Submitting project. Results will appear after successful execution.');
        return this.apiService.createProject(this.project).toPromise();
      })
      .then(() => {
        if (this.project.name == name) {
          this.apiService.getProjectResults(name).subscribe((result) => {
            this.project.results = result.sort((a, b) => (a.name > b.name ? 1 : -1));
          });
          this.toast('Project ' + name + ' finished successfully.', 'success');
        }
      })
      .catch((error) => {
        this.toastController.dismiss();
        this.alert(error.error.message);
      });
  }
}
