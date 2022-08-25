import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches, IsString, IsNumber} from "class-validator";

export class sendFundsDto {
    

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    senderAccountNo: string; 

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    destinationAccountNo: string; 
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    amount: number
}
