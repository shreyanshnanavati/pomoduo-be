import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {

  @Get('/stats')
  getStats(){
    return "Stats"

    //Number of completed pomodoro
    //Daily Streaks
    //Time Spent per task
  }
}
