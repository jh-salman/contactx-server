import { Card } from "../../../generated/prisma/client";
export declare const cardServices: {
    createCard: (userId: string, cardTitle?: string, cardColor?: string, logo?: string, profile?: string, cover?: string, imagesAndLayouts?: any, isFavorite?: boolean, personalInfo?: {
        firstName: string;
        lastName: string;
        jobTitle: string;
    }, socialLinks?: any[]) => Promise<{
        personalInfo: {
            id: string;
            firstName: string;
            lastName: string;
            jobTitle: string;
            cardId: string;
        } | null;
        socialLinks: {
            id: string;
            links: import("@prisma/client/runtime/client").JsonValue[];
            cardId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cardTitle: string;
        cardColor: string;
        logo: string | null;
        profile: string | null;
        cover: string | null;
        imagesAndLayouts: import("@prisma/client/runtime/client").JsonValue | null;
        isFavorite: boolean;
        qrCode: string | null;
        qrImage: string | null;
        setting: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    getAllCard: (userId: string) => Promise<Card[]>;
    updateCard: (cardId: string, userId: string, payload: {
        cardTitle?: string;
        cardColor?: string;
        logo?: string | null;
        profile?: string | null;
        cover?: string | null;
        imagesAndLayouts?: any;
        isFavorite?: boolean;
        qrCode?: string | null;
        personalInfo?: {
            firstName: string;
            lastName: string;
            jobTitle: string;
        };
        socialLinks?: any[];
    }) => Promise<{
        personalInfo: {
            id: string;
            firstName: string;
            lastName: string;
            jobTitle: string;
            cardId: string;
        } | null;
        socialLinks: {
            id: string;
            links: import("@prisma/client/runtime/client").JsonValue[];
            cardId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cardTitle: string;
        cardColor: string;
        logo: string | null;
        profile: string | null;
        cover: string | null;
        imagesAndLayouts: import("@prisma/client/runtime/client").JsonValue | null;
        isFavorite: boolean;
        qrCode: string | null;
        qrImage: string | null;
        setting: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    deleteCard: (cardId: string, userId: string) => Promise<boolean>;
};
//# sourceMappingURL=card.services.d.ts.map