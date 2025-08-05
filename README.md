
# 🚘 Ryde – Your Personal Ride-Hailing Companion

**Ryde** is a mobile-first ride-hailing app built with a modern stack including **React Native**, **Expo**, **TypeScript**, **Clerk**, **Stripe**, and **Google Maps APIs**. Users can create an account, select a destination, view nearby drivers, and book a ride — all in a seamless flow.

---

## 📱 Features

- 🔐 Authentication with **Clerk** (Email/Password and Google OAuth)
- 🗺️ Address autocomplete using **Google Places API**
- 🧭 Real-time route rendering with **React Native Maps + Directions**
- 💳 **Stripe** integration for ride payments (test mode supported)
- 📦 State management with **Zustand**
- 📸 Driver & vehicle preview before booking
- 🎨 Styling with **NativeWind** (Tailwind for React Native)
- 🧠 Fully **type-safe** codebase with **TypeScript**
- 🌐 Serverless PostgreSQL database via **Neon**
- 🚀 **Monorepo** structure with **Expo API Routes**

---

## 🔄 App Flow

1. User opens the app and sees the onboarding screen.
2. Registers using **Google** or **Email/Password** via **Clerk**.
3. If using email, a verification code is sent.
4. Redirected to the home screen.
5. Selects a destination using Google autocomplete.
6. Nearby drivers are displayed on the map.
7. User taps a driver to view:
   - Driver photo
   - Car photo
   - Seat availability
   - Estimated price and time
8. Proceeds with payment using **Stripe**.
9. Booking confirmation modal is shown.
10. Redirected back to home screen with route and ETA.

---

## 🧰 Tech Stack

| Layer         | Technology                                        |
|---------------|---------------------------------------------------|
| **Frontend**  | React Native (Expo), NativeWind, TypeScript       |
| **State Mgmt**| Zustand                                           |
| **Maps**      | Google Maps API, React Native Maps + Directions   |
| **Auth**      | Clerk (Email/Password + Google OAuth)             |
| **Payments**  | Stripe                                            |
| **Backend**   | Expo API Routes                                   |
| **Database**  | Neon (PostgreSQL Serverless)                      |
| **Deployment**| Expo Go                                           |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MayconProg/ryde.git
cd ryde
```

### 2. Install Dependencies

```bash
# At the root of the monorepo
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file at the root with the following keys:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
DATABASE_URL=your_neon_postgres_url
EXPO_PUBLIC_SERVER_URL=https://ryde.com/
EXPO_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_key
EXPO_PUBLIC_GOOGLE_API_KEY=your_google_api_key
STRIPE_SECRET_KEY=your_stripe_secret
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable
```

### 4. Start the Project

```bash
# From the root
npm expo start
# or
yarn expo start
```

---

## 💳 Stripe Test Cards

Use the following test card to simulate payments:

```
Card Number: 4242 4242 4242 4242  
Expiry: 02/42  
CVC: 424
```

More options: [Stripe – Test Cards](https://stripe.com/docs/testing#international-cards)

---

## 🔐 Authentication Flow

- Uses **Clerk** for Google or Email/Password login.
- A verification code is sent for email signups.
- After login, users are redirected to the home screen.

---

## 🙌 Contributing

Contributions are welcome! Whether it's a bug report, feature suggestion, or pull request, feel free to participate. You can open an [issue](https://github.com/MayconProg/ryde/issues) or submit a PR.

### To contribute:

```bash
# Fork the repository
# Create a new branch
git checkout -b feature/your-feature

# Make changes, commit, and push
git commit -m "feat: added new feature"
git push origin feature/your-feature

# Open a pull request on GitHub
```

---

Made with 💙 by [MayconProg](https://github.com/MayconProg)
