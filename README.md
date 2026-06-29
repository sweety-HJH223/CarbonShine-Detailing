# 🚗 CarbonShine Detailing

A premium dark mode lead generation website for a car detailing studio, built for global clients.

## 🔗 Live Demo
[carbonshine-detailing.vercel.app](https://carbonshine-detailing.vercel.app)


## ✨ Features
- Premium dark mode (#0f172a background, electric blue accents)
- Sticky navbar with smooth scroll navigation
- Full-screen hero with real car photography
- 3-column value grid with service highlights
- Before/After real image comparison section
- 3-tier pricing cards with hover effects
- Package pre-selection → auto-fills contact form
- Contact form with full JS validation
- Formspree backend — real email delivery on submit
- Success modal with close button (no page reload)
- Mobile responsive with hamburger menu

## 📧 Lead Capture
When a visitor submits the form:
1. Data sent to Formspree API
2. Owner receives email with name, phone, email, vehicle type
3. Success modal appears confirming submission

## 🛠️ Tech Stack
- Next.js 15
- Tailwind CSS
- TypeScript
- Formspree (form backend)
- Vercel (deployment)

## 🚀 Getting Started
```bash
git clone https://github.com/sweety-HJH223/CarbonShine-Detailing.git
cd CarbonShine-Detailing
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)
## 📁 Project Structure

```
app/
├── page.tsx          # Main page + state management
└── globals.css       # Global styles

components/
├── navbar.tsx        # Sticky nav + hamburger menu
├── hero.tsx          # Hero with car image
├── value-grid.tsx    # 3 feature cards
├── before-after.tsx  # Image comparison
├── pricing-cards.tsx # 3-tier pricing + hover
├── booking-form.tsx  # Form + Formspree integration
├── success-modal.tsx # Thank you modal
└── footer.tsx        # Footer with links
```

## 👩‍💻 Built By
**SweetyCodes** — [sweetycodes-jh.vercel.app](https://sweetycodes-jh.vercel.app/)

