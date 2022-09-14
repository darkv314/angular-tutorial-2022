import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private url = environment.app.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getAllTorneos(): Observable<any> {
    return this.http.get(`${this.url}/data.json`)
    .pipe(
      map(s => Object.entries(s)),
      map(s => s.map(s => ({id: s[0], ...s[1]})))
    )
  }

  createTorneo(body: any): Observable<any> {
    return this.http.post(`${this.url}/data.json`, body)
    .pipe(
      map(s => Object.entries(s)),
      map(s => s.map(s => ({id: s[0], ...s[1]})))
    )
  }
}
