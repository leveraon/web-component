import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const CHILD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'accordion',
        pathMatch: 'full',
        outlet: 'dashboard',
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('../accordion-example/accordion-example.component').then(
            (c) => c.AccordionExampleComponent
          ),
        outlet: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CHILD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
