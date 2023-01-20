import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/Entities/Movie";
import { Repository } from "typeorm";
const moment = require('moment');

export default class MovieDao {
    constructor(
        @InjectRepository(Movie)
        private _movieEntityRepository: Repository<Movie>,
    ) { }

    async createMovie(MovieEntity: Movie): Promise<Movie> {
        try {
            return await this._movieEntityRepository.save(MovieEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }

    async findMovie(filterAndOrder: Array<any>) {
        const qb = this._movieEntityRepository.createQueryBuilder("mv")
        qb.select(['mv.id', 'mv.name', 'mv.releaseDate'])
        this.addFilters(qb, filterAndOrder);
        return qb.getMany();
    }

    private addFilters(qb, filterAndOrder: Array<any>) {
        filterAndOrder.forEach(element => {
            let key: string = element[0];
            let value: string = element[1];
            this.setFilter(qb, key, value);
        });
    }

    private setFilter(qb, key: string, value: string) {
        switch (key) {
            case "filterName":
                this.filterPerName(value, qb);
                break;
            case "filterReleaseDate":
                this.filterPerReleaseDate(value, qb);
                break;
            case "orderReleaseDate":
                this.orderPerReleaseDate(value.toUpperCase(), qb);
                break;
            case "orderName":
                this.orderPerName(value.toUpperCase(), qb);
                break;
            default:
                break;
        }
    }

    private filterPerName(filterValue, qb) {
        qb.where("mv.name = :value", { value: filterValue })
    }

    private orderPerReleaseDate(filterValue, qb) {
        qb.orderBy('mv.releaseDate', filterValue);
    }

    private orderPerName(filterValue, qb) {
        qb.orderBy('mv.name', filterValue);
    }

    private filterPerReleaseDate(filterValue, qb) {
        let date = moment(moment(filterValue, 'DD-MM-YYYY')).format('YYYY-MM-DD');
        qb.where("mv.releaseDate = :value", { value: date })
    }
}