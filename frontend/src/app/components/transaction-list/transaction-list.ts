import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionListComponent implements OnInit {
  
  transactions: Transaction[] = [];

  categoryFilter = new FormControl('');

  constructor(private service: TransactionService) {}

  ngOnInit() {
    this.load();

    this.categoryFilter.valueChanges.subscribe(() => {
    });
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

  get filteredTransactions() {
    const filter = this.categoryFilter.value;
    if (!filter) return this.transactions;
    return this.transactions.filter(t => t.category === filter);
  }
}
