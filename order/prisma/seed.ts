import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create dummy

  const user = await prisma.user.upsert({
    where: {  email: "anovanmaximuz@gmail.com" },
    update: {},
    create: {
      name: 'Ano',
      email: "anovanmaximuz@gmail.com",
      password: "coba123",
      created_at: new Date().toISOString(),
    },
  });


  const menu1 = await prisma.food.upsert({
    where: { name: 'Pecel Lele' },
    update: {},
    create: {
      name: 'Pecel Lele',
      price: 1000,
      created_at: new Date().toISOString(),
    },
  });

  const menu2 = await prisma.food.upsert({
    where: { name: 'Ayam Goreng' },
    update: {},
    create: {
      name: 'Ayam Goreng',
      price: 2000,
      created_at: new Date().toISOString(),
    },
  });

  const menu3 = await prisma.food.upsert({
    where: { name: 'Bebek Goreng' },
    update: {},
    create: {
      name: 'Bebek Goreng',
      price: 3000,
      created_at: new Date().toISOString(),
    },
  });

  console.log({ user, menu1, menu2, menu3});
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
