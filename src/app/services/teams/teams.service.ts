import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITeam } from './../../models/ITeam';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(teamId: number): Observable<ITeam> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http.get<ITeam>(`${this.apiUrl}/teams/${teamId}`,  { headers });
  }
}
