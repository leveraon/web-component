import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExampleComponent } from './accordion-example.component';

describe('AccordionExampleComponent', () => {
  let component: AccordionExampleComponent;
  let fixture: ComponentFixture<AccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
