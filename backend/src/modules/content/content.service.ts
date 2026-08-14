import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getContent() {
    return {
      name: 'Vavasati Va Vonekaka - 3V',
      mission: 'Rede de apoio inclusiva e estratégica para adolescentes e jovens moçambicanas.',
      vision: 'Mulheres moçambicanas que lideram e servem com propósito e excelência.',
    };
  }
}
