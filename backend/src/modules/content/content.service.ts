import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getContent() {
    return {
      name: 'Vavasati Va Vonekaka - 3V',
      mission: 'Rede de apoio inclusiva e estrat?gica para adolescentes e jovens mo?ambicanas.',
      vision: 'Mulheres mo?ambicanas que lideram e servem com prop?sito e excel?ncia.',
    };
  }
}
