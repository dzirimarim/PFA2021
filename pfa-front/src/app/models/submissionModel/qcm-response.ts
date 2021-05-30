export class QcmResponse {
    id: Number = -1;
    userId: Number = -1;
    propositions: Array<PropositionResponse> = [];
}

export class PropositionResponse {
    id: Number = -1;
    response: boolean = false;
    isCorrect: boolean = false;//the backend system calcule that and it s util when calculate result
}