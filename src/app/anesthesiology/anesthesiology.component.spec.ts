import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiologyComponent } from './anesthesiology.component';

describe('AnesthesiologyComponent', () => {
  let component: AnesthesiologyComponent;
  let fixture: ComponentFixture<AnesthesiologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnesthesiologyComponent]
    });
    fixture = TestBed.createComponent(AnesthesiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
