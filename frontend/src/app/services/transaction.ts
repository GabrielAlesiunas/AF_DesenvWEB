import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private base = 'http://localhost:3000/api/transaction';

  constructor(private http: HttpClient) {}

  list(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.base);
  }

  create(tx: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.base, tx);
  }

  remove(id: string) {
    return this.http.delete(`${this.base}/${id}`);
  }
}
