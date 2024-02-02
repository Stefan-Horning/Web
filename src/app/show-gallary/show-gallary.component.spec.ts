import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGallaryComponent } from './show-gallary.component';

describe('ShowGallaryComponent', () => {
  let component: ShowGallaryComponent;
  let fixture: ComponentFixture<ShowGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
