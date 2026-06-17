import { Module } from '@nestjs/common';
import { ContentModule } from './modules/content/content.module';
import { EventsModule } from './modules/events/events.module';
import { FormsModule } from './modules/forms/forms.module';
import { ContactModule } from './modules/contact/contact.module';
import { NewsletterModule } from './modules/newsletter/newsletter.module';

@Module({
  imports: [ContentModule, EventsModule, FormsModule, ContactModule, NewsletterModule],
})
export class AppModule {}
