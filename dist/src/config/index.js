import dotenv from "dotenv";
import path from "path";
dotenv.config({
    path: path.join(process.cwd(), ".env")
});
export const config = {
    port: process.env.PORT,
    authOrigin: process.env.AUTH_TRUSTED_ORIGINS || "",
    databaseUrl: process.env.DATABASE_URL || "",
    betterAuthSecret: process.env.BETTER_AUTH_SECRET || "",
    betterAuthUrl: process.env.BETTER_AUTH_URL || "",
    cloudinaryCloudName: process.env.CLOUD_NAME || "",
    cloudinaryApiKey: process.env.CLOUD_API_KEY || "",
    cloudinaryApiSecret: process.env.CLOUD_API_SECRET || ""
};
//# sourceMappingURL=index.js.map