import { useCallback, useState } from "react";
import { ZoomIn } from "lucide-react";
import Section from "./Section";
import Lightbox, { type LightboxImage } from "./Lightbox";
import { getAssetUrl } from "../utils/assets";

const biographyText = `
Mi chiamo Beatrice Ferrari, sono biologa nutrizionista iscritta all'Ordine dei Biologi della Lombardia sez. A (n. AA_101264). Sono specializzata in nutrizione sportiva, seguo atleti e amatori nel mondo dell'endurance e non solo!

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

const About = () => {
  const [activeCredential, setActiveCredential] = useState<LightboxImage | null>(null);
  const closeLightbox = useCallback(() => setActiveCredential(null), []);

  return (
    <Section id="about" title="Chi sono">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
        <div className="relative hidden md:block">
          <div className="absolute inset-0 -left-6 -top-6 rounded-3xl bg-brand-primary/10" />
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
            <img
              src={getAssetUrl("images/Beatrice-copertina.jpeg")}
              alt="Ritratto professionale di Beatrice Ferrari, biologa nutrizionista"
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

      <Lightbox image={activeCredential} onClose={closeLightbox} />
    </Section>
  );
};

export default About;
