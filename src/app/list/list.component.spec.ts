import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(ListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('User Array length should be 0 before detect change', () => {
    let fixture = TestBed.createComponent(ListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.userList.length).toEqual(0);
  });

  it('User Array length should not be 0', () => {
    let fixture = TestBed.createComponent(ListComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.userList.length).toEqual(2);
  });
});
