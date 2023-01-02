import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }))

  it('should create théapp', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  })
})
