import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  isSuccess = false;
  constructor(private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DialogData>,
    private authService: RegisterService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    let currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
      this.router.navigate(["home"])
      this.onNoClick();
    }
    this.isLogin = this.data.isLogin;
    console.log(this.isLogin)
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeRequest(loginRequest: any) {
    this.isLogin = loginRequest.isLogin;
    this.isSuccess = loginRequest.success;
    console.log(this.isSuccess)
    if (this.isSuccess && this.isLogin) {
      //route here please
      this.onNoClick();
    }
    console.log(this.isLogin)

  }

}
export interface DialogData {
  isLogin: boolean;
  success: boolean;

}