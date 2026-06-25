# CLAUDE.md

Questo file fornisce indicazioni a Claude Code (claude.ai/code) quando lavora sul codice di questo repository.

## Cos'è

Sito vetrina single-page per **Beatrice Ferrari, biologa nutrizionista** (Varese). Stack: **Vite + React 18 + TypeScript + Tailwind CSS**. Nessun router — l'intero sito è un'unica pagina scrollabile composta da sezioni impilate. Tutti i testi dell'interfaccia sono in **italiano**.

## Comandi

```bash
npm run dev      # Server di sviluppo Vite (http://localhost:5173)
npm run build    # tsc (type-check, senza emit) POI vite build → dist/
npm run preview  # Serve la build di produzione in locale
```

Non sono configurati **né test runner né linter**. L'unico controllo qualità è `npm run build`: esegue prima `tsc`, quindi **un errore di tipo fa fallire la build — e di conseguenza il deploy.** Esegui sempre `npm run build` prima di pushare.

## Deploy e la trappola del base-path (leggi prima di toccare asset/link)

Il sito si pubblica automaticamente su **GitHub Pages** a ogni push su `main` tramite [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (builda e pubblica `dist/` sul branch `gh-pages`). Online su **https://matteocloud.github.io/fe-nutr/**.

Poiché Pages lo serve dalla sottocartella `/fe-nutr/`, il workflow builda con `VITE_GHPAGES_BASE=/fe-nutr/`, valore che [vite.config.ts](vite.config.ts) legge per impostare il `base` di Vite. **In locale `base` è `/`, in produzione è `/fe-nutr/`.** Due conseguenze per qualsiasi codice tu scriva:

- **Non scrivere mai a mano i path degli asset pubblici** tipo `/images/foo.png` — si rompono sulla sottocartella. Avvolgili sempre con `getAssetUrl()` da [src/utils/assets.ts](src/utils/assets.ts), che antepone `import.meta.env.BASE_URL`. Gli asset pubblici stanno in `public/images/`.
- **La navigazione interna usa anchor, non URL assoluti.** I link scrollano agli id delle sezioni (`#hero`, `#about`, `#services`, `#method`, `#contact`).

Quando si collegherà un dominio custom alla root: rimuovere `VITE_GHPAGES_BASE` dal workflow e ripristinare il CNAME (vedi il commento in deploy.yml). Il repo è **pubblico** (richiesto dal piano gratuito di GitHub Pages).

## Architettura

**Composizione** ([src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx) → [src/pages/Home.tsx](src/pages/Home.tsx)): `main` chiama `initializeBrandPalette()` e poi renderizza `App`. `App` è `Header` + `Home` + `Footer` + `StickyActions`. `Home` impila semplicemente i componenti-sezione in ordine: Hero, About, Services, Method, Contact. Per aggiungere/riordinare una sezione, modifica `Home.tsx` e aggiungi l'id anchor corrispondente + la voce di navigazione.

**La navigazione è manuale, non c'è un router.** `NAV_LINKS` in [src/components/Header.tsx](src/components/Header.tsx) mappa le etichette agli anchor `#`. Lo scroll è gestito a mano (`handleNavClick`, e `handleBookVisit` in [src/utils/booking.ts](src/utils/booking.ts)) per poter compensare l'**altezza dell'header sticky** — non sostituirli con un semplice `href="#..."`, altrimenti la sezione finisce sotto l'header.

**Theming tramite CSS custom properties.** I colori del brand sono variabili CSS (`--brand-primary`, `--brand-accent`, `--brand-muted`, `--surface-color`, `--ink-color`, `--outline-color`) dichiarate in [src/index.css](src/index.css) nel `:root`. [tailwind.config.js](tailwind.config.js) mappa i token Tailwind (`brand.primary`, `surface`, `ink`, …) su quelle variabili, così nei componenti scrivi `text-brand-primary`, `bg-surface`, ecc. Per cambiare la palette, modifica le variabili CSS **e** la `fallbackPalette` rispecchiata in [src/lib/palette.ts](src/lib/palette.ts).
- Nota: [src/lib/extractPalette.ts](src/lib/extractPalette.ts) è un estrattore di palette dinamico **dormiente** (ricava i colori dalle immagini del brand). **Non è collegato** — `initializeBrandPalette()` attualmente applica solo la `fallbackPalette` statica. I colori sono di fatto statici.

**I contenuti sono centralizzati.** I dati di contatto (telefono, email, numero WhatsApp, sedi dello studio + URL Maps, orari) e il messaggio WhatsApp precompilato stanno in [src/constants.ts](src/constants.ts); i tipi condivisi in [src/types.ts](src/types.ts). Aggiorna le info aziendali lì, non nel JSX dei componenti.

**Flusso prenotazione / CTA** ([src/utils/booking.ts](src/utils/booking.ts)): `buildWhatsAppLink` costruisce un deep link `wa.me` a partire da numero + messaggio; `handleBookVisit` fa uno smooth-scroll fino a `#contact`. `StickyActions` è la barra flottante chiama/WhatsApp sempre visibile; il pulsante "Prenota" nell'header attiva lo scroll.

**Helper condivisi:** [src/components/Section.tsx](src/components/Section.tsx) è il guscio di sezione riutilizzabile (eyebrow + titolo + descrizione + container a larghezza massima) — usalo per le nuove sezioni di contenuto. [src/utils/cn.ts](src/utils/cn.ts) è l'helper per unire le className. Le icone arrivano da `lucide-react`. I componenti usano **default export** e import relativi; TypeScript è in modalità **strict**.

## Lavori in sospeso (TODO)

Cose ancora da fare sul sito, in attesa di dati dalla cliente o di una decisione. Aggiorna questa lista quando un punto viene chiuso.

- **Dominio reale** — ovunque c'è il placeholder `DOMINIO-DA-DEFINIRE.it`. Quando si avrà il dominio: sostituirlo in [index.html](index.html) (`canonical`, `og:url`, `og:image`, JSON-LD schema.org), creare il `CNAME` e **rimuovere `VITE_GHPAGES_BASE` dal workflow** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) per riportare il `base` alla root.
- **P.IVA** — in [src/components/Footer.tsx](src/components/Footer.tsx) è ancora "da aggiungere". Per un professionista con partita IVA l'indicazione sul sito è **obbligatoria**: serve il numero reale.
- **Headline hero** — "Mangi bene. Ti alleni meglio. Vivi al massimo." in [src/components/Hero.tsx](src/components/Hero.tsx) era marcata "DA CAPIRE" dalla cliente → da confermare/riscrivere.
- **Privacy policy (GDPR)** — i trigger tecnici sono stati neutralizzati: i **Google Fonts sono self-hostati** (`@fontsource` in [src/main.tsx](src/main.tsx)) e la **mappa Google non è più un iframe** ma solo un link "Apri in Google Maps" ([src/components/Contact.tsx](src/components/Contact.tsx)). Il sito non ha form né analytics → **nessun cookie di profilazione, quindi niente cookie banner**. Resta da: pubblicare una **privacy policy** (per un professionista è comunque consigliata/dovuta) e **collegarne il link nel footer** (oggi assente). Conferma con un legale l'esatto perimetro dell'obbligo.
- **SEO minore** — il campo `sameAs` nel JSON-LD di [index.html](index.html) è vuoto (`[""]`): aggiungere i profili social di Beatrice (Instagram/LinkedIn) se disponibili.
