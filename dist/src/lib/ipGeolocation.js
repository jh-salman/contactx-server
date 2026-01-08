import axios from 'axios';
// Simple in-memory cache
const locationCache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
/**
 * Get location from IP address using free IP geolocation service
 * No user permission needed - works automatically
 * Includes caching to reduce API calls
 */
export const getLocationFromIP = async (ip) => {
    try {
        // Skip localhost/local IPs (can't geolocate)
        if (!ip ||
            ip === '::1' ||
            ip === '127.0.0.1' ||
            ip.startsWith('192.168.') ||
            ip.startsWith('10.') ||
            ip.startsWith('172.16.')) {
            console.log('Skipping geolocation for local IP:', ip);
            return null;
        }
        // Extract real IP if behind proxy (x-forwarded-for can have multiple IPs)
        const realIP = ip?.split(',')[0]?.trim();
        if (!realIP)
            return null; // ip missing হলে early return
        // Check cache first
        const cached = locationCache.get(realIP);
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            console.log('Using cached location for IP:', realIP);
            return cached.data;
        }
        // Fetch from API (ip-api.com - free tier: 45 requests/minute)
        const response = await axios.get(`http://ip-api.com/json/${realIP}?fields=status,country,city,lat,lon`, {
            timeout: 5000, // 5 second timeout
        });
        if (response.data.status === 'success') {
            const locationData = {
                latitude: response.data.lat,
                longitude: response.data.lon,
                city: response.data.city || '',
                country: response.data.country || '',
            };
            // Cache the result
            locationCache.set(realIP, {
                data: locationData,
                timestamp: Date.now(),
            });
            console.log('Location fetched and cached for IP:', realIP);
            return locationData;
        }
        return null;
    }
    catch (error) {
        // Handle rate limit error specifically
        if (error.response?.status === 429) {
            console.warn('Rate limit exceeded for ip-api.com, checking cache...');
            // Return cached data if available, even if expired
            const realIP = ip?.split(',')[0]?.trim();
            if (!realIP)
                return null; // ip missing হলে early return
            const cached = locationCache.get(realIP);
            if (cached) {
                console.log('Returning expired cache due to rate limit');
                return cached.data;
            }
        }
        console.error('IP geolocation error:', error.message);
        return null; // Fail silently, don't block the request
    }
};
// Optional: Clear old cache entries periodically (every hour)
setInterval(() => {
    const now = Date.now();
    let cleared = 0;
    for (const [ip, value] of locationCache.entries()) {
        if (now - value.timestamp > CACHE_DURATION) {
            locationCache.delete(ip);
            cleared++;
        }
    }
    if (cleared > 0) {
        console.log(`Cleared ${cleared} expired cache entries`);
    }
}, 60 * 60 * 1000); // Clean every hour
// Export cache stats for monitoring (optional)
export const getCacheStats = () => {
    return {
        size: locationCache.size,
        entries: Array.from(locationCache.entries()).map(([ip, value]) => ({
            ip,
            cachedAt: new Date(value.timestamp).toISOString(),
            ageHours: (Date.now() - value.timestamp) / (60 * 60 * 1000),
        })),
    };
};
//# sourceMappingURL=ipGeolocation.js.map