import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';

@Component({
  selector: 'app-currency-converter-two',
  templateUrl: './currency-converter-two.component.html',
  styleUrls: ['./currency-converter-two.component.scss']
})
export class CurrencyConverterTwoComponent {
  amountFrom: number = 1;
  amountTo: number = 0;
  currencyFrom: string = 'USD';
  currencyTo: string = 'UAH';

  constructor(private exchangeRateService: ExchangeRateService) {}

  async convert(direction: 'from' | 'to') {
    const baseCurrency = direction === 'from' ? this.currencyFrom : this.currencyTo;
    const targetCurrency = direction === 'from' ? this.currencyTo : this.currencyFrom;
    const amount = direction === 'from' ? this.amountFrom : this.amountTo;

    try {
      const exchangeRate = await this.exchangeRateService.getExchangeRate(baseCurrency, targetCurrency);
      this.amountTo = direction === 'from' ? amount * exchangeRate : amount / exchangeRate;
    } catch (error) {
      console.error('Error getting the conversion rate:', error);
      this.amountTo = 0;
    }
  }
}
