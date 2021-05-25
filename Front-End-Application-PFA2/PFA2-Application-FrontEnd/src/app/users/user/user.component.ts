import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogBoxComponent } from 'src/app/users/dialog-box/dialog-box.component';
import { UserService } from 'src/app/services/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User } from 'src/app/models/user';

export interface DialogData {
  email: string;
  id: number;
  username: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'roles', 'score'];
  dataSource !: MatTableDataSource<any>;
  user: any;
  create: boolean = true;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private users !: Array<any>;
  constructor(private userService: UserService, public dialog: MatDialog) {
    this.userService.getAll().subscribe((result: Array<any>) => {

      if (result) {
        this.users = result

        //this.questions=this.results[0].questions 
        //this.candidate=this.results[0].candidate
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = this.dataSource.data.slice();

        console.log(this.users)

      }
    })
  }
  ngOnInit() {
  }
  changeStatus(id: any, event: { checked: any; }) {
    console.log(id)

    this.users.forEach(element => {
      if (element.id === id) {
        if (event.checked) {
          element.activated = true
        } else {
          element.activated = false
        }
        this.user = element;
      }
    })

  }
  email !: string;
  id !: number;
  username !: string;
  data !: DialogData;
  selectUser(row: User) {
    this.user = row;
    this.create = false;
    console.log(row)
    this.email = row.email;
    this.id = row.id;
    this.username = row.username;
    //this.openDialog(this.email , this.id , this.username) ;
    this.openDialog(row );
  }
  openDialog(obj: any ): void {
    console.log(obj);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '100%',
      //minHeight: 'calc(100vh - 90px)',
      height: 'auto',
        data: obj , 
    });

  }


  addUser() {
    this.create = true;
  }
  Update() {
    this.userService.getAll().subscribe((result: Array<any>) => {

      if (result) {
        this.users = result
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = this.dataSource.data.slice();

        console.log(this.users)

      }
    })
  }

}
