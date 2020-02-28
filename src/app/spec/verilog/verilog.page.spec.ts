import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerilogPage } from './verilog.page';

describe('VerilogPage', () => {
  let component: VerilogPage;
  let fixture: ComponentFixture<VerilogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerilogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerilogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
