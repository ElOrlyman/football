import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

import { ICompetition } from './../../models/ICompetition';

@Injectable({
  providedIn: 'root',
})
export class CompetitionsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAvailableSeasons(): Observable<number[]> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http.get<number[]>(`${this.apiUrl}/competitions`, { headers }).pipe(
      pluck('competitions'),
      filter((x: ICompetition[]) => {
        if (x && x.length) {
          return true;
        } else {
          return false;
        }
      }),
      map((cmpArray: ICompetition[]) =>
        cmpArray.map((cmp: ICompetition) => {
          if (cmp && cmp.currentSeason) {
            return new Date(cmp.currentSeason.startDate).getFullYear();
          } else {
            return 0;
          }
        }).filter((x: number) => x !== 0)
      ),
      map((res2) => [...new Set(res2)]),
      map((res3) => res3.sort().reverse())
    );
  }

  getAll(season: number): Observable<ICompetition[]> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http
      .get<any>(`${this.apiUrl}/competitions`, { headers })
      .pipe(
        map((result) =>
          result.competitions.filter(
            (cmp: ICompetition) =>
              new Date(cmp.currentSeason?.startDate).getFullYear() === season
          )
        )
      );
  }

  get(competitionId: number): Observable<ICompetition> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http.get<any>(
      `${this.apiUrl}/competitions/${competitionId}/teams`,
      { headers }
    );
  }
}
