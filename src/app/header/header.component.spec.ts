import { ComponentFixture, TestBed } from '@angular/core/testing';
// In real world testing of mechanical parts, a fixture is a statndardized frame into which the test object is mounted
// ComponentFixture holds the Component and provides a convenient interface to both the Component instance and the rendered DON
// TestBed creates and configures Angular env
import { HeaderComponent } from './header.component';
import { HarnessLoader } from '@angular/cdk/testing'
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed'
import { MatToolbarHarness } from '@angular/material/toolbar/testing'
import { MaterialModule } from '../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// define a test suite for the CounterComponent
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerElement: HTMLElement;
    
  beforeEach(async () => { // use async to wait for components to compile
    await TestBed.configureTestingModule({ 
      // add headerComponent object to the testing module
      declarations: [ HeaderComponent ],
      imports: [ MaterialModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      // return the test bed
    })
    // compile all declared components, directives, and pipes
    //    -- > translate the template files into JavaScript code
    .compileComponents();
  });

  // let loader: HarnessLoader;

  beforeEach(() => {
    // render the component into a div container element in the HTML DOM
    fixture = TestBed.createComponent(HeaderComponent);

    // fixture references the Component instance via the componentInstance property
    component = fixture.componentInstance; // this instance is mainly used to set inputs and subscribe to outputs
    
    // loader = TestbedHarnessEnvironment.loader(fixture);

    // obtain reference to the header element using 'query Selector' method
    headerElement = fixture.nativeElement.querySelector('#header');
  });
  
  // check that the component has been created successfully.
  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('initializes module', () => {
    const matModule = TestBed.inject(MaterialModule);
    expect(matModule).toBeTruthy();
  });
  
  // check that header component has a title
  it('should render title', () => {

    // add dynamic HTML such as template bindings like {{ count }}
    fixture.detectChanges();
    expect(headerElement.textContent).toContain('Recipe Finder');
  });
 


  // check that the width of the header element is equal to the width of the screen. 
  it(`should span the width of the screen`, () => {
    fixture.detectChanges();
    // compare the 'width' property of the 'element' to the 'innerWidth' property of the 'window' object minus 17 pixels for scrollbar
    expect(document.getElementById('header')!.offsetWidth ).toEqual(window.innerWidth-17);

    // // in harness style, instead of using fixture we use loader
    // const toolBar = await loader.getHarness<MatToolbarHarness>(MatToolbarHarness.with({
    //   selector: '#header'
    // }));
    // const test = toolBar.host()
    // expect((await test).getCssValue('offSetWidth')).toEqual(window.innerWidth));
  }); 

  it('should have background color matching the primary theme hue', () => { 

    expect(getComputedStyle(document.documentElement.querySelector('#header') as Element).backgroundColor).toEqual('rgb(63, 81, 181)');
    
  })
});
