import { initTRPC, inferAsyncReturnType } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return "Hello World!";
  }),
});

import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? "anonymous" };
  return { req, res, user };
}
export type Context = inferAsyncReturnType<typeof createContext>;
