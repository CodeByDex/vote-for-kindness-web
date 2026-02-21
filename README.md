# vote-for-kindness-web

Campaign site scaffold for Chris Caldwell — "Vote for kindness, community, the neighborly candidate." Built with Next.js + TypeScript + Tailwind CSS. The site is configured to produce a `docs/` folder for easy GitHub Pages hosting and includes a `CNAME` for `voteforkindness.com`.

Quick start
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production (outputs to `docs/`):

```bash
npm run build
```

4. Publish on GitHub Pages
- In your repository settings -> Pages, set Source to `main` branch and folder `docs/`.
- A `CNAME` file is included via `public/CNAME` with `voteforkindness.com` for a custom domain.

Colors
- Primary (brand): `#3c5704`
- Accent / light: `#edffcb`

Notes
- This project uses Next.js static export (`next export`) to generate a static site that can be hosted on GitHub Pages.
- Tailwind configuration is in `tailwind.config.cjs` and PostCSS in `postcss.config.cjs`.

If you'd like donation/volunteer forms, mailing list integrations, or social links added, tell me which providers you prefer and I'll scaffold them.
# vote-for-kindness-web