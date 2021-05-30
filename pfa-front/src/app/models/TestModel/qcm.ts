export class Qcm {
    id : Number =-1;
    title : string =""

    level:Number=0;
    score:Number=1;
    levemaxTimel:Number=10;
    propositions:Array<Proposition>=[]
}
export class Proposition {

    id:Number=-1;
    title : string =""
    isTrue: boolean = false;

}