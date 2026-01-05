import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { requireAuth } from "./middlewere/requireAuth";
import { cardRoutes } from "./modules/cards/card.routes";
import { publicCardRoutes } from "./modules/publicCard/publicCard.routes";
import { scanRoutes } from "./modules/analytics/scan.routes";
import { contactRoutes } from "./modules/contacts/contacts.routes";
import { notFoundRoute } from "./middlewere/notFoundRoute";
import { globalErrorHandler } from "./middlewere/globalErrorHandler";

export const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3004",
    "http://localhost:3000",
    "https://contactx-server-gnia74tg8-jhsalmans-projects.vercel.app"
  ],
  credentials: true
}));

app.all("/api/auth/*splat", toNodeHandler(auth));

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.get("/api/protected", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

app.use("/api/card", requireAuth, cardRoutes);
app.use("/api/public-card", publicCardRoutes);
app.use("/api/scan", scanRoutes);
app.use("/api/contacts", requireAuth, contactRoutes);

app.use(notFoundRoute);
app.use(globalErrorHandler);

// 🔑 THIS IS IMPORTANT
export default app;
