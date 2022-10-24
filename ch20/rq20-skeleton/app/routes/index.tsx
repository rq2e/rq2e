import { Form, Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <h1>Welcome</h1>
      <p>
        Welcome to the <strong>Expens.ee</strong> Expense Tracker application.
      </p>
      {user ? (
        <>
          <p>
            Welcome <em>{user?.email}</em>.
          </p>
          <Form method="post" action="/logout">
            <button>Log out?</button>
          </Form>
        </>
      ) : (
        <p>
          Please <Link to="/login">login</Link> or{" "}
          <Link to="/join">create a user</Link>.
        </p>
      )}
    </>
  );
}
