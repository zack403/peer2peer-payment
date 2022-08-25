import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber} from "class-validator";

export class transferFundsDto {
    

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    destinationBankCode: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    destinationBankName: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    destinationAccountName: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    destinationAccountNo: string; 

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    fromAccountNo: string; 
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    amount: number
}
