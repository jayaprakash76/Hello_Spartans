import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriatricsComponent } from './geriatrics.component';

describe('GeriatricsComponent', () => {
  let component: GeriatricsComponent;
  let fixture: ComponentFixture<GeriatricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeriatricsComponent]
    });
    fixture = TestBed.createComponent(GeriatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
