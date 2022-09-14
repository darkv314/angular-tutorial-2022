import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = environment.app.apiBaseUrl
  apiKey = environment.auth.apiKey

  constructor(private http: HttpClient,
    private router:Router) { }

    createTournament(body: any): Observable<any> {
      return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.apiKey}`, body)
    }
}
