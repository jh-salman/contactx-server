import express, { Application, Request, Response } from "express"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { requireAuth } from "./middlewere/requireAuth";
import { cardRoutes } from "./modules/cards/card.routes";
import { globalErrorHandler } from "./middlewere/globalErrorHandler";
import { publicCardRoutes } from "./modules/publicCard/publicCard.routes";
import { scanRoutes } from "./modules/analytics/scan.routes";
import { contactRoutes } from "./modules/contacts/contacts.routes";


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

app.use("/api/card", requireAuth,cardRoutes);



// public card routes 

app.use("/api/public-card", publicCardRoutes);

app.use("/api/scan", scanRoutes);

app.use("/api/contacts", requireAuth,  contactRoutes);




//global error handler must be the last middleare

app.use(globalErrorHandler);



