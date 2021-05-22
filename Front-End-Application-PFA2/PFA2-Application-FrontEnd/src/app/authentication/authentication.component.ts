import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isLogin = true;
  isSuccess = false;
  constructor(private route: ActivatedRoute,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData ) {
    this.isLogin = this.data.isLogin;
    
    
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeRequest(loginRequest: DialogData) {
    this.isLogin = loginRequest.isLogin;
    this.isSuccess = loginRequest.success;
    console.log(this.isSuccess)
    if(this.isSuccess){
      //route here please
      this.onNoClick();
    }
  }

}
export interface DialogData {
  isLogin :  boolean;
  success : boolean;
  
}