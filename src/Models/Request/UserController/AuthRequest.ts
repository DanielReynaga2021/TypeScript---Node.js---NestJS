import { IsNotEmpty, IsString, Length, IsEmail } from "class-validator";
import DataTypeValidationEnum from "src/Enums/DataTypeValidationEnum";
import ValidationsMessagesEnum from "src/Enums/ValidationsMessagesEnum";

export class AuthRequest{
    
    @IsEmail()
    @IsString({ message: ValidationsMessagesEnum.IS_STRING })
    @IsNotEmpty({ message: ValidationsMessagesEnum.IS_NOT_EMPTY })
    @Length(DataTypeValidationEnum.MIN_STRING, DataTypeValidationEnum.MAX_STRING_100, { message: ValidationsMessagesEnum.MAX_MIN_LENGTH})
    email: string;

    @IsString({ message: ValidationsMessagesEnum.IS_STRING })
    @IsNotEmpty({ message: ValidationsMessagesEnum.IS_NOT_EMPTY })
    @Length(DataTypeValidationEnum.MIN_STRING, DataTypeValidationEnum.MAX_STRING_100, { message: ValidationsMessagesEnum.MAX_MIN_LENGTH})
    password: string;
}