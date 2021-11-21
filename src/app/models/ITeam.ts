import { IPlayer } from './IPlayer';
import { IArea } from './IArea';

export interface ITeam {
  id: number;
  area: IArea;
  name: string;
  shortName: string;
  tla: null | string;
  crestUrl: string;
  address: string;
  phone: null | string;
  website: string;
  email: null | string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
  squad?: IPlayer[];
}
