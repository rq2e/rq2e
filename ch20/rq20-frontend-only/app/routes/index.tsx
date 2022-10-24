import type { User } from "@prisma/client";
import { Link } from "@remix-run/react";
import Balance from "~/components/balance";
import { AuthMenu, UnauthMenu } from "~/components/menu";
import PieChart from "~/components/piechart";

import { useOptionalUser } from "~/utils";

function Dashboard({ user }: { user: User }) {
  const balance = 9500;
  const categories = [
    { name: "Food", color: "blue", value: 1200 },
    { name: "Housing", color: "red", value: 1700 },
    { name: "Utilities", color: "green", value: 350 },
  ];
  return (
    <AuthMenu>
      <Balance amount={balance} />
      <PieChart items={categories} />
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
