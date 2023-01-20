import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/Helpers/Decorators/JwtAuthGuard";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { DataShowService } from "src/Services/DataShowService";


@Controller('dataShow')
export class DataShowController {
    constructor(private readonly _dataShowService: DataShowService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async SaveDataShow(@Body() dataShowRequest: DataShowRequest){
        return await this._dataShowService.saveDataShow(dataShowRequest);
    }
}