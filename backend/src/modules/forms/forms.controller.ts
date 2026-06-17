import { Body, Controller, Post } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('join')
  join(@Body() payload: unknown) {
    return this.formsService.join(payload);
  }

  @Post('feedback')
  feedback(@Body() payload: unknown) {
    return this.formsService.feedback(payload);
  }
}
