import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoundationComponent } from './ui-foundation.component';

describe('UiFoundationComponent', () => {
  let component: UiFoundationComponent;
  let fixture: ComponentFixture<UiFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFoundationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
