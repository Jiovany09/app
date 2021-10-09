import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  private readonly token = 'token';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getJwtToken()) {
      request = this.addToken(request, this.getJwtToken());
    }

    return next.handle(request).pipe(catchError(error => {
      return throwError(error);
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `${token}`,
      },
    });
  }

  getJwtToken() {
    return localStorage.getItem('token');
  }
}
