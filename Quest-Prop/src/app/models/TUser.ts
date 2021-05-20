export class TUser {
    id !: number;
    name: string;
    password: string;
    username:String;
    dateOfBirth:Date;
    adress:string;
    email:string; 
    role:String[];   
    constructor(
        name: string,
        username:String,
        password: string,
        dateOfBirth:Date,
        adress:string,
        email:string,
        role:String[]){
            this.name=name;
            this.password=password;
            this.adress=adress;
            this.dateOfBirth=dateOfBirth;
            this.username=username;
            this.email=email;
            this.role=role;
    }


}
