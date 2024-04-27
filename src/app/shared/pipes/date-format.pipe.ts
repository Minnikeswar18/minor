import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string): string {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    return formattedDate;
  }

}
