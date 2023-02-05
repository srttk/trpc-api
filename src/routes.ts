import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export function Routes(fastify: FastifyInstance, options: any, done) {
  fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {
    reply.send("Hello");
  });

  done();
}
