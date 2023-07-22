import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterTwoComponent } from './currency-converter-two.component';

describe('CurrencyConverterTwoComponent', () => {
  let component: CurrencyConverterTwoComponent;
  let fixture: ComponentFixture<CurrencyConverterTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyConverterTwoComponent]
    });
    fixture = TestBed.createComponent(CurrencyConverterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
