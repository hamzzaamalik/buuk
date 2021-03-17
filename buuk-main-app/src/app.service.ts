import { Injectable } from '@nestjs/common';
import { Cron,CronExpression  } from '@nestjs/schedule';
import { LoggerModule, LoggerService } from '@newtral/nestjs-logger';
@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}
  private readonly logger = this.loggerService.getLogger(module);
  getHello(): string {
    return 'Main Task Assign';
  }
  @Cron(CronExpression.EVERY_DAY_AT_6AM)
  handleCron() {
    this.logger.debug('Called every day at 6am');
  }

}
