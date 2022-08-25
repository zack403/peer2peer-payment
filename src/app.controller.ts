import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { addUserDto } from './dto/add-user.dto';
import { depositDto } from './dto/deposit.dto';
import { sendFundsDto } from './dto/send-money.dto';
import { transferFundsDto } from './dto/transfer-funds.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user/add')
  addUser(@Body() payload: addUserDto) {
    return this.appService.addUser(payload);
  }

  @Post('user/deposit')
  deposit(@Body() payload: depositDto) {
    return this.appService.deposit(payload);
  }

  @Post('user/send-funds')
  sendMoney(@Body() payload: sendFundsDto) {
    return this.appService.sendMoney(payload);
  }

  @Get('user/balance/:accountNo')
  checkBalance( @Param('accountNo') accountNo: string) {
    return this.appService.checkBalance(accountNo);
  }
  
  @Post('user/transfer-funds')
  transferFunds(@Body() payload: transferFundsDto) {
    return this.appService.transferFunds(payload);
  }
  
}
