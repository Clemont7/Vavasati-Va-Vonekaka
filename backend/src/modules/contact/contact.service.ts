import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  send(payload: CreateContactDto) {
    return {
      ok: true,
      message: 'Contact form received',
      data: payload,
    };

    // 1. Save data in database
  // 3. Return confirmation
  }
}
