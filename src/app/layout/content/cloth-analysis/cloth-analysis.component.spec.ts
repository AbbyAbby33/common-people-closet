import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothAnalysisComponent } from './cloth-analysis.component';

describe('ClothAnalysisComponent', () => {
  let component: ClothAnalysisComponent;
  let fixture: ComponentFixture<ClothAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
