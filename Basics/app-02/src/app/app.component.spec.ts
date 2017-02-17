/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component'

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule 
      ],
      declarations: [
        AppComponent,
        HeroDetailComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heros!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heros');
  }));

  // it('should render title in a h2 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //         fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   //expect(compiled.querySelector('h2').textContent).toContain('Tour of Heros');
  // }));
});