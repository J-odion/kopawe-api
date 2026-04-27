# Kopa We - NYSC Unified Digital Ecosystem

Welcome to the **Kopa We API**, the production-grade backend infrastructure for the unified NYSC digital ecosystem. This platform transitions the NYSC experience into a secure, scalable, and feature-rich digital environment.

## 🚀 Key Features & Modules

### 1. Identity & Verification (`/api/identity`)
*   **Verification Engine**: Validates corp members using their official `callUpNumber` and `stateCode`.
*   **Profile Management**: Stores member details including PPA, clearance status, and verification badges.

### 2. Authentication & Security (`/api/auth`)
*   **Secure Access**: Uses robust **JWT-based Authentication** via Passport.js.
*   **Token Lifecycle**: Issue Bearer tokens upon successful registration or login to protect sensitive API endpoints and prevent IDOR (Insecure Direct Object Reference) vulnerabilities.

### 3. Community & Social Engine (`/api/community`)
*   **State-Based Feeds**: View updates, news, and events filtered by State and LGA.
*   **Engagement**: Support for nested comments, upvoting, live polls, and event RSVPs.
*   **Content Moderation**: Strict role checks ensure official announcements are restricted to admins.

### 4. Marketplace & Safetrade (`/api/marketplace` & `/api/safetrade`)
*   **P2P Commerce**: Corp members can list items for sale (e.g., camp items, furniture).
*   **Escrow System (Safetrade)**: Protects buyers and sellers by holding funds in escrow until item delivery is confirmed.
*   **Logistics Tracking**: Sellers can update logistics statuses and tracking numbers.

### 5. Financial Operating System (`/api/finance` & `/api/credit`)
*   **Digital Wallet**: Every corp member gets an integrated digital wallet.
*   **Transfers & Bills**: Peer-to-peer transfers and bill payments.
*   **Credit/Loans**: Access to micro-loans with structured repayment schedules based on allowance schedules.

### 6. Accommodation & Housing (`/api/accommodation`)
*   **PPA Housing**: Find and list accommodations near your Place of Primary Assignment (PPA).
*   **Roommate Matching**: Filter listings specifically for corps members looking for roommates.

### 7. Career & Kopa Academy (`/api/career`)
*   **Job Board**: Discover job opportunities tailored for post-service employment.
*   **Skills Training**: Access Kopa Academy courses and webinars.
*   **Professional Counseling**: Book 1-on-1 career, relationship, and mental health counseling sessions.

### 8. Welfare & Health (`/api/welfare` & `/api/insurance`)
*   **Welfare Fund**: A transparent community fund for medical emergencies and support.
*   **HMO & Insurance**: Submit and track medical claims via partner HMO networks.

## 🛡️ Architecture & Technical Stack

*   **Framework**: [NestJS](https://nestjs.com/) (TypeScript)
*   **Database**: MongoDB via Mongoose
*   **Security**: JWT (Passport Strategy), Role-based Guards, Class Validators
*   **Performance**: Standardized API pagination applied to all data-heavy endpoints (`Community`, `Marketplace`, `Accommodation`, `Career`).
*   **Media**: Configured `Multer` with `UploadsModule` to handle secure image and document uploads, stored in `/public/uploads`.
*   **Documentation**: Interactive Swagger API Docs automatically generated at `/api/docs`.

## 📖 User Manual / Integration Guide for Frontend

### 1. Registration & Authentication
*   **Step 1:** Call `POST /api/auth/register` with `callUpNumber` and `stateCode`.
*   **Step 2:** The API will return a `user` object and an `accessToken`.
*   **Step 3:** Store the `accessToken` securely (e.g., in HttpOnly cookies or local storage).
*   **Step 4:** For all subsequent requests, include the token in the headers:
    ```http
    Authorization: Bearer <your_access_token>
    ```

### 2. Standardized Pagination
All listing endpoints (Feeds, Jobs, Accommodations, Marketplace) use standardized pagination.
*   **Query Params**: `?page=1&limit=20`
*   **Response Format**:
    ```json
    {
      "data": [ ...items... ],
      "meta": {
        "total": 150,
        "page": 1,
        "lastPage": 8,
        "limit": 20
      }
    }
    ```

### 3. File Uploads
To upload profile pictures, marketplace items, or documents:
*   **Endpoint**: `POST /api/uploads`
*   **Body Type**: `multipart/form-data`
*   **Field Name**: `file`
*   **Response**: Returns the relative URL `{"url": "/uploads/123456789.png"}` which can be saved to the database.

## 🧪 Testing

The API features comprehensive test coverage:
*   **Unit Tests**: Validates individual module logic and service layers (`npm run test`).
*   **End-to-End Tests**: Simulates full request lifecycles against the database (`npm run test:e2e`).
