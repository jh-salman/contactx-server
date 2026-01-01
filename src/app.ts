import express, { Application, Request, Response } from "express"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { authRoutes } from "./modules/auth/auth.routes";
import cors from "cors";
import { requireAuth } from "./middlewere/requireAuth";


export const app:Application= express();
app.use(express.json());
app.use(cors());

app.all('/api/auth/*splat', toNodeHandler(auth));


app.get("/", (req:Request, res:Response )=>{
    res.send("Hello world")

})

app.get('/api/protected', requireAuth, (req: Request, res: Response) => {
    res.json({
      message: "This is a protected route",
      user: req.user,
      session: req.session,
    });
  });

app.use("/api/auth", authRoutes);
