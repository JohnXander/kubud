import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  // createUser: procedure
  //   .input(
  //     z.object({
  //       username: z.string()
  //     }),
  //   )
  //   .mutation(async ({ input }) => {
  //     const newUser = await prisma.user.create({
  //       data: {
  //         ...input
  //       }
  //     });

  //     return {success: true, vote: newUser};
  //   }),
  
  // createTest: procedure
  //   .input(
  //     z.object({
  //       testOne: z.string(),
  //       testTwo: z.string()
  //     }),
  //   )
  //   .mutation(async ({ input }) => {
  //     const newTest = await prisma.test.create({
  //       data: {
  //         ...input
  //       }
  //     });

  //     return {success: true, vote: newTest};
  //   })
  
  createMeal: procedure
    .input(
      z.object({
        name: z.number(),
        img: z.number()
      }),
    )
    .mutation(async ({ input }) => {
      const voteInDb = await prisma.meal.create({
        data: {
          ...input
        }
      });

      return {success: true, vote: voteInDb};
    })
});

export type AppRouter = typeof appRouter;