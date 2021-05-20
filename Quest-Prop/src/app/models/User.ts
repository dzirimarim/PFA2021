export class User {
  id !: number;
  username !: string;
  password !: string;
  authorities !: Authority[];
  roles: any;
  dateOfBirth: any;
  address !: string ;
  phone !:string;
}

interface Authority {
  authority: string;
}