import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrautComponent } from './braut.component';

describe('BrautComponent', () => {
  let component: BrautComponent;
  let fixture: ComponentFixture<BrautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrautComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
