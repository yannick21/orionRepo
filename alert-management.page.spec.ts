import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertManagementPage } from './alert-management.page';

describe('AlertManagementPage', () => {
  let component: AlertManagementPage;
  let fixture: ComponentFixture<AlertManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
