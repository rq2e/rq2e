import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import { UnauthMenu } from "~/components/menu";
import * as Forms from "~/components/form";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";

  return (
    <UnauthMenu current="login">
      <Forms.Form method="post">
        <Forms.Title>Log in</Forms.Title>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <Forms.Label>
          <Forms.LabelSpan>Email</Forms.LabelSpan>
          <Forms.Input
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </Forms.Label>
        <Forms.Label>
          <Forms.LabelSpan>Password</Forms.LabelSpan>
          <Forms.Input
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </Forms.Label>
        <Forms.Buttons>
          <Forms.Submit>Log in</Forms.Submit>
        </Forms.Buttons>
        <p>
          Don't have an account?{" "}
          <Link
            to={{
              pathname: "/join",
              search: searchParams.toString(),
            }}
          >
            Create one
          </Link>
        </p>
      </Forms.Form>
    </UnauthMenu>
  );
}
