import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViSbolPage } from './visbol.page';

describe('ViSbolPage', () => {
    let component: ViSbolPage;
    let fixture: ComponentFixture<ViSbolPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViSbolPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViSbolPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
