import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabComponent } from './rehab.component';

describe('RehabComponent', () => {
  let component: RehabComponent;
  let fixture: ComponentFixture<RehabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehabComponent]
    });
    fixture = TestBed.createComponent(RehabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
