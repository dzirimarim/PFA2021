import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./services/authentification.service";

@Injectable()
export class Intercepter implements HttpInterceptor {
    constructor(private authenticationService: AuthentificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let currentUser = this.authenticationService.currentUserValue;
        let reqString: String = request.url.toLowerCase();
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
    }
}