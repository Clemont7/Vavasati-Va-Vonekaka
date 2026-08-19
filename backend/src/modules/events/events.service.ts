import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  getList() {
    return [ {
        title: 'Lançamento da 3V',
        date: new Date('2026-11-11'),
      },];
  }

updateRsvp(id: String, event: String, date: Date){
  return 'Rvsp com Sucesso!';
  /*Save information of user and event in database*/
  }
}
