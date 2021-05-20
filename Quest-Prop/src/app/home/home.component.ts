import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];
    currentUser !: { authorities: any[]; };
    authoritie !: string;
    isAdmin: boolean = false;
    isManager: boolean = false;
    constructor(private userService: UserService, private router: Router, private auth: AuthentificationService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
        this.auth.currentUser.subscribe(x => {
            this.currentUser = x;

        });
        this.currentUser.authorities.forEach(element => {
            console.log(element.authority)


            if (element.authority === "ROLE_ADMIN")
                this.isAdmin = true

            else if (element.authority === "ROLE_MANAGER")
                this.isManager = true




        });
        if (this.isAdmin) this.authoritie = "Admin";
        else if (this.isManager) this.authoritie = "Manager";
        else this.authoritie = "Candidate";


    }
}
