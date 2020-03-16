import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrereqsPage } from './prereqs.page';

describe('PrereqsPage', () => {
  let component: PrereqsPage;
  let fixture: ComponentFixture<PrereqsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrereqsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrereqsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
