import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TeamsService } from './../../services/teams/teams.service';

import { ITeam } from './../../models/ITeam';
import { IPlayer } from 'src/app/models/IPlayer';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnDestroy {

  team: ITeam;
  teamsSub: Subscription;

  players: IPlayer[] = [];
  fPlayers: IPlayer[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.teamsSub = this.teamsService.get(params.id).subscribe((res: ITeam) => {
        this.team = res;
        console.log(res);
        this.players = res.squad.sort(this.sortByName);
        this.fPlayers = res.squad.sort(this.sortByName);
      });
    });
  }

  onSearchChange(event: any) {
    if(event.detail.value === '') {
      this.fPlayers = this.players;
    } else {
      this.fPlayers = this.players.filter(player => player.name.toLowerCase().includes(event.detail.value));
    }
  }

  sortByName(a: any, b: any) {
    const nameA = a.name.toLocaleUpperCase();
    const nameB = b.name.toLocaleUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

  ngOnDestroy() {
    this.teamsSub.unsubscribe();
  }

}
