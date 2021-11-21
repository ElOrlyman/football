import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCompetitionPage } from './single-competition.page';
import { SingleCompetitionPageRoutingModule } from './single-competition-routing.module';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCompetitionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SingleCompetitionPage]
})
export class SingleCompetitionPageModule {}
