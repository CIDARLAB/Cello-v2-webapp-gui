import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ModalController } from '@ionic/angular';
import { ApiService } from '@app/api/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  guiVersion: string | null = environment.version;
  apiVersion: string | null;
  coreVersion: string | null;

  constructor(private apiService: ApiService, private modalController: ModalController) {
    this.setApiVersion();
    this.setCoreVersion();
  }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  private setApiVersion(): void {
    this.apiService.getApiVersion().subscribe((version) => {
      this.apiVersion = version;
    });
  }

  private setCoreVersion(): void {
    this.apiService.getCoreVersion().subscribe((version) => {
      this.coreVersion = version;
    });
  }
}
