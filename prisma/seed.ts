import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Employee = {
  [key: string]: string;
};

const emp: Employee = {
  username: 'Alice',
  password: 'accounting'
};

async function main() {
  await prisma.user.create({
    data: {
      username: emp.username,
      password: emp.password
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })