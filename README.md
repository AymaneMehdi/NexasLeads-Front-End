# NexasLeads Front-End

This is the Front-End application for **NexasLeads**, a comprehensive platform for business development, CRM integrations, training, certifications, and lead management.  
It is built with **Next.js** and uses **TailwindCSS**, **Next.js Internationalization (i18n)**, and several UI libraries to deliver a modern and responsive user interface.

---

## Features

- Responsive UI built with **Next.js** + **TailwindCSS**
- Multi-language support (English & French) with **i18n middleware**
- Component-based architecture (Hero, Navbar, Footer, About, Partners, etc.)
- Comprehensive pages for services, blog, training, and CRM integrations
- Contact and inquiry forms with email integration
- Smooth section navigation and page transitions
- Blog functionality with dynamic routing
- Prospect calculator and business metrics tracking

---

## Project Structure

```
NexasLeads-Front-End/
├── src/
│   ├── app/
│   │   ├── robots.txt
│   │   └── [locale]/
│   │       ├── layout.js
│   │       ├── page.js
│   │       ├── AboutUs/
│   │       │   └── page.js
│   │       ├── Blog/
│   │       │   ├── page.js
│   │       │   └── [id]/
│   │       │       └── page.js
│   │       ├── ContactUs/
│   │       │   └── page.js
│   │       ├── CRM-Integrations/
│   │       │   └── page.js
│   │       ├── business-development/
│   │       │   └── page.js
│   │       └── training-and-certifications/
│   │           └── page.js
│   │
│   ├── components/
│   │   ├── AboutUs.js
│   │   ├── AboutUsPage.js
│   │   ├── BlogPage.js
│   │   ├── BusinessDevelopmentPage.js
│   │   ├── ContactUsPage.js
│   │   ├── CRMIntegrationsPage.js
│   │   ├── FAQ.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── OurServises.js
│   │   ├── Partners.js
│   │   ├── Partners1.js
│   │   ├── Partners2.js
│   │   ├── ProspectCalculator.js
│   │   ├── Reviews.js
│   │   ├── SectionComponent.js
│   │   ├── StateCards.js
│   │   ├── Subscribe.js
│   │   ├── TrainingAndCertificationsPage.js
│   │   ├── WhyUs.js
│   │   └── cta.js
│   │
│   ├── assets/
│   │  
│   ├── layouts/
│   │   └── globals.css
│   │
│   ├── i18n.js
│   └── middleware.js
│
├── public/
│
├── messages/
│   ├── eng.json
│   └── fr.json
│
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.js
├── LICENSE
└── SECURITY.md
```

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AymaneMehdi/NexasLeads-Front-End.git
   cd NexasLeads-Front-End
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

---

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# HubSpot Configuration
NEXT_PUBLIC_HUBSPOT_REGION=eu1
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id

# API Endpoints
NEXT_PUBLIC_BLOG_API_URL=https://your-api.com/api/blogs
NEXT_PUBLIC_SUBSCRIBE_API_URL=https://your-api.com/api/subscribe
```

### Variables Description

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_HUBSPOT_REGION` | HubSpot region for form embedding | `eu1` |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Your HubSpot Portal ID | `143456522` |
| `NEXT_PUBLIC_HUBSPOT_FORM_ID` | HubSpot Form ID for contact forms | `3ba1e919-9a55-4903-95a1-37569f6754d5` |
| `NEXT_PUBLIC_BLOG_API_URL` | Base URL for blog API endpoint | `https://api.example.com/blogs` |
| `NEXT_PUBLIC_SUBSCRIBE_API_URL` | Newsletter subscription API endpoint | `https://api.example.com/subscribe` |

**Note:** The `.env.local` file is in `.gitignore` and should never be committed to the repository.

---

## Running the Project

```bash
npm run dev
```

Runs the project on **http://localhost:3000**

---

## Tech Stack

| Tool / Library           | Description                                    |
|--------------------------|------------------------------------------------|
| **Next.js**              | React framework for building the app          |
| **React**                | Base library for UI development               |
| **TailwindCSS**          | Utility-first CSS framework                   |
| **Next.js i18n**         | Internationalization (English & French)       |

---

## Scripts

| Command           | Description                     |
|------------------|---------------------------------|
| `npm run dev`     | Run development server          |
| `npm run build`   | Build for production            |
| `npm start`       | Start production server         |
| `npm run lint`    | Run ESLint for code quality     |

---

## Internationalization (i18n)

This project supports multiple languages through a custom i18n middleware:

- **English** (`eng.json`)
- **French** (`fr.json`)

Language switching is handled automatically via URL locale prefix (e.g., `/en/about`, `/fr/about`).

---

## Deployment

The easiest way to deploy your app is using [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Security

Please review our [Security Policy](SECURITY.md) for information about reporting vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**
