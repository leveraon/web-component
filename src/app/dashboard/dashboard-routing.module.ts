import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const childRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
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
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
