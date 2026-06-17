import { Injectable } from '@nestjs/common';

@Injectable()
export class FormsService {
  join(payload: unknown) {
    return { ok: true, type: 'join', payload };
  }

  feedback(payload: unknown) {
    return { ok: true, type: 'feedback', payload };
  }
}
