export class Question {
    constructor(){
        this.propositions=[{
            isTrue:false,
            title:''
        }
    ]
    this.title='';
    this.description='';
    }
public id?:string;
public title:String;
public level?:String;
public score?:String;
public description?:String;
public maxTime?:number;
public propositions:Proposition[];
category?:String;
public subCategory: any;

 }
interface Proposition{
    isTrue:boolean,
    title:String,
    id?:string
}
