# ContactX Server API Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Environment Variables](#environment-variables)

---

## 🎯 Project Overview

ContactX Server is a digital business card management system that allows users to create, manage, and share digital business cards. The system includes QR code generation, contact saving, scan analytics, and location tracking features.

---

## ✨ Features

### 1. **User Authentication**
- Email-based authentication using Better Auth
- Phone number authentication with OTP verification
- Session management
- Protected routes with authentication middleware

### 2. **Digital Business Cards (Cards)**
- Create multiple digital business cards
- Customize card appearance (title, color, logo, profile, cover)
- Add personal information (name, job title, phone, email)
- Add social media links (up to 5 links)
- Mark cards as favorites
- Automatic QR code generation for each card
- QR code image upload to Cloudinary
- Update and delete cards

### 3. **Public Card Access**
- Public endpoint to view card details without authentication
- Includes personal info and social links

### 4. **Contact Management**
- Save contacts from scanned cards
- View all saved contacts
- Update contact information
- Delete contacts
- Prevent saving own card as contact
- Duplicate contact detection
- Store contact location data (latitude, longitude, city, country)

### 5. **Scan Analytics**
- Track card scans (QR code or link access)
- Record scan metadata:
  - IP address
  - User agent
  - Source (QR or link)
  - Location data (latitude, longitude, city, country)
- Automatic IP geolocation using ip-api.com
- Location caching for performance

### 6. **Image Management**
- Cloudinary integration for image uploads
- QR code image storage
- Profile, cover, logo, and banner image support

---

