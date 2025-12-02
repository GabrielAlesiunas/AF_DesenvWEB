import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.html',
  styleUrls: ['./transaction-form.css']
})
export class TransactionFormComponent {

  @Output() saved = new EventEmitter<void>();

  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: TransactionService
  ) {
    // AGORA pode usar this.fb
    this.form = this.fb.nonNullable.group({
      type: ['expense' as 'income' | 'expense', Validators.required],
      title: ['', Validators.required],
      category: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      date: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue() as Transaction;

    this.service.create(payload).subscribe(() => {
      this.saved.emit();
      this.form.reset({
        type: 'expense',
        amount: 0,
        date: new Date().toISOString().split('T')[0]
      });
    });
  }
}