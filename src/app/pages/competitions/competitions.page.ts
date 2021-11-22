import { Component, OnInit, OnDestroy } from '@angular/core';

import { CompetitionsService } from './../../services/competitions/competitions.service';
import { ICompetition } from './../../models/ICompetition';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit, OnDestroy {

  availableSeasons: number[] = [];
  currentSeason = 0;
  competitions: ICompetition[] = [];
  fCompetitions: ICompetition[] = [];

  availableSeasonsSub: Subscription;
  competitionsSub: Subscription;

  constructor(
    private alertCtrl: AlertController,
    private cmpService: CompetitionsService
  ) { }

  ngOnInit() {
    this.loadAvailableSeasons();
  }

  loadAvailableSeasons() {
    this.availableSeasonsSub = this.cmpService.getAvailableSeasons().subscribe((seasons) => {
      this.availableSeasons = seasons;
      const isNowSeason = seasons.find(season => season.toString() === new Date().getFullYear().toString());
      this.currentSeason = isNowSeason ? isNowSeason : seasons[0];
    });
  }

  loadCompetitions(season?: number) {
    if (!season) {
      season = new Date().getFullYear();
    }
    this.competitionsSub = this.cmpService.getAll(season).subscribe((competitions: ICompetition[]) => {
      this.competitions = competitions;
      this.fCompetitions = competitions;
    });
  }

  onSearchChange(event: any) {
    if(event.detail.value === '') {
      this.fCompetitions = this.competitions;
    } else {
      this.fCompetitions = this.competitions.filter(cmp => cmp.name.toLowerCase().includes(event.detail.value));
    }
  }

  presentPopover() {
    const seasonBtn: HTMLElement = document.getElementById('season') as HTMLElement;
    seasonBtn.click();
  }

  seasonChange(event: any) {
    this.loadCompetitions(event.detail.value);
  }

  async noPermissionAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Competition unavailable',
      message: `Sorry, we can't get information about this competition at the moment.`,
      buttons: [
        {
          text: 'OK',
          cssClass: 'btn-primary'
        }
      ]
    });

    await alert.present();
  }

  ngOnDestroy(){
    this.availableSeasonsSub.unsubscribe();
    this.competitionsSub.unsubscribe();
  }

}
