import { Body, Controller, Post } from "@nestjs/common";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { DataShowService } from "src/Services/DataShowService";


@Controller('dataShow')
export class DataShowController {
    constructor(private readonly _dataShowService: DataShowService) { }

    @Post()
    async SaveDataShow(@Body() dataShowRequest: DataShowRequest){
        return await this._dataShowService.saveDataShow(dataShowRequest);
    }
}