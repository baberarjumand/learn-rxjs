import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example1aPage } from './example1a.page';

const routes: Routes = [
  {
    path: '',
    component: Example1aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example1aPageRoutingModule {}
