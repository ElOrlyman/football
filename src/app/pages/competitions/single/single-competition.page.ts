import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CompetitionsService } from 'src/app/services/competitions/competitions.service';
import { ICompetition } from 'src/app/models/ICompetition';

import { ITeam } from 'src/app/models/ITeam';

@Component({
  selector: 'app-single-competition',
  templateUrl: './single-competition.page.html',
  styleUrls: ['./single-competition.page.scss'],
})
export class SingleCompetitionPage implements OnDestroy {

  competition: ICompetition;
  competitionSub: Subscription;

  teams: ITeam[] = [];
  fTeams: ITeam[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cmpService: CompetitionsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.competitionSub = this.cmpService.get(params.id).subscribe((cmp: any) => {
        this.competition = cmp.competition;
        this.teams = cmp.teams;
        this.fTeams = cmp.teams;
      });
    });
  }
  onSearchChange(event: any) {
    if(event.detail.value === '') {
      this.fTeams = this.teams;
    } else {
      this.fTeams = this.teams.filter(team => team.name.toLowerCase().includes(event.detail.value));
    }
  }

  ngOnDestroy(){
    this.competitionSub.unsubscribe();
  }

}
