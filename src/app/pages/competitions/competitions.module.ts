import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionsPageRoutingModule } from './competitions-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { CompetitionsPage } from './competitions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompetitionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CompetitionsPage]
})
export class CompetitionsPageModule {}
