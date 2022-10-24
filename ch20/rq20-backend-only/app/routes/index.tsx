import type { User } from "@prisma/client";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { AuthMenu, UnauthMenu } from "~/components/menu";
import { getCategories } from "~/models/category.server";
import { getExpensesByCategory } from "~/models/expense.server";
import { getUserId } from "~/session.server";

import { useOptionalUser } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) {
    return json({ categories: [] });
  }
  const categoriesWithoutExpenses = await getCategories({ userId });
  const expensesByCategory = await getExpensesByCategory({ userId });
  const categories = categoriesWithoutExpenses.map((category) => ({
    ...category,
    value:
      expensesByCategory.find(({ categoryId }) => categoryId === category.id)
        ?._sum.value || 0,
  }));
  return json({ categories });
}

function Dashboard({ user }: { user: User }) {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <AuthMenu>
      <h1>Dashboard</h1>
      <pre
        style={{
          maxWidth: "90vw",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        {JSON.stringify({ user, categories })}
      </pre>
    </AuthMenu>
  );
}

function Welcome() {
  return (
    <UnauthMenu>
      <h1>Welcome</h1>
      <p>
        Welcome to the <strong>Expens.ee</strong> Expense Tracker application.
      </p>
      <p>
        Please <Link to="/login">login</Link> or{" "}
        <Link to="/join">create a user</Link>.
      </p>
    </UnauthMenu>
  );
}

export default function Index() {
  const user = useOptionalUser();
  return user ? <Dashboard user={user} /> : <Welcome />;
}
