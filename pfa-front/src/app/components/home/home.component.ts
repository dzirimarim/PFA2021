import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // users: User[] = [];
  currentUser:any;
  authoritie:any;
  isAdmin: boolean = false;
  isManager: boolean = false;
  constructor(private userService: UserService, private router: Router, private auth: RegisterService) { }

  ngOnInit() {
     /* this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });*/
      this.auth.currentUser.subscribe(x => {
          this.currentUser = x;

      });
      this.currentUser.authorities.forEach((element:any) => {
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