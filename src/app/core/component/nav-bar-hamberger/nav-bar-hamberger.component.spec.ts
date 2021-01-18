import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHambergerComponent } from './nav-bar-hamberger.component';

describe('NavBarHambergerComponent', () => {
  let component: NavBarHambergerComponent;
  let fixture: ComponentFixture<NavBarHambergerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarHambergerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHambergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
