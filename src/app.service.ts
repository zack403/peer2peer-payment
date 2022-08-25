import { Injectable } from '@nestjs/common';
import { addUserDto } from './dto/add-user.dto';
import { depositDto } from './dto/deposit.dto';
import { sendFundsDto } from './dto/send-money.dto';
import { transferFundsDto } from './dto/transfer-funds.dto';

interface User {
  name: string;
  accountNo: string;
  balance: number;
}

@Injectable()
export class AppService {

  private users: User[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  addUser(req: addUserDto) {
    const nameExist = this.users.find(x => x.name.toLowerCase() === req.name.toLowerCase());
    if(nameExist) {
      return {
        status: 400,
        message: 'user added already'
      }
    }

    const acctExist = this.users.find(x => x.accountNo === req.accountNo);
    if(acctExist) {
      return {
        status: 400,
        message: 'user added already'
      }
    }

    const p = {
      name: req.name,
      accountNo: req.accountNo,
      balance: 0
    }

    this.users.push(p);

    return {
      status: 200,
      message: 'user added successfully'
    }
  }

  deposit (req: depositDto) {
    const user = this.users.find(x => x.accountNo === req.accountNo);
    if(!user) {
      return {
        status: 404,
        message: 'invalid user'
      }
    }

    user.balance += req.amount;

    return {
      status : 200,
      message: 'successful'
    }
  }

  sendMoney (req: sendFundsDto) {
    const sender = this.users.find(x => x.accountNo === req.senderAccountNo);
    if(!sender) {
      return {
        status: 404,
        message: 'invalid sender'
      }
    }
    const recipient = this.users.find(x => x.accountNo === req.destinationAccountNo);
    if(!recipient) {
      return {
        status: 404,
        message: 'invalid recipient'
      }
    }

    recipient.balance += req.amount;
    sender.balance -= req.amount;

    return {
      status: 200,
      message: 'sent successfully'
    }
  }

  checkBalance(accountNo: string) {
    const user = this.users.find(x => x.accountNo === accountNo);
    if(!user) {
      return {
        status: 404,
        message: 'invalid account no'
      }
    }

    return {
      status: 200,
      data : {
        balance: user.balance
      },
      message: 'success'
    }
  }

  transferFunds (req: transferFundsDto) {
    const sender = this.users.find(x => x.accountNo === req.fromAccountNo);
    if(!sender) {
      return {
        status: 404,
        message: 'invalid sender'
      }
    }

    sender.balance -= req.amount;

    return {
      status: 200,
      message: 'sent'
    }

  }
}
