import { Qcm } from "./qcm";

export class QcmTest {

    id: Number = -1;
    title: String = "";
    discription: String = "";
    autheurs: Array<String> = [];
    questions: Array<Qcm> = [];
    category: Category = { id: -1, title: "" }
}
export class Category {
    id: number = -1;
    title: string = "";
}
