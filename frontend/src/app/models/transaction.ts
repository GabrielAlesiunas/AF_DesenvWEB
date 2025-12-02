export interface Transaction {
  _id?: string;
  type: 'income' | 'expense';
  title: string;     
  category: string;   
  amount: number;
  date: string;
}