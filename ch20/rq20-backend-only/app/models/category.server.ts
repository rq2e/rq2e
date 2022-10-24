import type { Category, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Category } from "@prisma/client";

export function getCategories({ userId }: { userId: User["id"] }) {
  return prisma.category.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      color: true,
    },
    orderBy: { name: "asc" },
  });
}

export function createCategory({
  name,
  color,
  userId,
}: Pick<Category, "name" | "color"> & {
  userId: User["id"];
}) {
  return prisma.category.create({
    data: {
      name,
      color,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteCategory({
  id,
  userId,
}: Pick<Category, "id"> & { userId: User["id"] }) {
  return prisma.category.deleteMany({
    where: { id, userId },
  });
}
