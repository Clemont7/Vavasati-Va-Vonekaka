import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  send(payload: unknown) {
    return { ok: true, payload };
  }
}
