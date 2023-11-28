import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianAssistantsComponent } from './physician-assistants.component';

describe('PhysicianAssistantsComponent', () => {
  let component: PhysicianAssistantsComponent;
  let fixture: ComponentFixture<PhysicianAssistantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicianAssistantsComponent]
    });
    fixture = TestBed.createComponent(PhysicianAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
