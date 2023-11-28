import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaronKalinComponent } from './aaron-kalin.component';

describe('AaronKalinComponent', () => {
  let component: AaronKalinComponent;
  let fixture: ComponentFixture<AaronKalinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaronKalinComponent]
    });
    fixture = TestBed.createComponent(AaronKalinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
