import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, moneyType: string, isNew: string, rent:string ): string {
    if(isNew==='sale'){
      
      return value + ' ' + moneyType;
    } else {
      console.log(moneyType, isNew, rent)
      return value + ' ' + moneyType + ' per ' + rent;
    }
  }

}
