import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding");
  await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
    },
  });

  console.log("Database has been seeded!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
