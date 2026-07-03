import { useCallback, useState } from "react";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import Section from "./Section";
import Lightbox, { type LightboxImage } from "./Lightbox";
import { getAssetUrl } from "../utils/assets";

const biographyText = `
Mi chiamo Beatrice Ferrari, sono biologa nutrizionista iscritta all'Ordine dei Biologi della Lombardia sez. A (n. AA_101264). Sono specializzata in nutrizione sportiva, seguo atleti e amatori nel mondo dell'endurance e non solo!

Sono laureata in Biotecnologie farmaceutiche della salute, con approfondimenti sulla nutrizione umana, oncologica e sulla nutraceutica, e ho conseguito un master in Nutrizione sportiva. Ho lavorato nella ricerca biomedica, e da lì nasce il mio approccio evidence-based.

La parte di me che non trovi sulla carta? Mi alleno in palestra, tengo corsi Hyrox e vivo in prima persona la fatica, la soddisfazione e le sfide di chi fa sport con costanza. Questo mi ha insegnato qualcosa che i libri da soli non possono darti — capire davvero cosa significa ottimizzare il corpo dall'interno.

Insegno anche biologia al liceo, e questa doppia vita mi ha reso una comunicatrice migliore: so spiegare concetti complessi in modo chiaro, senza perdere il rigore scientifico.

Il mio approccio? Basato sull'evidenza scientifica, cucito su di te. Perché ogni persona — e soprattutto ogni atleta — è diversa.
`.trim();

const credentials: LightboxImage[] = [
  {
    src: "images/ordine-biologi-della-lombardia.png",
    alt: "Iscritta all'Ordine dei Biologi della Lombardia, n. AA_101264"
  },
  {
    src: "images/project-invictus.png",
    alt: "Certificazione V Nutrition - Project Invictus"
  }
];

const ARTICLES_AUTHOR_URL = "https://atletaibrido.it/atleta/beatrice-ferrari/";

const articles: { title: string; url: string }[] = [
  {
    title: "Pasto libero senza sensi di colpa: come gestirlo",
    url: "https://atletaibrido.it/pasto-libero-gestirlo-senza-sensi-di-colpa/"
  },
  {
    title: "Disturbi gastrointestinali negli sportivi: 4 consigli per prevenirli",
    url: "https://atletaibrido.it/disturbi-gastrointestinali-4-consigli-per-evitare/"
  },
  {
    title: "La periodizzazione nutrizionale: cos'è e come applicarla",
    url: "https://atletaibrido.it/periodizzazione-nutrizionale-alimentazione/"
  },
  {
    title: "LEA e deficit energetico: sintomi e rischi per gli atleti",
    url: "https://atletaibrido.it/lea-e-deficit-energetico-rischi-e-sintomi/"
  }
];

const About = () => {
  const [activeCredential, setActiveCredential] = useState<LightboxImage | null>(null);
  const closeLightbox = useCallback(() => setActiveCredential(null), []);

  return (
    <Section id="about" title="Chi sono">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-brand-primary/10 md:-left-6 md:-top-6" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
            <img
              src={getAssetUrl("images/Beatrice-foto-sportiva.jpg")}
              alt="Beatrice Ferrari durante un allenamento in palestra, affondo con sandbag"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 whitespace-pre-line">
            {biographyText}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-brand-primary/10 pt-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
          Formazione e iscrizioni
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {credentials.map((credential) => (
            <button
              key={credential.src}
              type="button"
              onClick={() => setActiveCredential(credential)}
              aria-label={`Ingrandisci: ${credential.alt}`}
              className="group relative rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              <img
                src={getAssetUrl(credential.src)}
                alt={credential.alt}
                className="h-20 w-auto object-contain opacity-90 transition group-hover:scale-105 group-hover:opacity-100 md:h-24"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-slate-900/0 opacity-0 transition group-hover:bg-slate-900/5 group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-brand-primary" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-brand-primary/10 pt-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
          I miei articoli
        </p>
        <ul className="mx-auto mt-8 max-w-2xl space-y-2">
          {articles.map((article) => (
            <li key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl px-3 py-2 text-slate-600 transition hover:bg-brand-primary/5 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                <ArrowUpRight
                  className="mt-1 h-4 w-4 flex-none text-brand-primary/60 transition group-hover:text-brand-primary"
                  aria-hidden="true"
                />
                <span className="text-base font-medium leading-snug">{article.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <a
            href={ARTICLES_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            Leggi tutti gli articoli su Atleta Ibrido
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <Lightbox image={activeCredential} onClose={closeLightbox} />
    </Section>
  );
};

export default About;
