export class AlgoContest {

id : Number=-1
contest : String = ""
problems : Array<Problem> =[]

}
export class Problem {
    id : Number = -1;
    file ?: File;//pdf
    text :String = "";
    inputFile ?: Array<File>;
    outputFile ?: Array<File>;
}
