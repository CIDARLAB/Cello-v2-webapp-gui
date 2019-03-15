import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintPage } from './constraint.page';

describe('ConstraintPage', () => {
    let component: ConstraintPage;
    let fixture: ComponentFixture<ConstraintPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConstraintPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConstraintPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
