import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import SeasonDao from "src/Daos/SeasonDao";
import { Season } from "src/Entities/Season";
import { Tv } from "src/Entities/Tv";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";
import { TvService } from "./TvService";
const moment = require('moment');

@Injectable()
export class SeasonService implements IDataShowStrategy {
  constructor(
    private readonly _seasonDao: SeasonDao,
    private readonly _tvService: TvService
  ) { }

  async addDataShow(dataShowRequest: DataShowRequest) {
    let { tvId } = dataShowRequest.season;
    if (!tvId) {
      throw new BadRequestException("The attribute is required");
    }
    let tvEntity: Tv = await this._tvService.getTv(tvId);
    let seasonEntity: Season = this.builEntity(dataShowRequest, tvEntity)
    await this.createSeason(seasonEntity)
  }

  private builEntity(dataShowRequest: DataShowRequest, tvEntity: Tv): Season {
    let seasonEntity = new Season();
    let { numberSeason , releaseDate, tvId} = dataShowRequest.season;
    seasonEntity.numberSeason = numberSeason;
    seasonEntity.releaseDate = moment(moment(releaseDate, 'DD-MM-YYYY')).format('YYYY-MM-DD');
    seasonEntity.tvId = tvId;
    seasonEntity.tv = tvEntity;
    return seasonEntity;
  }

  async createSeason(seasonEntity: Season) {
    await this._seasonDao.createSeason(seasonEntity);
  }

  async getSeason(seasonId: number): Promise<Season>{
    let season: Season = await this._seasonDao.findSeasonById(seasonId);
    if(!season){
        throw new NotFoundException("The season was not found")
    }
    return season;
}
}