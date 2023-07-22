import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exchangeRateUSDToUAH: number = 0;
  exchangeRateEURToUAH: number = 0;
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private exchangeRateService: ExchangeRateService) { }

  async ngOnInit() {
    try {
      this.exchangeRateUSDToUAH = await this.exchangeRateService.getExchangeRate('USD', 'UAH');
      this.exchangeRateEURToUAH = await this.exchangeRateService.getExchangeRate('EUR', 'UAH');
      this.isLoading = false;
    } catch (error) {
      console.error('Error getting the conversion rates:', error);
      this.isLoading = false;
      this.isError = true;
    }
  }
}
