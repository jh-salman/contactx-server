import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
export async function requireAuth(req, res, next) {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Attach session data to request
    req.user = session.user;
    req.session = session.session;
    next();
}
//# sourceMappingURL=requireAuth.js.map