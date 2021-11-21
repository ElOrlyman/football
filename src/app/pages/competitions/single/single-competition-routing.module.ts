
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCompetitionPage } from './single-competition.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCompetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCompetitionPageRoutingModule {}
