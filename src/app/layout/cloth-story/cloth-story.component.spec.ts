import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothStoryComponent } from './cloth-story.component';

describe('ClothStoryComponent', () => {
  let component: ClothStoryComponent;
  let fixture: ComponentFixture<ClothStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
