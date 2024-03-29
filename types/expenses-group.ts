import { Expense } from './expense';

export type ExpensesGroup = {
  day: string;
  expenses: Expense[];
  total: number;
};
