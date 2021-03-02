import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoBtnComponent } from './web-info-btn.component';

describe('WebInfoBtnComponent', () => {
  let component: WebInfoBtnComponent;
  let fixture: ComponentFixture<WebInfoBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInfoBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInfoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
