import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    RouterOutlet,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  @ViewChild(MatDrawer) sidenav!: MatDrawer;

  router: Router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  events: string[] = [];
  opened: boolean = false;
  paths = ['accordion', 'test'];

  toggleSideNav(): void {
    this.sidenav.toggle();
  }

  navigateTo(path: string): void {
    this.router.navigate([`${path}`], { relativeTo: this.route });
    this.toggleSideNav();
  }
}
