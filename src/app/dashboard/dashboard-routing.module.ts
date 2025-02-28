import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const CHILD_ROUTES: Routes = [
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
        outlet: 'child',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CHILD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
