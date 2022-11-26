import { router } from "../trpc";
import { mailerRouter } from "./mailer";

export const appRouter = router({
  mailer: mailerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
