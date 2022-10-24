import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@expens.ee";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("iloveexpenses", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const housing = await prisma.category.create({
    data: {
      name: "Housing",
      color: "#c0ffee",
      userId: user.id,
    },
  });

  await prisma.category.create({
    data: {
      name: "Transportation",
      color: "#bada55",
      userId: user.id,
    },
  });

  await prisma.category.create({
    data: {
      name: "Food",
      color: "#00ff00",
      userId: user.id,
    },
  });

  await prisma.category.create({
    data: {
      name: "Utilities",
      color: "#aaaaff",
      userId: user.id,
    },
  });

  await prisma.expense.create({
    data: {
      item: "Rent",
      value: 1200,
      userId: user.id,
      categoryId: housing.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
