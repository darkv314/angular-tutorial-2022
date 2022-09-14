import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();

    if(token) {
      let params = new HttpParams();
      params = params.append('auth', token);
      request = request.clone({
        url: request.url,
        params: params
      })
    }

    return next.handle(request);
  }
}
