import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiKey = '8574896a3fc14ccb9e55942f';
  private apiUrl = 'https://v6.exchangerate-api.com/v6/';

  constructor() { }

  async getExchangeRate(baseCurrency: string, targetCurrency: string): Promise<number> {
    try {
      const response = await axios.get(`${this.apiUrl}${this.apiKey}/pair/${baseCurrency}/${targetCurrency}`);
      console.log('API response:', response.data);
      return response.data.conversion_rate;
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return 0;
    }
  }
}
