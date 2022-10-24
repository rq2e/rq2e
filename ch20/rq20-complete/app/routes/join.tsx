import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

import { getUserId, createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
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

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;

  return (
    <UnauthMenu current="join">
      <Forms.Form method="post">
        <Forms.Title>Create an account</Forms.Title>
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
            autoComplete="new-password"
          />
        </Forms.Label>
        <Forms.Buttons>
          <Forms.Submit>Create account</Forms.Submit>
        </Forms.Buttons>
        <p>
          Already have an account?{" "}
          <Link
            to={{
              pathname: "/login",
              search: searchParams.toString(),
            }}
          >
            Log in
          </Link>
        </p>
      </Forms.Form>
    </UnauthMenu>
  );
}
