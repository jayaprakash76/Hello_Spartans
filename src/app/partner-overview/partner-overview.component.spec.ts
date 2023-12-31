import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerOverviewComponent } from './partner-overview.component';

describe('PartnerOverviewComponent', () => {
  let component: PartnerOverviewComponent;
  let fixture: ComponentFixture<PartnerOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerOverviewComponent]
    });
    fixture = TestBed.createComponent(PartnerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
