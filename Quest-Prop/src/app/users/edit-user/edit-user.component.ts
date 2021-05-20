import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';

import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { RoleService } from 'src/app/services/role.service';
import { first , map, startWith } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/Role';
import { MatChipInputEvent } from '@angular/material/chips';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserCand } from 'src/app/models/UserCand';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  fg !:FormGroup
  user !:User


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
 
  @ViewChild('roleInput') roleInput !: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete !: MatAutocomplete ;

  constructor(private roleService: RoleService, private userServices:UserService,private signup: RegistrationService) {
    this.filteredRoles = this.roleCtrl.valueChanges.pipe(
      startWith(null),
      map((role: string | null) => role ? this._filter(role) : this.allRoles.slice()));

    this.roleService.getRoles().subscribe(roles => {
      this.originalRoles = roles;
      console.log(this.originalRoles)

      if (this.originalRoles.length > 0) {
        let r: string | any ;
        this.originalRoles.forEach((role: Role) => {
          r = role.roleName ;
          r = r.replace('ROLE_', '');
          r = r.toLowerCase()
          this.allRoles.push(r)
        })
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
     // this.user.roles.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.roles.includes(event.option.viewValue)) {
      this.roles.push(event.option.viewValue);
      let roleName = event.option.viewValue;
      roleName = ('ROLE_' + roleName).toUpperCase();

      this.originalRoles.forEach(element => {
       // if (element.roleName === roleName) this.user.roles.push(element)
      })
    }
    this.roleInput.nativeElement.value = '';

    this.roleCtrl.setValue(null);
    //this.addRole();
  }
  addRole() {
       
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allRoles.filter(role => role.toLowerCase().indexOf(filterValue) === 0);
  }

showMessage=false

 signUpUser(f : any ) {
   let user=new UserCand(
    f.value['name'],
    f.value['username'],
    f.value['password'],
    f.value['dateOfBirth'],
    f.value['address'],
    f.value['email'],
    this.roles);
    this.signup.addUser(user).pipe(first(),).subscribe(
          data => {
              console.log(data);
              if(data){
               this.showMessage=true
               this.message=data['message']
              }
             else    {
             this.showMessage=true
             this.message="Error"
}               //this.router.navigate(['/']);
            },
          error => {
           this.showMessage=true
           this.message="Error"
          });
      console.log(f.value)
  }

  onSubmit(f : any ){
    this.signUpUser(f);
  }

  message !: string
}
