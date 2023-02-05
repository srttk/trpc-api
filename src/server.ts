import fastify = require("fastify");
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { Routes } from "./routes";
import { appRouter, createContext } from "~/trpc/app-router";

export async function createApp() {
  let app = fastify({
    logger: false,
  });

  /**
   * Register fastify plugins
   */

  /** Fastify tRPC Plugin */

  await app.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  /**
   * Initialize app libs and settings
   */

  /**
   * Regitser routes and middlewares
   */

  app.register(Routes);

  return app;
}
