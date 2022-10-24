export type User = {
  id: string;
  email: string;
  name: string;
  categories: Category[];
  expenses: Expense[];
};

export type Category = {
  id: string;
  name: string;
  color: string;
};

export type Expense = {
  id: string;
  item: string;
  value: number;
  category: Omit<Category, "expenses">;
};
