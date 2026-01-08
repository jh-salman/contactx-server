export declare const publicCardServices: {
    getPublicCard: (cardId: string) => Promise<{
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
};
//# sourceMappingURL=publicCard.services.d.ts.map