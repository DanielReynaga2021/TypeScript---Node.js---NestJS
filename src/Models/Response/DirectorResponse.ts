export class DirectorResponse {
    id: number;
    name: string;
    lastName: string;
    dateBirth: string;

    constructor(id: number, name: string, lastName: string, dateBirth: string) {
        this.id = id
        this.name = name
        this.lastName = lastName
        this.dateBirth = dateBirth
    }
}