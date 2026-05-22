# ✨ Event Spark — Igniting Moments, Creating Memories

Event Spark is a premium event management website built with React, TypeScript, and Tailwind CSS. It showcases a full-service event company offering everything from weddings and corporate events to drone coverage and AI-based photo sharing.

---

## ✨ Features

- **Hero Section** — Animated landing with full-bleed background image and gold gradient branding
- **Services Showcase** — 14 services displayed in a dual-column animated layout
- **Gallery** — Visual portfolio of past events (weddings, lighting, stage setups, and more)
- **Booking Form** — Validated multi-field form with event type selection and date picker
- **Testimonials** — Client reviews with star ratings
- **Contact Section** — Reach-out form with location details
- **Smooth Scroll Navigation** — Anchor-based navigation across all sections
- **Fully Responsive** — Optimised for mobile, tablet, and desktop

---

## 🎪 Services Offered

| Service | Service |
|---------|---------|
| Mandapam Decoration | Photography & Videography |
| Surprise Event Planning | Corporate Events |
| Bridal Makeup | Video Switching up to 4K |
| Catering Services (Veg & Non-Veg) | AI-Based Event Photo Sharing |
| Theme-Based Weddings | Live Streaming up to 2K |
| Audio & DJ Lighting Setup | Drone Coverage (DJI Air 3) |
| Brand Promotions | LED Wall & TV |

---

## 🗂️ Project Structure

```
Event-Spark/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation bar
│   │   ├── HeroSection.tsx         # Landing hero with CTA
│   │   ├── ServicesSection.tsx     # 14-service grid layout
│   │   ├── GallerySection.tsx      # Event photo gallery
│   │   ├── BookingSection.tsx      # Event booking form
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── ContactSection.tsx      # Contact information
│   │   ├── Footer.tsx              # Site footer
│   │   └── ui/                     # shadcn/ui component library
│   ├── pages/
│   │   ├── Index.tsx               # Main page
│   │   └── NotFound.tsx            # 404 page
│   ├── hooks/
│   │   ├── use-toast.ts            # Toast notification hook
│   │   └── use-mobile.tsx          # Responsive breakpoint hook
│   ├── assets/                     # Event photos and hero images
│   └── lib/utils.ts                # Utility functions
├── public/
│   ├── logo.png
│   └── favicon.ico
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm / bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ackshaya-R/Event-Spark.git
   cd Event-Spark
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. Open your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Pre-built UI components |
| [Radix UI](https://www.radix-ui.com/) | Accessible primitives |
| [Framer Motion](https://www.framer.com/motion/) | Scroll & entry animations |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hook Form](https://react-hook-form.com/) | Form state management |
| [Vitest](https://vitest.dev/) | Unit testing |

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 📋 Booking Form Fields

The booking form validates the following fields:

- **Name** — Required
- **Phone** — Required, must be 10 digits
- **Email** — Required, valid email format
- **Event Type** — Wedding / Corporate Event / Birthday Party / Brand Promotion / Surprise Event / Other
- **Event Date** — Required date picker
- **Message** — Optional additional details

---

---

> Made with ✨ by [Ackshaya R](https://github.com/Ackshaya-R)
