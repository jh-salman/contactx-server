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

// আপনার backend এ (app.ts বা server.ts)
app.use(cors({
  origin: ['http://localhost:8081', 'exp://10.26.38.18:8081', 'http://10.26.38.18:3004','http://localhost:3004'], // Expo dev server
  credentials: true
}));

// Add middleware to normalize and log origin headers for debugging
app.use('/api/auth', (req, res, next) => {
    const origin = req.headers.origin || req.headers['x-origin'] || req.headers.referer;
    
    // Normalize origin header - ensure it matches trusted origins format
    if (origin && typeof origin === 'string') {
        // Remove trailing slash if present
        const normalizedOrigin = origin.replace(/\/$/, '');
        // Set normalized origin back to headers
        req.headers.origin = normalizedOrigin;
    }
    
    console.log('🔍 Auth Request Origin:', {
        'original-origin': req.headers.origin,
        'normalized-origin': origin ? (origin as string).replace(/\/$/, '') : null,
        'x-origin': req.headers['x-origin'],
        referer: req.headers.referer,
        'user-agent': req.headers['user-agent'],
        url: req.url,
    });
    next();
});

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



