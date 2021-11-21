import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { ICompetition } from './../../models/ICompetition';

@Injectable({
  providedIn: 'root',
})
export class CompetitionsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAvailableSeasons(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http.get<any>(`${this.apiUrl}/competitions`, { headers }).pipe(
      pluck('competitions'),
      map((res: any) =>
        res.map((cmp: ICompetition) => {
          if (cmp && cmp.currentSeason) {
            return new Date(cmp.currentSeason?.startDate).getFullYear();
          } else {
            return 0;
          }
        }).filter((x: number) => x !== 0)
      ),
      map((res) => [...new Set(res)]),
      map((res) => res.sort().reverse())
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
