import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: 'John',
      email: 'john@john',
      password: 'john123'
    }
  })

  await prisma.ingredient.create({
    data: {
      name: 'sugar',
      userId: 1
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