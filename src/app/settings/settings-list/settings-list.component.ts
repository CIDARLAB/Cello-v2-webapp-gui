import { Component, Input, OnInit } from '@angular/core';
import { Logger } from '@app/@core';
import { ApiService } from '@app/api/api.service';
import { Settings } from '../shared/settings.model';
import { finalize } from 'rxjs/operators';
import { Application } from '../shared/application.model';

const log = new Logger('SettingsList');

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
})
export class SettingsListComponent implements OnInit {
  @Input() settings: Settings = new Settings();
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService
      .settings()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.settings = data;
      });
  }

  typeOf(value: any) {
    return typeof value;
  }
}
