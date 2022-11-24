import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: 'Nobody'
    }
  })

  /* eslint-disable */
  await prisma.test.create({
    data: {
      testOne: 'Nothing',
      testTwo: 'Also nothing',
    }
  })
  /* eslint-enable */
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