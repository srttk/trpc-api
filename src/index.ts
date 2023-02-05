import { createApp } from "./server";

async function main() {
  const app = await createApp();

  const PORT = 8080;
  try {
    await app.listen({
      host: "0.0.0.0",
      port: 8080,
    });

    return PORT;
  } catch (e) {
    app.log.info(`Application start error `);
    app.log.error(e);
    process.exit(1);
  }
}

main().then((port) => {
  console.info(`Application stared at ${port}`);
  console.info(`Welcome to tRPC API Server`);
});
