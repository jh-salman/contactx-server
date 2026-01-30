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
import { notFoundRoute } from "./middlewere/notFoundRoute";
import morgan from "morgan";


export const app:Application= express();
app.use(express.json());

app.use(morgan("dev"));


app.use(cors({
 origin: [
    'http://localhost:8081', 
    'exp://10.23.61.18:8081',  // Old IP
    'exp://10.102.144.18:8081',  // ✅ NEW - Add this
    'http://10.23.61.18:3004',  // Old IP
    'http://10.102.144.18:3004',  // ✅ NEW - Add this
    'http://localhost:3004'
  ],
  credentials: true
}));


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
app.use(notFoundRoute)

app.use(globalErrorHandler);



