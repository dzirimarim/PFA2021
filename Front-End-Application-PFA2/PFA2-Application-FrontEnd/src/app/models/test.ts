import { Question } from "./question";
export class Test {
    public id?:string;
    constructor(
    public category: String,
    public title: String,
    public questions: Question[],
    public description: String
    ) {
        
    }

    
}