import type { Expense, Category, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Expense } from "@prisma/client";

export function getExpenses({ userId }: { userId: User["id"] }) {
  return prisma.expense.findMany({
    where: { userId },
    select: {
      id: true,
      item: true,
      value: true,
      category: { select: { id: true, name: true, color: true } },
    },
    orderBy: { updatedAt: "desc" },
  });
}

export function getExpensesByCategory({ userId }: { userId: User["id"] }) {
  return prisma.expense.groupBy({
    by: ["categoryId"],
    where: { userId },
    _sum: { value: true },
  });
}

export function createExpense({
  item,
  value,
  userId,
  categoryId,
}: Pick<Expense, "item" | "value"> & {
  userId: User["id"];
} & {
  categoryId: Category["id"];
}) {
  return prisma.expense.create({
    data: {
      item,
      value,
      user: {
        connect: {
          id: userId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  });
}

export function deleteExpense({
  id,
  userId,
}: Pick<Expense, "id"> & { userId: User["id"] }) {
  return prisma.expense.deleteMany({
    where: { id, userId },
  });
}
