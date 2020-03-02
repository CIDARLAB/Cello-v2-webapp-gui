import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SynBioHubComponent } from './synbiohub.component';

describe('SynbiohubComponent', () => {
    let component: SynbiohubComponent;
    let fixture: ComponentFixture<SynbiohubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SynbiohubComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SynBioHubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
