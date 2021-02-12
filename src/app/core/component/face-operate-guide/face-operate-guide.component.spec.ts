import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceOperateGuideComponent } from './face-operate-guide.component';

describe('FaceOperateGuideComponent', () => {
  let component: FaceOperateGuideComponent;
  let fixture: ComponentFixture<FaceOperateGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceOperateGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceOperateGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
