import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothDiamondTemplateComponent } from './cloth-diamond-template.component';

describe('ClothDiamondTemplateComponent', () => {
  let component: ClothDiamondTemplateComponent;
  let fixture: ComponentFixture<ClothDiamondTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothDiamondTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothDiamondTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
