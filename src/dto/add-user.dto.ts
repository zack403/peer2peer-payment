import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsEmail, Matches, IsString} from "class-validator";

export class addUserDto {
    

    @Expose()
    @IsEmail()
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    accountNo: string;        
}
