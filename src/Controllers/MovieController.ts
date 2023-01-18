import { Controller, Get, Query} from "@nestjs/common";
import { MovieFilterAndOrderParameter } from "src/Models/Parameter/MovieFilterAndOrderParameter";
import { MovieService } from "src/Services/MovieService";


@Controller('movie')
export class MovieController{
    constructor(private readonly _movieService: MovieService) { }

    @Get()
    async getMovies(@Query() filterAndOrder: MovieFilterAndOrderParameter){
    return await this._movieService.getMovieByFilterAndOrder(Object.entries(filterAndOrder));
    }
}