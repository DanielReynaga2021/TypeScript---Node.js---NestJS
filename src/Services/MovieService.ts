import { BadRequestException, Injectable } from "@nestjs/common";
import MovieDao from "src/Daos/MovieDao";
import { Director } from "src/Entities/Director";
import { Movie } from "src/Entities/Movie";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";
import { DirectorService } from "./DirectorService";
const moment = require('moment');

@Injectable()
export class MovieService implements IDataShowStrategy {
  constructor(
    private readonly _movieDao: MovieDao,
    private readonly _directorService: DirectorService
  ) { }

  async addDataShow(dataShowRequest: DataShowRequest) {
    let { directorId } = dataShowRequest.movie;
    if (!directorId) {
      throw new BadRequestException("The attribute is required");
    }
    let directorEntity: Director = await this._directorService.getDirector(directorId);
    let movieEntity: Movie = this.builEntity(dataShowRequest, directorEntity)
    await this.createMovie(movieEntity)
  }

  private builEntity(dataShowRequest: DataShowRequest, directorEntity: Director): Movie {
    let movieEntity = new Movie();
    let { name , releaseDate, directorId} = dataShowRequest.movie;
    movieEntity.name = name;
    movieEntity.releaseDate = moment(moment(releaseDate, 'DD-MM-YYYY')).format('YYYY-MM-DD');
    movieEntity.directorId = directorId
    movieEntity.director = directorEntity;
    return movieEntity;
  }

  async createMovie(movieEntity: Movie) {
    await this._movieDao.createMovie(movieEntity);
  }

  async getMovieByFilterAndOrder(filterAndOrder: Array<any>) {
    let movies = await this._movieDao.findMovie(filterAndOrder)
    return { movies: movies };
  }
}