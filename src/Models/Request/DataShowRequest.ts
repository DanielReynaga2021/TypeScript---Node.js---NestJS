import { IsOptional } from "class-validator";
import { ActorRequest } from "./ActorRequest";
import { DirectorRequest } from "./DirectorRequest";
import { EpisodeRequest } from "./EpisodeRequest";
import { GenreRequest } from "./GenreRequest";
import { MovieRequest } from "./MovieRequest";
import { SeasonRequest } from "./SeasonRequest";
import { TvRequest } from "./TvRequest";

export class DataShowRequest {

    entity: string;

    @IsOptional()
    actor: ActorRequest;
    
    @IsOptional()
    director: DirectorRequest;
    
    @IsOptional()
    episode: EpisodeRequest;
    
    @IsOptional()
    genre: GenreRequest;
    
    @IsOptional()
    movie: MovieRequest;
    
    @IsOptional()
    season: SeasonRequest;
    
    @IsOptional()
    tv: TvRequest;
}