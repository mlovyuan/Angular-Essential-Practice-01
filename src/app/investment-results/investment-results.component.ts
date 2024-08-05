import { InvestmentService } from './../investment.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  get results(){
    return this.investmentService.resultData;
  }
}
