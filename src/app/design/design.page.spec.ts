import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesignPage } from './design.page';

describe('DesignPage', () => {
  let component: DesignPage;
  let fixture: ComponentFixture<DesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
