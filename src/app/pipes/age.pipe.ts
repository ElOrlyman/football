import { Pipe, PipeTransform } from '@angular/core';
import parseISO from 'date-fns/parseISO';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(birthDate: string): number {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const birthday = parseISO(birthDate);
    const birthYear = birthday.getFullYear();

    return currentYear - birthYear;
  }
}
