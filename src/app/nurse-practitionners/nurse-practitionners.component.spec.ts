import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePractitionnersComponent } from './nurse-practitionners.component';

describe('NursePractitionnersComponent', () => {
  let component: NursePractitionnersComponent;
  let fixture: ComponentFixture<NursePractitionnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursePractitionnersComponent]
    });
    fixture = TestBed.createComponent(NursePractitionnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
