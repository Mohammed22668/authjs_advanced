import { prisma } from "./lib/prisma";

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

//main();

async function create() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.create({
    data: {
      email: "example@email.com",
      name: "John Doe",
      username: "johndoe",
      password: "password",
      role: "ADMIN",
      is_active: true,
    },
  });
  console.log(allUsers);
}

create();
