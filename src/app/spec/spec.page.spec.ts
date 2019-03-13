import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecPage } from './spec.page';

describe('SpecPage', () => {
    let component: SpecPage;
    let fixture: ComponentFixture<SpecPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpecPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpecPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
