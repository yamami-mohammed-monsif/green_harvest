# Green Harvest

A modern, responsive landing page for a fresh produce delivery service built with Next.js, TypeScript, and Tailwind CSS. This project features a professional website with smooth animations, an interactive order form, and optimized performance for all devices.

![Green Harvest Hero Section](public/images/preview.png)

## 📋 Table of Content

- [Project Overview](#project-overview)
- [Demo](#demo)
- [The Challenge](#the-challenge)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Lighthouse Report](#lighthouse-report)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project involved designing and developing a high-converting landing page for **Green Harvest**, focusing specifically on driving fresh produce orders and subscriptions. The primary goal was to create a compelling digital presence that clearly communicates value, builds trust, and minimizes friction for potential customers, ultimately optimizing for conversion rates.

## Demo

Live demo: [Green Harvest](https://green-harvest-tau.vercel.app/)

## The Challenge

To design a landing page that could effectively:

- Clearly articulate Green Harvest's unique value proposition, particularly its fresh, organic produce delivery, convenience, and quality.
- Engage visitors immediately and guide them seamlessly towards the primary call to action (place an order or subscribe).
- Address common user questions and overcome potential objections proactively to build trust and reduce hesitation.
- Provide a flawless and intuitive user experience across all device types: desktop, tablet, and mobile.

## The Solution

A meticulously designed, conversion-rate-optimized landing page featuring a clear user journey, compelling content, and responsive design, built with a modern tech stack.

### **1. Compelling Hero Section**

The hero section was designed to make an immediate impact and state the core offer "above the fold."

- **Clear Value Proposition:** "FRESH ORGANIC PRODUCE DELIVERED TO YOUR DOOR" is instantly communicated, highlighting the key offer and benefits.
- **Strong Call to Action (CTA):** A prominent "Order Now" or "Subscribe" button encourages immediate engagement.
- **Instant Social Proof:** "Trusted by hundreds of local families" provides immediate credibility.
- **Aspirational Imagery:** A high-quality produce background sets an inviting tone.
- **Responsive Adaptation:** The navigation uses a hamburger menu for tablet and mobile for a clean, focused hero experience.

### **2. Frictionless "How It Works" Section**

This section breaks down the order/subscription process into simple, manageable steps to reduce perceived effort and anxiety.

- **Simplified Process:** "Get Fresh Produce in 3 Easy Steps" makes the journey appear straightforward and achievable.
- **Clear Steps:** Visually intuitive icons and concise descriptions for "Choose Your Box," "Place Your Order," and "Enjoy Delivery" guide the user.
- **Strategic CTA:** Reinforces the primary action below the steps.

### **3. Benefit-Driven "Why Choose Green Harvest" Section**

Focuses on the emotional and practical benefits of choosing Green Harvest, addressing user desires rather than just features.

- **Focus on User Needs:** Highlights key benefits like "Eat Healthier Every Week," "Support Local Farmers," "Flexible Delivery Options," and "Sustainably Sourced."
- **Visual Cues:** Uses relevant icons to quickly convey the essence of each benefit.
- **Responsive Adaptation:** Adapts to a 2x2 grid for tablet and a single-column stack for mobile for optimal readability.

### **4. Comprehensive "What’s in the Box" Section**

This section details the practical features that support the benefits, ensuring users understand what they're getting.

- **Feature Showcase:** Details aspects like "Seasonal organic vegetables," "Hand-picked fruits," and "Customizable options."
- **Transparency:** Clearly lists what customers can expect, building trust.
- **Responsive Adaptation:** Adapts to a 2x3 grid for tablet and a single-column stack for mobile for clear presentation.

### **5. Powerful Social Proof through Testimonials**

Leverages real customer experiences to build strong credibility and overcome skepticism.

- **Authenticity:** Features "Real People. Real Freshness." with names, photos, relatable roles (e.g., "Busy Parent," "Health Enthusiast"), and specific quotes.
- **Trust Signals:** Includes 5-star ratings for immediate credibility.
- **Responsive Adaptation:** Testimonials stack vertically on tablet and mobile for focused reading.

### **6. Friction-Reducing FAQ Section**

Proactively addresses common questions to eliminate hesitation and reduce the need for users to seek external information.

- **Proactive Answers:** Tackles common inquiries such as "Can I customize my box?" and "How does delivery work?".
- **User-Friendly Design:** Utilizes an accordion layout for a clean, accessible, and expandable experience across all devices.

### **7. Strong Final Call to Action**

The concluding section provides a clear, last opportunity for conversion.

- **Clear Conversion Point:** "Ready to Eat Fresh?" serves as a direct and inviting prompt to place an order or subscribe.
- **Reinforced Benefits:** Reassures users with "No commitment, skip or cancel anytime."
- **Simple Input:** A single email field or quick order form offers a low-friction sign-up process.
- **Aspirational Imagery:** An engaging background photo maintains motivation.

### **8. Trust-Building Footer**

The footer provides essential contact and legal information, further enhancing credibility.

- **Transparency:** Offers clear contact information (address, phone, email) for a local business.
- **Professionalism:** Includes copyright information.
- **Responsive Adaptation:** Adapts to stacked content for tablet and mobile for easy readability.

## Responsive Design

The landing page is meticulously designed to be fully responsive, ensuring an optimal and consistent user experience across all devices and screen sizes:

- **Desktop:** Features multi-column layouts and expansive sections for a rich content presentation.
- **Tablet:** Layouts intelligently adapt with optimized grids and stacking to maintain clarity and usability on mid-size screens.
- **Mobile:** Prioritizes content with single-column stacking, larger touch targets, and optimized readability for smaller screens, ensuring a seamless experience for the majority of users.

---

## Features

- **Modern Design** – Clean, professional UI for a produce delivery service
- **Fully Responsive** – Optimized for mobile, tablet, and desktop
- **Performance Focused** – Fast loading with lazy-loaded components and optimized images
- **Order Form** – Interactive form for customers to place orders
- **Testimonials** – Real feedback from customers
- **Animations** – Smooth motion effects with Framer Motion
- **SEO Friendly** – Optimized metadata and semantic HTML
- **Accessibility** – WCAG-compliant design elements
- **Product Showcase** – Beautiful display of organic produce

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: Custom components for order submissions
- **TypeScript**: Type-safe code
- **Dynamic Imports**: Optimized loading with lazy components

## Installation

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yamami-mohammed-monsif/green_harvest.git
   cd green_harvest
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file for environment variables:

   ```bash
   cp .env.example .env.local
   # Add your environment variables to .env.local
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## Lighthouse Report

This project is optimized for performance, accessibility, SEO, and best practices.

![Lighthouse Report](public/images/lighthouse-report.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE.txt) file for details.
