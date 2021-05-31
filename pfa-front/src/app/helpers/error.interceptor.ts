import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegisterService } from '../services/register.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: RegisterService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err.status);

      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
      }
      const error = err.error.message || err.statusText;

      console.log(err);

      return throwError(error);
    }))
  }
}