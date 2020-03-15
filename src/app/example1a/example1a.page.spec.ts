import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example1aPage } from './example1a.page';

describe('Example1aPage', () => {
  let component: Example1aPage;
  let fixture: ComponentFixture<Example1aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example1aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example1aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
