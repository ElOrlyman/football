import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'competitions',
    pathMatch: 'full'
  },
  {
    path: 'competitions',
    loadChildren: () => import('./pages/competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },
  {
    path: 'competitions/:id',
    loadChildren: () => import('./pages/competitions/single/single-competition.module').then( m => m.SingleCompetitionPageModule)
  },
  {
    path: 'teams/:id',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
