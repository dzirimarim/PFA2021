export class UserCand {
    id !: number;
    name: string;
    password: string;
    username:String;
    dateOfBirth:Date;
    address:string;
    email:string; 
    role:String[];   
    constructor(
        name: string,
        username:String,
        password: string,
        dateOfBirth:Date,
        address:string,
        email:string,
        role:String[]){
            this.name=name;
            this.password=password;
            this.address=address;
            this.dateOfBirth=dateOfBirth;
            this.username=username;
            this.email=email;
            this.role=role;
    }


}
