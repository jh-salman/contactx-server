interface LocationData {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
}
/**
 * Get location from IP address using free IP geolocation service
 * No user permission needed - works automatically
 * Includes caching to reduce API calls
 */
export declare const getLocationFromIP: (ip: string) => Promise<LocationData | null>;
export declare const getCacheStats: () => {
    size: number;
    entries: {
        ip: string;
        cachedAt: string;
        ageHours: number;
    }[];
};
export {};
//# sourceMappingURL=ipGeolocation.d.ts.map