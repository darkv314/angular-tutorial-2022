import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url: string = environment.app.apiUrlBase;

  constructor(private http: HttpClient) { }

  public getAllCars() {
    return this.http.get(`${this.url}cars.json`)
    .pipe(
      map(s => Object.entries(s)),
      map(s => s.map(s => ({id: s[0], ...s[1]})))
    )
  }

  public changeColor(id: any, body: any) {
    // console.log(id)
    return this.http.patch(`${this.url}cars/${id}.json`, body)
  }

  public changeStatus(id: any, body: any) {
    // console.log(id)
    return this.http.patch(`${this.url}cars/${id}.json`, body)
  }

}
