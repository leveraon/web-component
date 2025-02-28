import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRendererComponent } from './component-renderer.component';

describe('AccordionExampleComponent', () => {
  let component: ComponentRendererComponent;
  let fixture: ComponentFixture<ComponentRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
