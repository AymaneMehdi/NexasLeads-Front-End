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
│   │   ├── [locale]/
│   │   │   ├── layout.js                          # Root layout with locale
│   │   │   ├── page.js                            # Home page
│   │   │   ├── AboutUs/
│   │   │   │   └── page.js
│   │   │   ├── Blog/
│   │   │   │   ├── page.js                        # Blog listing
│   │   │   │   └── [id]/
│   │   │   │       └── page.js                    # Blog detail page
│   │   │   ├── ContactUs/
│   │   │   │   └── page.js
│   │   │   ├── CRM-Integrations/
│   │   │   │   └── page.js
│   │   │   ├── business-development/
│   │   │   │   └── page.js
│   │   │   └── training-and-certifications/
│   │   │       └── page.js
│   │   ├── robots.txt
│   │
│   ├── components/                                # Reusable UI components
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
│   │   ├── OurServices.js
│   │   ├── Partners.js
│   │   ├── ProspectCalculator.js
│   │   ├── Reviews.js
│   │   ├── Section.js
│   │   ├── StateCards.js
│   │   ├── Subscribe.js
│   │   ├── TrainingAndCertificationsPage.js
│   │   └── WhyUs.js
│   │
│   ├── layouts/
│   │   └── globals.css                           # Global Tailwind styles
│   │
│   ├── assets/                                    # Images and static assets
│   ├── i18n.js                                    # Internationalization config
│   └── middleware.js                              # i18n routing middleware
│
├── public/                                        # Static files
│   
│
├── messages/                                      # Translations
│   ├── eng.json
│   └── fr.json
│
├── package.json                                   # Project dependencies & scripts
├── jsconfig.json                                  # Path aliases / IntelliSense
├── next.config.mjs                               # Next.js configuration
├── tailwind.config.js                            # Tailwind CSS configuration
├── postcss.config.mjs                            # PostCSS configuration
└── .gitignore
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
| **PostCSS**              | CSS transformations and processing            |

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

## License

This project is licensed under the [MIT License](LICENSE).

---

Copyright © NexasLeads
