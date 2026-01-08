export declare const trackScanAndFetchCard: (cardId: string, meta: {
    ip?: string;
    userAgent?: string;
    source?: "qr" | "link";
    latitude?: number;
    longitude?: number;
    city?: string;
    country?: string;
}) => Promise<{
    card: {
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
    };
    cardScan: {
        id: string;
        scannedAt: Date;
        ip: string | null;
        userAgent: string | null;
        source: string;
        latitude: number | null;
        longitude: number | null;
        city: string | null;
        country: string | null;
    };
    message: string;
}>;
export declare const scanServices: {
    trackScanAndFetchCard: (cardId: string, meta: {
        ip?: string;
        userAgent?: string;
        source?: "qr" | "link";
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: string;
    }) => Promise<{
        card: {
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
        };
        cardScan: {
            id: string;
            scannedAt: Date;
            ip: string | null;
            userAgent: string | null;
            source: string;
            latitude: number | null;
            longitude: number | null;
            city: string | null;
            country: string | null;
        };
        message: string;
    }>;
};
//# sourceMappingURL=scan.services.d.ts.map