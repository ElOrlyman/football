import { Component, Input, OnInit } from '@angular/core';
import { ICompetition } from './../../models/ICompetition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {

  @Input() competition: ICompetition;

  constructor() { }

  ngOnInit() {}

}
