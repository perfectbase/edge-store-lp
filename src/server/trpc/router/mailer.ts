import { TRPCError } from "@trpc/server";
import MailerLite from "mailerlite-api-v2-node";
import { z } from "zod";
import { env } from "../../../env/server.mjs";
import { router, publicProcedure } from "../trpc";

const mailerLite = MailerLite(env.MAILERLITE_KEY as string);

export const mailerRouter = router({
  subscribe: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        pay: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        if (input.pay) {
          await mailerLite.addSubscriberToGroup(
            env.PAYED_WAITING_SUBSCRIPTION_GROUP_ID as unknown as number,
            {
              name: input.name,
              email: input.email,
            }
          );
        } else {
          await mailerLite.addSubscriberToGroup(
            env.FREE_WAITING_SUBSCRIPTION_GROUP_ID as unknown as number,
            {
              name: input.name,
              email: input.email,
            }
          );
        }
        return true;
      } catch (e) {
        console.error(e);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
