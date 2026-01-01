// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { phoneNumber } from "better-auth/plugins";



export const auth = betterAuth({
    trustedOrigins: [process.env.AUTH_TRUSTED_ORIGINS || "http://localhost:3000"],
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    plugins: [
        phoneNumber({
            sendOTP: ({ phoneNumber, code }, ctx) => {
                console.log("otp ", code)
            },
            signUpOnVerification: {
                getTempEmail: (phone) => `${phone}@temp.yoursite.com`,
                getTempName: (phone) => `User_${phone}`
            }
        })
    ]
});
