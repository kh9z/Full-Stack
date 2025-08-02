import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding");
  const user = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
    },
  });

  await prisma.post.createMany({
    data: [
      {
        title: 'First Post',
        content: 'This is the first post.',
        published: true,
        authorId: user.id,
      },
      {
        title: 'Second Post',
        content: 'This is the second post.',
        published: false,
        authorId: user.id,
      },
    ],
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
