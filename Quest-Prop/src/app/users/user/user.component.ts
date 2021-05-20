import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'roles', 'score'];
  dataSource !:MatTableDataSource<any>;
  user: any;
  create:boolean=true;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private users !:Array<any>;
  constructor(private userService:UserService) { 
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
  changeStatus(id: any,event: { checked: any; }){
    console.log(id)
    
    this.users.forEach(element=>{
      if(element.id===id) {
        if(event.checked){
          element.activated = true
     }else{
      element.activated = false
     }
      this.user=element;
      }
    })
   
  }
  selectUser(row: any){
    this.user=row;
    this.create=false;
  }
  addUser(){
    this.create=true;
  }
  Update(){
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
