import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@app/api/api.service';
import { ProjectService } from '@app/project/project.service';
import { Result } from '@app/project/shared/result.model';
import { AlertController, ToastController } from '@ionic/angular';
import { SynBioHubService } from '../synbiohub.service';

@Component({
  selector: 'app-synbiohub-submit',
  templateUrl: './synbiohub-submit.component.html',
  styleUrls: ['./synbiohub-submit.component.scss'],
})
export class SynBioHubSubmitComponent implements OnInit {
  @Input() public result: Result;

  public registry: string;
  public collections: object[];
  public loginForm: FormGroup;
  public addToCollection: FormGroup;
  public createCollection: FormGroup;
  public mode: string = 'create';

  constructor(
    private alertController: AlertController,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    public projectService: ProjectService,
    public synBioHubService: SynBioHubService
  ) {
    // this.registry = this.project.registry;
    this.mode = 'create';
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(null, Validators.required),
    });
    this.createCollection = this.formBuilder.group({
      name: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9_]+$')])),
      description: new FormControl(null, Validators.required),
      id: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.pattern('^[A-Za-z_][A-Za-z0-9_]*$')])
      ),
      version: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])),
      citations: new FormControl(),
      overwrite: new FormControl(false, Validators.required),
    });
    this.addToCollection = this.formBuilder.group({
      uri: new FormControl(null, Validators.required),
      overwrite: new FormControl(false, Validators.required),
    });
    if (synBioHubService.token) this.updateCollections(this.registry, true);
  }

  ngOnInit(): void {}

  login(body: { email: string; password: string }) {
    this.synBioHubService
      .login(body, this.registry)
      .toPromise()
      .then((data) => {
        this.synBioHubService.token = data;
      })
      .then(() => {
        this.updateCollections(this.registry, true);
      });
  }

  updateCollections(registry: string, personal?: boolean) {
    this.synBioHubService.getCollections(registry, personal).subscribe((data) => {
      this.collections = data;
    });
  }

  async alert(message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK'],
    });
    return await alert.present();
  }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        },
      ],
      duration: 5000,
    });
    return await toast.present();
  }

  submit(collection: any, project: string, file: string) {
    const body = {
      collection: collection,
    };
    this.synBioHubService.submit(body, project, file, this.registry).subscribe(
      () => {
        this.toast('Succussfully uploaded.');
        this.updateCollections(this.registry, true);
      },
      (error) => {
        this.alert(error.error);
      }
    );
  }

  logout() {
    this.synBioHubService.token = null;
  }
}
