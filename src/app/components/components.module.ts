import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CompetitionComponent } from './competition/competition.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  entryComponents: [],
  declarations: [
    CompetitionComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CompetitionComponent,
    TeamComponent
  ],
})
export class ComponentsModule {}
