import { PropositionReponse } from "./PropositionReponse";

export class QuestionReponse {
    username:String;
    QuestionId:String;
    ResponseId:String;
    responses:PropositionReponse[]=[];
    constructor(username: String,q: String,r: String){
        this.username=username
        this.QuestionId=q;
        this.ResponseId=r;
    }
}