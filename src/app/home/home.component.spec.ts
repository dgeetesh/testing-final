import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//component creation check
  it('should create', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // event calling check
  it('should click on button', async(() => {

    const fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    // tick();
    expect(app.listenOnClick).toEqual('The On click event is called');
  
  }));
});
