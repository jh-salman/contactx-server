// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { phoneNumber } from "better-auth/plugins";
// Parse trusted origins from environment variable or use defaults
// Can be comma-separated string or array
const getTrustedOrigins = () => {
    const envOrigins = process.env.AUTH_TRUSTED_ORIGINS;
    let origins = [];
    if (envOrigins) {
        // Support both comma-separated string and array format
        origins = envOrigins.includes(',')
            ? envOrigins.split(',').map(origin => origin.trim())
            : [envOrigins.trim()];
    }
    else {
        // Default origins for development - include all possible variations
        // If AUTH_TRUSTED_ORIGINS is not set in .env, use these defaults
        origins = [
            "http://localhost:3000",
            "http://localhost:3004",
            "http://127.0.0.1:3004",
            "http://10.26.38.18:3004", // Mobile app origin (update IP if it changes)
        ];
    }
    // Log trusted origins for debugging
    console.log('🔐 Better Auth Trusted Origins:', origins);
    return origins;
};
const trustedOriginsList = getTrustedOrigins();
export const auth = betterAuth({
    trustedOrigins: trustedOriginsList,
    // For development, you can also try disabling origin check entirely
    // But this is NOT recommended for production
    // ...(process.env.NODE_ENV === 'development' ? { disableOriginCheck: true } : {}), // Uncomment if needed
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    plugins: [
        phoneNumber({
            sendOTP: ({ phoneNumber, code }, ctx) => {
                console.log("otp ", code);
            },
            signUpOnVerification: {
                getTempEmail: (phone) => `${phone}@temp.yoursite.com`,
                getTempName: (phone) => `User_${phone}`
            }
        })
    ]
});
//# sourceMappingURL=auth.js.map