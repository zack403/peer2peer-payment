import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches, IsString, IsNumber} from "class-validator";

export class depositDto {
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    accountNo: string; 
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    amount: number
}
