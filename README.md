<div align="center">
   <img alt="Portfolio Cover" src="/.github/assets/portfolio-example.png" />
</div>

# Portfolio Template

<div align="center">
   <a href="https://nextjs.org" aria-label="Framework">
      <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&labelColor=000" />
   </a>
   <img alt="Top Language" src="https://img.shields.io/github/languages/top/bribkn/portfolio?style=for-the-badge&labelColor=000" />
   <a href="https://github.com/bribkn/portfolio/blob/main/LICENSE" aria-label="License">
      <img alt="License" src="https://img.shields.io/github/license/bribkn/portfolio?style=for-the-badge&labelColor=000" />
   </a>
</div>

<div align="center">
   <i>
      Modern portfolio template built with Next.js, Framer Motion, and shadcn/ui.<br />
      This version is organized for easy customization and scalability.
   </i>
</div>

---

## 📚 Contents

1. [Overview](#overview)
2. [Stack](#stack)
3. [Highlights](#highlights)
4. [Setup](#setup)
5. [Acknowledgements](#acknowledgements)

## <a name="overview">Overview</a>

This repository provides a customizable portfolio starter using Next.js, Framer Motion, Tailwind CSS, and shadcn/ui components.

## <a name="stack">Stack</a>

- Next.js 15 (App Router)
- shadcn/ui
- Framer Motion
- Tailwind CSS

## <a name="highlights">Highlights</a>

- App Router with Next.js 15
- Responsive and accessible UI
- Light/Dark mode toggle
- SEO meta tags
- Pre-configured Husky, Lint Staged, and Prettier
- Animated transitions with Framer Motion

## <a name="setup">Setup</a>

### Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v20 recommended)
- [npm](https://pnpm.io/) (install via Corepack or `npm install -g pnpm`)

### Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### Configuration

1. To enable the contact form or third-party integrations, add your credentials to a `.env` file at the project root.
2. Edit the content and sections in `components/custom/`:
   - about-section.tsx
   - about-me-section.tsx
   - skills-section.tsx
   - projects-section.tsx
   - contact-section.tsx
   - footer.tsx
   - site-header.tsx
3. Adjust global settings in `app/layout.tsx` and `app/page.tsx` as needed.

### Running Locally

```bash
npm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## <a name="acknowledgements">Acknowledgements</a>

This project leverages and is inspired by many open-source resources, including:

- [MuhammadJaafer](https://github.com/MuhammadJaafer/portfolio-v2)
- [shadcn/ui](https://ui.shadcn.com/)
- [techwithanirudh](https://github.com/techwithanirudh/shadcn-portfolio)

And design inspiration from various portfolios and UI explorations across the web.
