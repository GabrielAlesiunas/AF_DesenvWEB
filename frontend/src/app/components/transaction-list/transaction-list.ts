import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private service: TransactionService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.list().subscribe(res => this.transactions = res);
  }

  delete(id?: string) {
    if (!id) return;
    this.service.remove(id).subscribe(() => this.load());
  }

  total() {
    return this.transactions.reduce((acc, t) => {
      return acc + (t.type === 'income' ? t.amount : -t.amount);
    }, 0);
  }
}
