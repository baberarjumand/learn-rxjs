import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrereqsPage } from './prereqs.page';

const routes: Routes = [
  {
    path: '',
    component: PrereqsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrereqsPageRoutingModule {}
