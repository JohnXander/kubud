import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(z.object({ username: z.string(), password: z.string() }),)
    .mutation(async ({ input }) => {
      const createdMeal = await prisma.user.create({ data: { ...input } });
      return {success: true, newMeal: createdMeal};
    }),
  
  createMeal: procedure
    .input(z.object({ name: z.string(), img: z.string() }),)
    .mutation(async ({ input }) => {
      const createdMeal = await prisma.meal.create({ data: { ...input } });
      return {success: true, newMeal: createdMeal};
    })
  
});

export type AppRouter = typeof appRouter;