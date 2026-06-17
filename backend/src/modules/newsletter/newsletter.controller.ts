import { Body, Controller, Post } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('subscribe')
  subscribe(@Body() payload: unknown) {
    return this.newsletterService.subscribe(payload);
  }
}
