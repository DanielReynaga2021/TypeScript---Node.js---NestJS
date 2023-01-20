import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/Helpers/Decorators/JwtAuthGuard";
import { EpisodeService } from "src/Services/EpisodeService";

@Controller('episode')
export class EpisodeController {
    constructor(private readonly _episodeService: EpisodeService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/:numberEpisode/:nameTvShow')
    async getMovies(@Param('numberEpisode') numberEpisode: number, @Param('nameTvShow') nameTvShow: string) {
        return await this._episodeService.getEpisodeAndDirectorBynumberEpisodeAndNameTvShow(numberEpisode, nameTvShow);
    }
}