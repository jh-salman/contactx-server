export declare const auth: import("better-auth").Auth<{
    trustedOrigins: string[];
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    plugins: [{
        id: "phone-number";
        hooks: {
            before: {
                matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<never>;
            }[];
        };
        endpoints: {
            signInPhoneNumber: import("better-auth").StrictEndpoint<"/sign-in/phone-number", {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    phoneNumber: import("better-auth").ZodString;
                    password: import("better-auth").ZodString;
                    rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                }, import("better-auth").$strip>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                                session: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            }, {
                token: string;
                user: import("better-auth/plugins").UserWithPhoneNumber;
            }>;
            sendPhoneNumberOTP: import("better-auth").StrictEndpoint<"/phone-number/send-otp", {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    phoneNumber: import("better-auth").ZodString;
                }, import("better-auth").$strip>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                message: string;
            }>;
            verifyPhoneNumber: import("better-auth").StrictEndpoint<"/phone-number/verify", {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    phoneNumber: import("better-auth").ZodString;
                    code: import("better-auth").ZodString;
                    disableSession: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    updatePhoneNumber: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                }, import("better-auth").$strip>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    nullable: boolean;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        phoneNumber: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        phoneNumberVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            }, {
                status: boolean;
                token: string;
                user: import("better-auth/plugins").UserWithPhoneNumber;
            } | {
                status: boolean;
                token: null;
                user: import("better-auth/plugins").UserWithPhoneNumber;
            }>;
            requestPasswordResetPhoneNumber: import("better-auth").StrictEndpoint<"/phone-number/request-password-reset", {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    phoneNumber: import("better-auth").ZodString;
                }, import("better-auth").$strip>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    enum: boolean[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                status: boolean;
            }>;
            resetPasswordPhoneNumber: import("better-auth").StrictEndpoint<"/phone-number/reset-password", {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    otp: import("better-auth").ZodString;
                    phoneNumber: import("better-auth").ZodString;
                    newPassword: import("better-auth").ZodString;
                }, import("better-auth").$strip>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    enum: boolean[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                status: boolean;
            }>;
        };
        schema: {
            user: {
                fields: {
                    phoneNumber: {
                        type: "string";
                        required: false;
                        unique: true;
                        sortable: true;
                        returned: true;
                    };
                    phoneNumberVerified: {
                        type: "boolean";
                        required: false;
                        returned: true;
                        input: false;
                    };
                };
            };
        };
        rateLimit: {
            pathMatcher(path: string): boolean;
            window: number;
            max: number;
        }[];
        options: import("better-auth/plugins").PhoneNumberOptions | undefined;
        $ERROR_CODES: {
            readonly INVALID_PHONE_NUMBER: "Invalid phone number";
            readonly PHONE_NUMBER_EXIST: "Phone number already exists";
            readonly PHONE_NUMBER_NOT_EXIST: "phone number isn't registered";
            readonly INVALID_PHONE_NUMBER_OR_PASSWORD: "Invalid phone number or password";
            readonly UNEXPECTED_ERROR: "Unexpected error";
            readonly OTP_NOT_FOUND: "OTP not found";
            readonly OTP_EXPIRED: "OTP expired";
            readonly INVALID_OTP: "Invalid OTP";
            readonly PHONE_NUMBER_NOT_VERIFIED: "Phone number not verified";
            readonly PHONE_NUMBER_CANNOT_BE_UPDATED: "Phone number cannot be updated";
            readonly SEND_OTP_NOT_IMPLEMENTED: "sendOTP not implemented";
            readonly TOO_MANY_ATTEMPTS: "Too many attempts";
        };
    }];
}>;
//# sourceMappingURL=auth.d.ts.map