## 🛠 Technology Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Better Auth
- **Image Storage**: Cloudinary
- **QR Code Generation**: qrcode library
- **IP Geolocation**: ip-api.com (free tier)
- **HTTP Client**: Axios
- **Logging**: Morgan

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:{PORT}
```

### Authentication Endpoints

All authentication endpoints are handled by Better Auth:
```
/api/auth/*
```

**Available Auth Endpoints:**
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login
- `POST /api/auth/sign-out` - User logout
- `GET /api/auth/session` - Get current session
- `POST /api/auth/verify-phone` - Verify phone number with OTP

---

### Card Management Endpoints

**Base Path:** `/api/card`  
**Authentication:** Required (Protected Routes)

#### 1. Create Card
```
POST /api/card/create
```

**Request Body:**
```json
{
  "cardTitle": "My Business Card",
  "cardColor": "blue",
  "logo": "https://cloudinary.com/...",
  "profile": "https://cloudinary.com/...",
  "cover": "https://cloudinary.com/...",
  "imagesAndLayouts": {},
  "isFavorite": false,
  "personalInfo": {
    "firstName": "John",
    "lastName": "Doe",
    "jobTitle": "Software Engineer",
    "phoneNumber": "+1234567890"
  },
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/johndoe"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Card created successfully",
  "data": {
    "id": "card_id",
    "userId": "user_id",
    "cardTitle": "My Business Card",
    "qrCode": "http://.../card/card_id",
    "qrImage": "https://cloudinary.com/...",
    "personalInfo": {...},
    "socialLinks": {...},
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### 2. Get All Cards
```
GET /api/card/all
```

**Response:**
```json
{
  "success": true,
  "message": "Card details",
  "data": [
    {
      "id": "card_id",
      "cardTitle": "My Business Card",
      "personalInfo": {...},
      "socialLinks": {...},
      ...
    }
  ]
}
```

#### 3. Update Card
```
PUT /api/card/update/:id
```

**Request Body:** (All fields optional)
```json
{
  "cardTitle": "Updated Title",
  "cardColor": "red",
  "logo": "https://cloudinary.com/...",
  "profile": "https://cloudinary.com/...",
  "cover": "https://cloudinary.com/...",
  "isFavorite": true,
  "personalInfo": {
    "firstName": "Jane",
    "lastName": "Doe",
    "jobTitle": "Product Manager"
  },
  "socialLinks": [...]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Card updated successfully",
  "data": {...}
}
```

#### 4. Delete Card
```
DELETE /api/card/delete/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Card deleted successfully"
}
```

---

### Public Card Endpoints

**Base Path:** `/api/public-card`  
**Authentication:** Not Required (Public Routes)

#### 1. Get Public Card
```
GET /api/public-card/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "card_id",
    "cardTitle": "My Business Card",
    "personalInfo": {
      "firstName": "John",
      "lastName": "Doe",
      "jobTitle": "Software Engineer",
      "phoneNumber": "+1234567890",
      "email": "john@example.com"
    },
    "socialLinks": {
      "links": [...]
    }
  }
}
```

---

### Contact Management Endpoints

**Base Path:** `/api/contacts`  
**Authentication:** Required (Protected Routes)

#### 1. Save Contact
```
POST /api/contacts/save/:cardId
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "email": "john@example.com",
  "company": "Tech Corp",
  "jobTitle": "Engineer",
  "image": "https://cloudinary.com/...",
  "logo": "https://cloudinary.com/...",
  "banner": "https://cloudinary.com/...",
  "profile_img": "https://cloudinary.com/...",
  "note": "Met at conference",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "city": "New York",
  "country": "USA"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact saved successfully",
  "data": {
    "id": "contact_id",
    "firstName": "John",
    "lastName": "Doe",
    ...
  }
}
```

**Note:** Returns `"Contact already saved"` if duplicate contact exists.

#### 2. Get All Contacts
```
GET /api/contacts/all
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "contact_id",
      "firstName": "John",
      "lastName": "Doe",
      "phone": "+1234567890",
      "email": "john@example.com",
      "cardId": "card_id",
      "createdAt": "2024-01-01T00:00:00.000Z",
      ...
    }
  ]
}
```

#### 3. Update Contact
```
PUT /api/contacts/update/:contactId
```

**Request Body:** (All fields optional)
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "+9876543210",
  "email": "jane@example.com",
  "company": "New Company",
  "note": "Updated note"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact updated successfully",
  "data": {...}
}
```

#### 4. Delete Contact
```
DELETE /api/contacts/delete/:contactId
```

**Response:**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

---

### Scan Analytics Endpoints

**Base Path:** `/api/scan`  
**Authentication:** Not Required (Public Routes)

#### 1. Track Scan and Get Card
```
GET /api/scan/:cardId
```

**Query Parameters:**
- `source` (optional): `"qr"` or `"link"` (default: `"qr"`)
- `latitude` (optional): Latitude coordinate
- `longitude` (optional): Longitude coordinate
- `city` (optional): City name
- `country` (optional): Country name

**Example:**
```
GET /api/scan/card_id?source=qr&latitude=40.7128&longitude=-74.0060&city=New%20York&country=USA
```

**Response:**
```json
{
  "success": true,
  "message": "Scan tracked successfully",
  "data": {
    "card": {
      "id": "card_id",
      "cardTitle": "My Business Card",
      "personalInfo": {...},
      "socialLinks": {...}
    },
    "cardScan": {
      "id": "scan_id",
      "scannedAt": "2024-01-01T00:00:00.000Z",
      "ip": "192.168.1.1",
      "userAgent": "Mozilla/5.0...",
      "source": "qr",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "city": "New York",
      "country": "USA"
    }
  }
}
```

**Note:** If location data is not provided, the system automatically attempts to geolocate using the IP address.

---

### Utility Endpoints

#### 1. Health Check
```
GET /
```

**Response:**
```
Hello world
```

#### 2. Protected Route Test
```
GET /api/protected
```

**Authentication:** Required

**Response:**
```json
{
  "message": "This is a protected route",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "session": {...}
}
```

---

## 🗄 Database Schema

### Models

#### User
- `id` (String, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `emailVerified` (Boolean)
- `image` (String, Optional)
- `phoneNumber` (String, Optional, Unique)
- `phoneNumberVerified` (Boolean, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- Relations: `cards`, `contacts`, `sessions`, `accounts`

#### Card
- `id` (String, Primary Key, CUID)
- `userId` (String, Foreign Key → User)
- `cardTitle` (String, Default: "ConactX")
- `cardColor` (String, Default: "black")
- `logo` (String, Optional)
- `profile` (String, Optional)
- `cover` (String, Optional)
- `imagesAndLayouts` (JSON, Optional)
- `isFavorite` (Boolean, Default: false)
- `qrCode` (String, Optional)
- `qrImage` (String, Optional)
- `setting` (JSON, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- Relations: `user`, `personalInfo`, `socialLinks`, `scan`, `contacts`

#### personalInfo
- `id` (String, Primary Key, CUID)
- `cardId` (String, Unique, Foreign Key → Card)
- `firstName` (String)
- `lastName` (String)
- `jobTitle` (String)
- `phoneNumber` (String)
- `email` (String, Optional)

#### socialLinks
- `id` (String, Primary Key, CUID)
- `cardId` (String, Unique, Foreign Key → Card)
- `links` (JSON Array, Max 5)

#### cardScan
- `id` (String, Primary Key, CUID)
- `cardId` (String, Foreign Key → Card)
- `ip` (String, Optional)
- `userAgent` (String, Optional)
- `source` (String, Default: "qr") // "qr" | "link"
- `latitude` (Float, Optional)
- `longitude` (Float, Optional)
- `city` (String, Optional)
- `country` (String, Optional)
- `createdAt` (DateTime)

#### Contact
- `id` (String, Primary Key, CUID)
- `userId` (String, Foreign Key → User) // Card owner
- `cardId` (String, Foreign Key → Card) // Scanned card
- `firstName` (String)
- `lastName` (String)
- `phone` (String)
- `email` (String, Optional)
- `company` (String, Optional)
- `jobTitle` (String, Optional)
- `image` (String, Optional)
- `logo` (String, Optional)
- `banner` (String, Optional)
- `profile_img` (String, Optional)
- `note` (String, Optional)
- `latitude` (Float, Optional)
- `longitude` (Float, Optional)
- `city` (String, Optional)
- `country` (String, Optional)
- `createdAt` (DateTime)

#### Session
- `id` (String, Primary Key)
- `userId` (String, Foreign Key → User)
- `expiresAt` (DateTime)
- `token` (String, Unique)
- `ipAddress` (String, Optional)
- `userAgent` (String, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

#### Account
- `id` (String, Primary Key)
- `userId` (String, Foreign Key → User)
- `accountId` (String)
- `providerId` (String)
- `accessToken` (String, Optional)
- `refreshToken` (String, Optional)
- `idToken` (String, Optional)
- `accessTokenExpiresAt` (DateTime, Optional)
- `refreshTokenExpiresAt` (DateTime, Optional)
- `scope` (String, Optional)
- `password` (String, Optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

#### Verification
- `id` (String, Primary Key)
- `identifier` (String)
- `value` (String)
- `expiresAt` (DateTime)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

---

## 🔐 Authentication

### Authentication System
The server uses **Better Auth** for authentication with the following features:
- Email-based authentication
- Phone number authentication with OTP
- Session-based authentication
- Prisma adapter for database storage

### Protected Routes
Routes protected with `requireAuth` middleware:
- `/api/card/*` - All card management endpoints
- `/api/contacts/*` - All contact management endpoints
- `/api/protected` - Test protected route

### Public Routes
Routes accessible without authentication:
- `/api/auth/*` - Authentication endpoints
- `/api/public-card/*` - Public card viewing
- `/api/scan/*` - Scan tracking endpoints

### Authentication Middleware
The `requireAuth` middleware:
1. Extracts session from request headers
2. Validates session using Better Auth
3. Attaches `user` and `session` to `req` object
4. Returns 401 if session is invalid

---

## ⚙️ Environment Variables

Required environment variables (`.env` file):

```env
# Server Configuration
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/contactx"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
AUTH_TRUSTED_ORIGINS="http://localhost:3000,http://localhost:3004,http://10.26.38.18:3004"

# Cloudinary
CLOUD_NAME="your-cloud-name"
CLOUD_API_KEY="your-api-key"
CLOUD_API_SECRET="your-api-secret"
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Database Setup
```bash
npx prisma generate
npx prisma migrate dev
```

### Run Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

---

## 📝 Notes

1. **QR Code Generation**: Automatically generated when a card is created. QR code points to the public card URL.

2. **IP Geolocation**: Uses ip-api.com free tier (45 requests/minute). Includes caching to reduce API calls.

3. **Duplicate Contact Prevention**: System prevents saving the same card as a contact multiple times for the same user.

4. **Own Card Prevention**: Users cannot save their own cards as contacts.

5. **Social Links Limit**: Maximum 5 social links per card.

6. **CORS Configuration**: Configured for localhost and mobile app origins.

7. **Error Handling**: Global error handler catches all errors and returns standardized error responses.

8. **404 Handler**: Returns JSON response for undefined routes.

---

## 📞 Support

For issues or questions, please visit: https://github.com/jh-salman/contactx-server/issues

