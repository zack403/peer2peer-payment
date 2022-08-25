import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});


describe('AppService', () => {

  let appSvc: AppService;

  beforeEach(async () => {
    
    appSvc = new AppService();
  });

  describe ('addUser', () => {
    it('should add users', async () => {
      const result = {status: 200, message: 'success',};
      jest.spyOn(appSvc, 'addUser').mockImplementation(() => result);
  
      expect(appSvc.addUser({accountNo: '2222', name: 'zack'})).toBe(result);
    });
  
    it('should return bad reqest for already existing users by name', async () => {
      const result = {status: 400, message: 'failed',};
      jest.spyOn(appSvc, 'addUser').mockImplementation(() => result);
  
      expect(appSvc.addUser({accountNo: '24542', name: 'zack'})).toBe(result);
    });

    it('should return bad reqest for already existing users by acount number', async () => {
      const result = {status: 400, message: 'failed',};
      jest.spyOn(appSvc, 'addUser').mockImplementation(() => result);
  
      expect(appSvc.addUser({accountNo: '24542', name: 'dele'})).toBe(result);
    });
  })

  describe('deposit', () => {
    it('should deposit funds', async () => {
      const result = {status: 200, message: 'success',};
      jest.spyOn(appSvc, 'deposit').mockImplementation(() => result);
  
      expect(appSvc.deposit({accountNo: '24542', amount: 100})).toBe(result);
    });

    it('should return not found if account to deposit not found', async () => {
      const result = {status: 200, message: 'success',};
      jest.spyOn(appSvc, 'deposit').mockImplementation(() => result);
  
      expect(appSvc.deposit({accountNo: '1111', amount: 100})).toBe(result);
    });
  })

  


  

});