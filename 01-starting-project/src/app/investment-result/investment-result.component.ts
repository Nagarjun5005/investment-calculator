import { Component, Input } from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.css'] // Fixed typo: styleUrl -> styleUrls
})
export class InvestmentResultComponent {
  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

  trackByYear(index: number, result: { year: number }) {
    return result.year; // Use the 'year' property to track rows
  }
}
