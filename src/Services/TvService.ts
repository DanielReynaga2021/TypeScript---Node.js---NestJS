import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import TvDao from "src/Daos/TvDao";
import { Director } from "src/Entities/Director";
import { Tv } from "src/Entities/Tv";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";
import { DirectorService } from "./DirectorService";

@Injectable()
export class TvService implements IDataShowStrategy {
  constructor(
    private readonly _tvDao: TvDao,
    private readonly _directorService: DirectorService
  ) { }
  async addDataShow(dataShowRequest: DataShowRequest) {

    let { directorId } = dataShowRequest.tv;
    if (!directorId) {
      throw new BadRequestException("The attribute is required");
    }
    let directorEntity: Director = await this._directorService.getDirector(directorId);
    let tvEntity: Tv = this.builEntity(dataShowRequest, directorEntity)
    await this.createTv(tvEntity)
  }

  private builEntity(dataShowRequest: DataShowRequest, directorEntity: Director): Tv {
    let tvEntity = new Tv();
    let { name, releaseDate, directorId } = dataShowRequest.tv;
    tvEntity.name = name;
    tvEntity.releaseDate = releaseDate;
    tvEntity.directorId = directorId
    tvEntity.director = directorEntity;
    return tvEntity;
  }

  async createTv(tvEntity: Tv) {
    await this._tvDao.createTv(tvEntity);
  }

  async getTv(tvId: number) {
    let tv: Tv = await this._tvDao.findTvById(tvId);
    if (!tv) {
      throw new NotFoundException("The tv was not found")
    }
    return tv;
  }
}
