import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VigilanceModePage } from './vigilance-mode.page';

describe('VigilanceModePage', () => {
  let component: VigilanceModePage;
  let fixture: ComponentFixture<VigilanceModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilanceModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VigilanceModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
