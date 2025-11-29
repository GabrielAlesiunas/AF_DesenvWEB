export interface Transaction {
  _id?: string;               // ID opcional (vem do MongoDB)
  type: 'income' | 'expense'; // Tipo: income = entrada, expense = saída
  title: string;               // Descrição da movimentação
  category: string;            // Categoria (ex: Alimentação, Lazer, etc.)
  amount: number;              // Valor da entrada ou saída
  date: string;                // Data no formato ISO (yyyy-mm-dd)
}
