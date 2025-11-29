import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-form.html',
  styleUrls: ['./transaction-form.css']
})
export class TransactionFormComponent {
  @Output() saved = new EventEmitter();

  tx: Transaction = {
    type: 'expense',
    title: '',
    category: '',
    amount: 0,
    date: new Date().toISOString().split("T")[0]
  };

  constructor(private service: TransactionService) {}

  save() {
    this.service.create(this.tx).subscribe(() => {
      this.saved.emit();
      this.tx = {
        type: 'expense',
        title: '',
        category: '',
        amount: 0,
        date: new Date().toISOString().split("T")[0]
      };
    });
  }
}
