import { Component, signal } from '@angular/core';

import { TransactionFormComponent } from './components/transaction-form/transaction-form';
import { TransactionListComponent } from './components/transaction-list/transaction-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TransactionFormComponent,
    TransactionListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}