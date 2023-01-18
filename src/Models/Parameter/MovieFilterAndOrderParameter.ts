import { IsOptional } from "class-validator";

export class MovieFilterAndOrderParameter {
    @IsOptional()
    filterName: string;

    @IsOptional()
    orderName: string;

    @IsOptional()
    orderReleaseDate: string;

    @IsOptional()
    filterReleaseDate: string;
}