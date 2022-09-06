import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://upb.com/user'

  constructor(private http: HttpClient) { 

    this.http.get(this.url + '?size=30&limit=40&filter=valdez')
    .subscribe(res => {
      console.log('respuesta get: ', res)
    })

    this.http.post(this.url, {name: 'juan', age: '10'})
    .subscribe(res => {
      console.log('respuesta post: ', res)
    })

    this.http.put(this.url, {id:1 ,name: 'juan', age: '10'})
    .subscribe(res => {
      console.log('respuesta put: ', res)
    })

    this.http.patch(this.url, {id:1 ,name: 'juan'})
    .subscribe(res => {
      console.log('respuesta patch: ', res)
    })

    this.http.delete(this.url + '?id=1')
    .subscribe(res => {
      console.log('respuesta delete: ', res)
    })

  }
}
