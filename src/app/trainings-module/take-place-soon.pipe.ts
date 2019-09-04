import { Pipe, PipeTransform } from '@angular/core';
import { startOfToday,startOfDay,addDays,isFuture,isToday,isBefore } from "date-fns"; 
import { parseISO } from 'date-fns/esm';

@Pipe({
  name: 'takePlaceSoon'
})
export class TakePlaceSoonPipe implements PipeTransform {

  transform(date: string, soon = 24): boolean { 
  
    const nextRun = startOfDay(parseISO(date));   
    const notSoonAnymore = addDays(startOfToday(), soon + 1);
    return isToday(nextRun) || isFuture(nextRun) && isBefore(nextRun, notSoonAnymore);

  }
  
}
