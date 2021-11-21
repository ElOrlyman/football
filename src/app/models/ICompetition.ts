import { IArea } from './IArea';
import { ISeason } from './ISeason';

export interface ICompetition {
  id: number;
  area: IArea;
  name: string;
  code: string;
  emblemUrl: string;
  plan: string;
  currentSeason: ISeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}
export interface ICompetitionResponse {
  count: number;
  filters?: any;
  competitions: ICompetition[];
}
