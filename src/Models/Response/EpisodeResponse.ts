export class EpisodeRespose {
    id: number;
    name: string;
    numberEpisode: number;
    releaseDate: string;

    constructor(id: number, name: string, numberEpisode: number, releaseDate: string) {
        this.id = id
        this.name = name
        this.numberEpisode = numberEpisode
        this.releaseDate = releaseDate
    }
}