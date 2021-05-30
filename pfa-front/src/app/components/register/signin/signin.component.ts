import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register.service';
import { DialogData } from '../auth/auth.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output() toLogin = new EventEmitter<DialogData>();
  register() {
    this.toLogin.emit({ isLogin: false, success: false });
  }
  onSuccess() {
    this.router.navigate([this.returnUrl]);
    this.toLogin.emit({ isLogin: true, success: true });
  }
  hide: Boolean = true;

  username = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [
    Validators.required,
  ]);
  returnUrl!: String

  constructor(private authService: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  toggleHide() {
    this.hide = !(this.hide);
  }
  submit() {
    console.log(this.username.value)
    this.authService.login(this.username.value, this.password.value).pipe(first())
      .subscribe(
        data => {

          console.log(data);
          this.onSuccess();
        },
        error => {
          console.log(error.error);

          //this.error = error;
        });
  }
}
