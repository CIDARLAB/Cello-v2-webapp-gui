import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SynBioHubSubmitComponent } from './synbiohub-submit.component';

describe('SynBioHubSubmitComponent', () => {
  let component: SynBioHubSubmitComponent;
  let fixture: ComponentFixture<SynBioHubSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SynBioHubSubmitComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynBioHubSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
