import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpMedComponent } from './op-med.component';

describe('OpMedComponent', () => {
  let component: OpMedComponent;
  let fixture: ComponentFixture<OpMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpMedComponent]
    });
    fixture = TestBed.createComponent(OpMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
