import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getExpenses } from "~/models/expense.server";
import { requireUserId } from "~/session.server";
import { AuthMenu } from "~/components/menu";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const expenses = await getExpenses({ userId });
  return json({ expenses });
}

export default function ExpensesPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <AuthMenu current="expenses">
      <h1>Expenses</h1>
      <pre
        style={{
          maxWidth: "90vw",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        {JSON.stringify(data.expenses)}
      </pre>
      <Link to="add">Add expense</Link>
      <Outlet />
    </AuthMenu>
  );
}
