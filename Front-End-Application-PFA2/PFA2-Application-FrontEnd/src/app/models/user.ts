export class User {
    id !: number;
    username !: string;
    name !: string;
    password !: string;
    roles: any;
    dateOfBirth: any;
    address !: string ;
    phone !:string;
  email: string;
    constructor(
      name: string,
      username:any,
      password: string,
      dateOfBirth:Date,
      address:string,
      email:string,
      role:String[])
      {
          this.name=name;
          this.password=password;
          this.address=address;
          this.dateOfBirth=dateOfBirth;
          this.username=username;
          this.email=email;
          this.roles=role;
  }
  }