import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const mailerRouter = router({
  subscribe: publicProcedure
    .input(
      z
        .object({
          name: z.string().min(1),
          email: z.string().email(),
        })
        .nullish()
    )
    .mutation(({ input }) => {
      console.log(input);
      return {
        success: true,
      };
    }),
});
