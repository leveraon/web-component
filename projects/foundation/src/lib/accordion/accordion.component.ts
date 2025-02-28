import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'lv-accordion',
  imports: [MatExpansionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  standalone: true,
})
export class AccordionComponent {
  readonly panelOpenState = signal(false);
}
