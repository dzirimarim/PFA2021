import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: RegisterService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    let reqString: String = request.url.toLowerCase();

    //console.log(currentUser.Token);
    if (currentUser !== null) {
      if (currentUser && currentUser.accessToken) {
        request = request.clone(({
          setHeaders: {
            Authorization: `Bearer ` + currentUser.accessToken
          }
        }));
      }
    }

    console.log(reqString)

    return next.handle(request);
    /* else{
         console.log("Domserver")
         request = request.clone(({
             setHeaders: {
                 Authorization: `Basic ` + btoa('admin:h_ldGoV-hLyysk7o')
             }
         }));
     }*/


    //console.log(request);



  }
}