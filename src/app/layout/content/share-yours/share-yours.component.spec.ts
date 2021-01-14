import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareYoursComponent } from './share-yours.component';

describe('ShareYoursComponent', () => {
  let component: ShareYoursComponent;
  let fixture: ComponentFixture<ShareYoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareYoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
