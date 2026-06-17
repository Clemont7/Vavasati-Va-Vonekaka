import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsletterService {
  subscribe(payload: unknown) {
    return { ok: true, payload };
  }
}
