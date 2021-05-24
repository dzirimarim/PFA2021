import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 /*******************************************************************/
 // private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User> | undefined;
 baseUrl='http://localhost:8080/api/public/users/'
 constructor(private http: HttpClient) { }

 getAll() {

     return this.http.get<User[]>(this.baseUrl+`all`);
 }

 getAllCandidat() {
   return this.http.get<any>(this.baseUrl+`all/candidat`);
 }

 editUsers(users : any ) {
   return this.http.post<any>(this.baseUrl+`editusers`,users);
 }
 getMyProfile(){
   return this.http.get<any>(this.baseUrl+`getmyprofil`);
 }
 editme(user : any){
   return this.http.post<any>(this.baseUrl+`editmyprofil`,user);

 }
 getByUID(id : any){
   let params = new HttpParams().set('id', id);
   return this.http.get<any>(this.baseUrl+`getuserbyid`,{params:params});

 }
 removeUser(id : any){
   let params = new HttpParams().set('id', id);
   return this.http.get(this.baseUrl+'remove',{params:params})
 }


}