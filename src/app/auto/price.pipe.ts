import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, moneyType: string, isNew: string, rent:string ): string {
    if(isNew!=='rental'){
      console.log(rent)
      return value + ' ' + moneyType;
    } else {
      return value + ' ' + moneyType + ' per ' + rent;
    }
  }

}
