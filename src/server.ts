import { app } from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 3004;

async function start() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to database");
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

start();
