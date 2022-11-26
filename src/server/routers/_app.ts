import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(z.object({ username: z.string(), email: z.string(), password: z.string() }),)
    .mutation(async ({ input }) => {
      const createdUser = await prisma.user.create({ data: { ...input } });
      return {success: true, newUser: createdUser};
    }),
  
  getUser: procedure
    .input(z.object({ username: z.string() }),)
    .query(async ({ input }) => {
      const foundUser = await prisma.user.findMany({ where: { ...input } });
      return {success: true, newUser: foundUser};
    }),
  
});

export type AppRouter = typeof appRouter;