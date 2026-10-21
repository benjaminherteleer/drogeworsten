# Drogeworsten.be

Nieuwe site voor drogeworsten.be (klant). Los Astro-project, volledig statisch.

- `pnpm install`, dan `pnpm dev` / `pnpm build` (output in `dist/`).
- Hosting: Vercel (importeer de repo, Astro wordt herkend). `vercel.json` zorgt voor nette URL's zonder `.html` en stuurt de oude Shopify-URL's (`/pages/...`) door. `public/_redirects` doet hetzelfde op Cloudflare Pages.

## Opbouw

- `src/data/site.ts`: contactgegevens, prijs en de vijf worsten (tekst + foto).
- `src/styles/global.css`: tokens (rood / room / inkt), Rubik + DM Sans, `.ruit` (vichy-patroon), `.btn`, `.stempel`, `.ticker`.
- De ruit komt bewust maar op een paar plekken terug: hero-doek, toonbankfoto, contactkaart en de band boven de footer.
- `src/assets/logo/mannetje.png`: het mannetje, uitgeknipt (transparant).
- `src/assets/worsten/`: productfoto's van de huidige site.
- Het contactformulier opent een ingevulde mail naar info@drogeworsten.be (geen backend nodig).
