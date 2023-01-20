import { Controller, Get, Query, UseGuards} from "@nestjs/common";
import { JwtAuthGuard } from "src/Helpers/Decorators/JwtAuthGuard";
import { MovieFilterAndOrderParameter } from "src/Models/Parameter/MovieFilterAndOrderParameter";
import { MovieService } from "src/Services/MovieService";


@Controller('movie')
export class MovieController{
    constructor(private readonly _movieService: MovieService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getMovies(@Query() filterAndOrder: MovieFilterAndOrderParameter){
    return await this._movieService.getMovieByFilterAndOrder(Object.entries(filterAndOrder));
    }
}