import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/user';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() user !: User ;
  newUser: any;
  @Input()
  isAdmin: boolean = false;
  dateOfBirth: any
  user_1 !:User;
  modifie = false;

  timeLeft: number = 5;
  interval !: number ;
  startTimer() {

    this.interval = window.setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.showMessage=false;
        this.pauseTimer();
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  reset(){
    if(this.isAdmin){
      this.userServices.getByUID(this.user.id).subscribe((user: any)=>{
      this.user=user
    });
    }
    else{
      this.userServices.getMyProfile().subscribe((user: any)=>{
        this.user=user
      });
    }
    console.log(this.user_1)
  }
  toggle() {
    
    this.modifie = !this.modifie;
    console.log(this.modifie)
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.initUser(); 
    console.log(this.user)
  }
  initUser() {
    this.showMessage=false;
    this.user_1 = this.user;
    this.roles = [];
    if (this.user) {
      this.dateOfBirth = this.user.dateOfBirth;
      this.user.roles.forEach((element: { roleName: String; }) => {
        let role: String = element.roleName;
        role = role.replace('ROLE_', '');
        role = role.toLowerCase();
        this.roles.push(role.toString());
      });
    }
  }
  edit() { 
    if(!this.isAdmin){
      this.userServices.editme(this.user).subscribe((data: any)=>{
        this.user=data
        this.succes=true
        this.message="Updated succesfully"
        this.showMessage=true;
        this.interval=5;
        this.startTimer()

        console.log(data)
      },
        (error: any)=>{
        this.message="Error"
        this.succes=false;
      })
    }
    else{
      this.userServices.editUsers(this.user).subscribe((data: any)=>{
        this.user=data
        this.message="updated succesfully"
        this.showMessage=true;     
        this.interval=5;
        this.startTimer()

      })
    }
  }
  message !: string
  showMessage=false
  succes=false
  removeUser(){
    this.userServices.removeUser(this.user.id).subscribe((result: { [x: string]: any; })=>{
      if(result && result['message']=="succes"){
        this.showMessage=true
        this.succes=true
        this.message='the user '+ this.user.username+' Deletetd Succesfully'
      }
      else if(result && result['message']){
        this.showMessage=true
        this.succes=true
        this.message=result['message']
      }
      //this.user=undefined
    
    });
  }
  dateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    if( event.value != null){
    this.user.dateOfBirth = event.value
    //.toLocaleDateString('ln', { year: 'numeric', month: 'numeric', day: 'numeric' });
    console.log(event.value);
    this.dateOfBirth = event.value}
    else {
      console.log("erreur!!")
    }
  }




















  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  roleCtrl = new FormControl();
  filteredRoles: Observable<string[]>;
  roles: string[] = [];
  allRoles: string[] = [];
  originalRoles: Role[] = [];

  @ViewChild('roleInput') roleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private roleService: RoleService, private userServices:UserService) {
    this.filteredRoles = this.roleCtrl.valueChanges.pipe(
      startWith(null),
      map((role: string ) => role ? this._filter(role) : this.allRoles.slice()));

    this.roleService.getRoles().subscribe((roles: any[]) => {
      this.originalRoles = roles;
      console.log(this.originalRoles)
      if (this.originalRoles.length > 0) {
        this.originalRoles.forEach((role: Role) => {
          let r: any;
          r= role.roleName
          r = r.replace('ROLE_', '');
          r = r.toLowerCase()
          this.allRoles.push(r)
        })
      }
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.roles.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.roleCtrl.setValue(null);

    }
  }

  remove(role: string): void {
    const index = this.roles.indexOf(role);
    let roleName = role;
    roleName = ('ROLE_' + roleName).toUpperCase();
    // let orRole;
    // this.originalRoles.forEach(element => {
    //  if (element.roleName === roleName) {
    //    orRole = element;
    //  }
    //})
    // const index_1 = this.user.roles.indexOf(orRole);
    // console.log(index_1)
    // console.log(orRole)

    if (index >= 0) {
      this.roles.splice(index, 1);
      this.user.roles.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.roles.includes(event.option.viewValue)) {
      this.roles.push(event.option.viewValue);
      let roleName = event.option.viewValue;
      roleName = ('ROLE_' + roleName).toUpperCase();

      this.originalRoles.forEach(element => {
        if (element.roleName === roleName) this.user.roles.push(element)
      })
    }
    this.roleInput.nativeElement.value = '';

    this.roleCtrl.setValue(null);
    //this.addRole();
  }
  //addRole() {

  //}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allRoles.filter(role => role.toLowerCase().indexOf(filterValue) === 0);
  }
}
