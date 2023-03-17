import { ComponentFixture, TestBed } from '@angular/core/testing';
// In real world testing of mechanical parts, a fixture is a statndardized frame into which the test object is mounted
// ComponentFixture holds the Component and provides a convenient interface to both the Component instance and the rendered DON
// TestBed creates and configures Angular env
import { HeaderComponent } from './header.component';

// define a test suite for the CounterComponent
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerElement: HTMLElement;
  
  beforeEach(async () => { // use async to wait for components to compile
    await TestBed.configureTestingModule({ 
      // add headerComponent object to the testing module
      declarations: [ HeaderComponent ]
      // return the test bed
    })
    // compile all declared components, directives, and pipes
    //    -- > translate the template files into JavaScript code
    .compileComponents();
  });

  beforeEach(() => {
    // render the component into a div container element in the HTML DOM
    fixture = TestBed.createComponent(HeaderComponent);
    // fixture references the Component instance via the componentInstance property
    component = fixture.componentInstance; // this instance is mainly used to set inputs and subscribe to outputs
    // obtain reference to the header using 'query Selector' method
    headerElement = fixture.nativeElement.querySelector('.header');
    // add dynamic HTML such as template bindings like {{ count }}
    // fixture.detectChanges();
  });
  
  // check that the component has been created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // check that header component has a title
  it('should render title', () => {
    fixture.detectChanges();
    expect(headerElement.querySelector('.header')?.textContent).toContain('Recipe Finder');
  });
 
  // check that the width of the header element is equal to the width of the screen. 
  it(`should span the width of the screen`, () => {
    // compare the 'offsetWidth' property of the header element to the 'innerWidth' property of the 'window' object
    expect(headerElement.offsetWidth).toBe(window.innerWidth);
  }); 

});
