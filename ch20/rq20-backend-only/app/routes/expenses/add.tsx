import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createCategory, getCategories } from "~/models/category.server";
import { createExpense } from "~/models/expense.server";
import { requireUserId } from "~/session.server";

enum CategoryType {
  Existing = "existing",
  New = "new",
}

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const categories = await getCategories({ userId });
  return json({ categories });
}

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const item = formData.get("item");
  const valueAsString = formData.get("value");

  if (typeof item !== "string" || item.length <= 0) {
    return json(
      { errors: { title: "Item is required", body: null } },
      { status: 400 }
    );
  }
  if (typeof valueAsString !== "string" || parseFloat(valueAsString) <= 0) {
    return json(
      { errors: { title: "Value is required", body: null } },
      { status: 400 }
    );
  }

  const value = parseFloat(valueAsString);

  let categoryId;
  const categoryType = formData.get("categoryType");

  switch (categoryType) {
    case CategoryType.Existing: {
      categoryId = formData.get("categoryId");

      if (typeof categoryId !== "string" || categoryId.length <= 0) {
        return json(
          { errors: { title: "Category selection is required", body: null } },
          { status: 400 }
        );
      }

      break;
    }

    case CategoryType.New: {
      const categoryName = formData.get("name");
      const categoryColor = formData.get("color");

      if (typeof categoryName !== "string" || categoryName.length <= 0) {
        return json(
          { errors: { title: "Category name is required", body: null } },
          { status: 400 }
        );
      }
      if (typeof categoryColor !== "string" || categoryColor.length !== 7) {
        return json(
          { errors: { title: "Category color is required", body: null } },
          { status: 400 }
        );
      }
      const newCategory = await createCategory({
        name: categoryName,
        color: categoryColor,
        userId,
      });
      categoryId = newCategory.id;
      break;
    }

    default:
      return json(
        { errors: { title: "Category must be selected", body: null } },
        { status: 400 }
      );
  }

  await createExpense({ item, value, userId, categoryId });

  return redirect("/expenses");
}

export default function AddExpense() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Add expense</h1>
      <pre
        style={{
          maxWidth: "90vw",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        {JSON.stringify(data.categories)}
      </pre>
      <Link to="../">Cancel</Link>
    </>
  );
}
