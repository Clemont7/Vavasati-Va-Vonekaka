import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ParseDatePipe } from '../../common/parse-date/parse-date.pipe';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getList() {
    return this.eventsService.getList();
  }

  @Post(':id/:event/:date')
  updateRsvp(
    @Param ('id') id: string, 
    @Param ('event') event: string, 
    @Param ('date', ParseDatePipe) date: Date)
    {
    return this.eventsService.updateRsvp(id, event, date);
  }

}
