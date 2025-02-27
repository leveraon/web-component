import { Component } from '@angular/core';
import { AccordionComponent } from '@leveraon/foundation';

@Component({
  selector: 'app-dashboard',
  imports: [AccordionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {}
