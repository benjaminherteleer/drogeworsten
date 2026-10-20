# Drogeworsten.be

Nieuwe site voor drogeworsten.be (klant). Los Astro-project, volledig statisch.

- `pnpm install`, dan `pnpm dev` / `pnpm build` (output in `dist/`).
- Hosting: Cloudflare Pages, build command `pnpm build`, output `dist`, root directory `drogeworsten`.
- `public/_redirects` stuurt de oude Shopify-URL's (`/pages/...`) door.

## Opbouw

- `src/data/site.ts`: contactgegevens, prijs en de vijf worsten (tekst + foto).
- `src/styles/global.css`: tokens (rood / room / inkt), Rubik + DM Sans, `.ruit` (vichy-patroon), `.btn`, `.stempel`, `.ticker`.
- De ruit komt bewust maar op een paar plekken terug: hero-doek, toonbankfoto, contactkaart en de band boven de footer.
- `src/assets/logo/mannetje.png`: het mannetje, uitgeknipt (transparant).
- `src/assets/worsten/`: productfoto's van de huidige site.
- Het contactformulier opent een ingevulde mail naar info@drogeworsten.be (geen backend nodig).
