import { Injectable } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { Project } from './shared/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  isLoading = false;
  project: Project;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.project = new Project();
    this.apiService.getSettings().subscribe((data) => {
      this.project.settings = data;
    });
    // this.project.name = "vava";
    // this.apiService.getProjectResults("vava").subscribe((result) => {
    //   this.project.results = result.sort((a, b) => (a.name > b.name ? 1 : -1));
    // });
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
    this.isLoading = true;
    const loadingOverlay = await this.loadingController.create({});
    return Promise.resolve()
      .then(() => {
        // let body = this.project.getSpecification();
        this.toast('Submitting project. Results will appear after successful execution.');
        const loading$ = from(loadingOverlay.present());
        return this.apiService.createProject(this.project).toPromise();
      })
      .then(() => {
        if (this.project.name == name) {
          this.apiService.getProjectResults(name).subscribe((result) => {
            this.project.results = result.sort((a, b) => (a.name > b.name ? 1 : -1));
          });
          this.isLoading = false;
          loadingOverlay.dismiss();
          this.toast('Project ' + name + ' finished successfully.', 'success');
        }
      })
      .catch((error) => {
        this.toastController.dismiss();
        this.alert(error.error.message);
      });
  }
}
