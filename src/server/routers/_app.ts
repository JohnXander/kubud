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
  
  createIngredient: procedure
    .input(z.object({ name: z.string(), userId: z.number() }))
    .mutation(async ({ input }) => {
      const createdIngredient = await prisma.ingredient.create({ data: { ...input } });
      return {success: true, newIngredient: createdIngredient};
    }),
  
  getUser: procedure
    .input(z.object({ username: z.string() }),)
    .query(async ({ input }) => {
      const foundUser = await prisma.user.findMany({ where: { ...input } });
      return {success: true, newUser: foundUser};
    }),
  
  getIngredients: procedure
    .input(z.object({ userId: z.number() }),)
    .query(async ({ input }) => {
      const foundIngredients = await prisma.ingredient.findMany({ where: { ...input } });
      return {success: true, ingredients: foundIngredients};
    }),
  
  deleteUser: procedure
    .input(z.object({ username: z.string() }),)
    .mutation(async ({ input }) => {
      const deletedUser = await prisma.user.delete({ where: { ...input } });
      return {success: true, newUser: deletedUser};
    }),
  
  deleteIngredient: procedure
    .input(z.object({ name: z.string() }),)
    .mutation(async ({ input }) => {
      const deletedIngredient = await prisma.ingredient.deleteMany({ where: { ...input } });
      return {success: true, newUser: deletedIngredient};
    }),
  
});

export type AppRouter = typeof appRouter;