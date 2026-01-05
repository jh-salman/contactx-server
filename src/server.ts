import { app } from "./app";
import { config } from "./config";
import { prisma } from "./lib/prisma";

async function start() {
  await prisma.$connect();
  app.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
  });
}

start();
