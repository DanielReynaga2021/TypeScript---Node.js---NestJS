import { Injectable } from "@nestjs/common";
import { MovieFilterAndOrderParameter } from "src/Models/Parameter/MovieFilterAndOrderParameter";
import MovieDao from "src/Daos/MovieDao";

@Injectable()
export class MovieService {
  constructor(
    private readonly _movieDao: MovieDao
  ) { }

  async getMovieByFilterAndOrder(filterAndOrder: Array<any>) {
    let movies = await this._movieDao.findMovie(filterAndOrder)
    return { movies: movies };
  }
}