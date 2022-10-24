import { AuthMenu } from "~/components/menu";
import IncomeInput from "~/components/incomeinput";
import { Form } from "@remix-run/react";

export default function Income() {
  const income = 12000;
  return (
    <AuthMenu current="income">
      <Form method="post">
        <IncomeInput defaultValue={income} />
      </Form>
    </AuthMenu>
  );
}
