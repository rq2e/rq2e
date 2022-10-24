import { Outlet, Link } from "@remix-run/react";
import Expense, { List } from "~/components/expense";
import { AuthMenu } from "~/components/menu";
import * as Forms from "~/components/form";

export default function ExpensesPage() {
  const expenses = [
    {
      id: "a",
      item: "Groceries",
      value: 300,
      category: { name: "Food", color: "blue" },
    },
    {
      id: "b",
      item: "Shoes",
      value: 460,
      category: { name: "Clothing", color: "red" },
    },
  ];
  return (
    <AuthMenu current="expenses">
      <Forms.Form>
        <Forms.Title>Expenses</Forms.Title>
        <List>
          {expenses.map((expense) => (
            <Expense key={expense.id} {...expense} />
          ))}
        </List>
        <Forms.Submit as={Link} to="add">
          Add new expense
        </Forms.Submit>
      </Forms.Form>
      <Outlet />
    </AuthMenu>
  );
}
