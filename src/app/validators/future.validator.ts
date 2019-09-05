import { AbstractControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { isFuture, startOfDay, parseISO } from 'date-fns';

@Injectable({
    providedIn: "root"
})  
export class DiscontinuedValidator {

    validator(discontinuedControlName: string, nextRunControlName: string) {
        return (group: FormGroup) => {
          const discontinuedControl = group.controls[discontinuedControlName];
          const nextRunControl = group.controls[nextRunControlName];
      
          const discontinuedValue = discontinuedControl.value;
          const nextRunValue = nextRunControl.value; 
          const valid = !discontinuedValue || !isFuture(startOfDay(parseISO(nextRunValue)));  
      
          return !valid ? null : { 'discontinuedWithFutureNextRun': true };
        }
      }
}     