import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Recipe Finder app is running!');
  // });

  // it(`Header should have title in center`, () => {
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Recipe Finder');
  // });
  
  // it(`Header should span the entire width of the screen`, () => {
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Recipe Finder');
  // });

});
