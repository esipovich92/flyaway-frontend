import { TestBed, async } from '@angular/core/testing';
import { FlyawayComponent } from './flyaway.component';
describe('FlyawayComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlyawayComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FlyawayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'flyaway-frontend'`, async(() => {
    const fixture = TestBed.createComponent(FlyawayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('flyaway-frontend');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(FlyawayComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to flyaway-frontend!');
  }));
});
