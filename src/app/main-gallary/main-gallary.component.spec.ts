import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGallaryComponent } from './main-gallary.component';

describe('MainGallaryComponent', () => {
  let component: MainGallaryComponent;
  let fixture: ComponentFixture<MainGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
