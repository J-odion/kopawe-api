# KOPA WE - Digital Ecosystem for NYSC Members

**KOPA WE** is the official digital infrastructure designed to improve the lives of National Youth Service Corps (NYSC) members and support NYSC operations. It combines financial services, housing, commerce, and community into one trusted, verified platform.

---

## 🚀 Core Modules & Features

### 🔐 1. Identity & Verification (The Trust Layer)
- **Digital Corps ID**: A verified digital identity generated after authenticating with NYSC records.
- **Instant Verification**: Integration with NYSC database using Call-up numbers and State codes.
- **Fraud Protection**: A secure layer that ensures only genuine corps members access the ecosystem.

### 💰 2. Qreva Core (Finance)
- **Smart Wallet**: Manage your allowance, P2P transfers, and bill payments seamlessly.
- **Allawee Advance (Micro-Loans)**: Get instant loans between ₦1,000 – ₦100,000 based on your NYSC stipend cycle.
- **Fintech-grade Ledger**: A double-entry accounting system that ensures your funds are always safe and audited.
- **Savings & CDS Groups**: Individual savings and collaborative "Ajo" style savings for CDS groups.

### 🏠 3. Accommodation & Relocation
- **Roommate Finder**: Match with other verified corps members based on location and preferences.
- **Housing Marketplace**: Browse verified landlord listings and secure apartments via escrow.
- **Rent Escrow**: Pay your rent through Safetrade to ensure your money is only released when you move in.

### 🛒 4. Marketplace & Declutter
- **Corps-owned Businesses**: Support fellow corpers by buying from their businesses.
- **Declutter Section**: Sell your used items (beds, fans, etc.) easily to incoming members.
- **Safetrade (Escrow)**: Our proprietary engine that holds payments until delivery is confirmed by the buyer.

### 🧑💼 5. NYSC Admin Dashboard
- **Broadcast System**: Real-time announcements from NYSC officials to specific States or LGAs.
- **Welfare Monitoring**: Track and support corps welfare issues through a centralized dashboard.
- **Digital Transformation**: Automating verification and communication for thousands of members.

---

## 🛠 Technical Walkthrough

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd kopa-we-api
   ```

2. **Setup Environment**:
   Create a `.env` file based on the provided template:
   ```env
   PORT=3000
   MONGODB_URI=
   JWT_SECRET=
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm run start:dev
   ```

### API Documentation (Swagger)
The interactive API documentation is available at:
👉 `http://localhost:3000/api/docs`

---

## 🧪 Testing

We use Jest for unit and end-to-end testing.

- **Run E2E Tests**:
  ```bash
  npm run test:e2e
  ```
- **Run Unit Tests**:
  ```bash
  npm run test
  ```

---

## 🛡 Security & Compliance
- **Data Privacy**: Fully compliant with NDPC regulations.
- **Escrow Enforcement**: All marketplace transactions are protected by Safetrade.
- **Verification**: Mandatory NYSC identity check for all financial operations.

---

Built with ❤️ by **Qreva Team** for the **National Youth Service Corps**.
