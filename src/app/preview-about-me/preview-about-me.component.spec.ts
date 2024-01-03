import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAboutMeComponent } from './preview-about-me.component';

describe('PreviewAboutMeComponent', () => {
  let component: PreviewAboutMeComponent;
  let fixture: ComponentFixture<PreviewAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
