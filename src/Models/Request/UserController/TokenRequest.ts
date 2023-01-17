import { IsNotEmpty, IsString, Length } from "class-validator";
import DataTypeValidationEnum from "src/Enums/DataTypeValidationEnum";
import ValidationsMessagesEnum from "src/Enums/ValidationsMessagesEnum";

export class TokenRequest{

    @IsString({ message: ValidationsMessagesEnum.IS_STRING })
    @IsNotEmpty({ message: ValidationsMessagesEnum.IS_NOT_EMPTY })
    @Length(DataTypeValidationEnum.MIN_STRING, DataTypeValidationEnum.MAX_STRING_100, { message: ValidationsMessagesEnum.MAX_MIN_LENGTH})
    token: string;
}