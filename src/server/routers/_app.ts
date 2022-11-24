import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(
      z.object({
        username: z.string(),
        password: z.string()
      }),
    )
    .mutation(async ({ input }) => {
      const newUser = await prisma.user.create({
        data: {
          ...input
        }
      });

      return {success: true, vote: newUser};
    })
});

export type AppRouter = typeof appRouter;