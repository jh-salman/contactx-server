import { app } from "../src/app.js";
import { prisma } from "../src/lib/prisma.js";

// Vercel serverless function handler
export default async function handler(req: any, res: any) {
  // Ensure database connection for serverless
  try {
    // Check if already connected (for serverless, connections are reused)
    await prisma.$connect();
  } catch (error) {
    console.error("Database connection error:", error);
    // Don't fail the request if connection fails, let Express handle it
  }

  // Handle the request with Express app
  return app(req, res);
}

