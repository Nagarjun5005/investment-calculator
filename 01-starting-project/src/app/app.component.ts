import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent,UserInputComponent,InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

   resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];

  onCalculateInvestmentResults(data:InvestmentInput) {

    const{initialInvestment,duration,expectedReturn,annualInvestment}=data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    // return annualData;
    console.log(annualData);
    this.resultsData=annualData;
  }
  
}
