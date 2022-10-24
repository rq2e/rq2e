import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, Link, useLoaderData } from "@remix-run/react";
import { getExpenses } from "~/models/expense.server";
import { requireUserId } from "~/session.server";
import Expense, { List } from "~/components/expense";
import { AuthMenu } from "~/components/menu";
import * as Forms from "~/components/form";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const expenses = await getExpenses({ userId });
  return json({ expenses });
}

export default function ExpensesPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <AuthMenu current="expenses">
      <Forms.Form>
        <Forms.Title>Expenses</Forms.Title>
        <List>
          {data.expenses.map((expense) => (
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
