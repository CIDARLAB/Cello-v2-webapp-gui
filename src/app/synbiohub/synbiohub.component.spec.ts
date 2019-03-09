import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynBioHubPage } from './synbiohub.page';

describe('SynBioHubPage', () => {
    let component: SynBioHubPage;
    let fixture: ComponentFixture<SynBioHubPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SynBioHubPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SynBioHubPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
