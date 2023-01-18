import { Controller, Get, Param } from "@nestjs/common";
import { EpisodeService } from "src/Services/EpisodeService";

@Controller('episode')
export class EpisodeController {
    constructor(private readonly _episodeService: EpisodeService) { }

    @Get('/:numberEpisode/:nameTvShow')
    async getMovies(@Param('numberEpisode') numberEpisode: number, @Param('nameTvShow') nameTvShow: string) {
        return await this._episodeService.getEpisodeAndDirectorBynumberEpisodeAndNameTvShow(numberEpisode, nameTvShow);
    }
}