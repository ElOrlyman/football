
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UtilsService } from './../utils/utils.service';

import { ITeam } from './../../models/ITeam';

import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  get(teamId: number): Observable<ITeam> {
    let headers = new HttpHeaders();
    headers = headers.set('x-auth-token', sessionStorage.getItem('token'));
    return this.http.get<ITeam>(`${this.apiUrl}/teams/${teamId}`,  { headers }).pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.utilsService.presentSimpleAlert('Error', `Error: ${error.error.message}`);
        } else {
          this.utilsService.presentSimpleAlert('Error', this.utilsService.getServerErrorMessage(error));
        }
        return of(null);
      })
    );
  }
}
