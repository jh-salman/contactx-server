import { app } from "../src/app";

// Vercel serverless function handler
// Express app can be directly exported - Vercel's @vercel/node will handle it
// The app is already configured with all routes and middleware
export default app;

