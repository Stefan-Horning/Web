import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreisComponent } from './preis.component';

describe('PreisComponent', () => {
  let component: PreisComponent;
  let fixture: ComponentFixture<PreisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
