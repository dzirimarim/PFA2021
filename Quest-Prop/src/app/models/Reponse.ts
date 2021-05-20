import { QuestionReponse } from "./QuestionReponse";

export class Reponse {
    public candidatId:number | undefined
    public Id_Rep:number;
    public username:String;
    public responses:QuestionReponse[];
    constructor(id: any){
        this.Id_Rep=0;
        this.responses=[];
        this.username='';
        this.candidatId=id;
  }
}