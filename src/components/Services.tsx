import { Activity, ClipboardList, GraduationCap, TrendingUp } from "lucide-react";
import Section from "./Section";
import type { ServiceItem } from "../types";
import { getAssetUrl } from "../utils/assets";

const services: ServiceItem[] = [
  {
    title: "Nutrizione sportiva",
    tagline: "Per chi si allena e vuole di più",
    description:
      "Costruiamo insieme un piano alimentare calibrato sui tuoi allenamenti, sul tuo sport e sui tuoi obiettivi di performance o recupero. Che tu faccia Hyrox, running, crossfit o pesi.",
    icon: Activity,
    logo: {
      src: "images/project-invictus.png",
      alt: "Certificazione V Nutrition - Project Invictus"
    }
  },
  {
    title: "Percorso nutrizionale personalizzato",
    tagline: "Il piano che funziona per te, non per tutti",
    description:
      "Niente schemi standard. Analizzo il tuo stile di vita, i tuoi obiettivi e il tuo fabbisogno reale per costruire un percorso che regge nel tempo.",
    icon: ClipboardList
  },
  {
    title: "Educazione alimentare",
    tagline: "Impara a mangiare, non solo a seguire una dieta",
    description:
      "Ti do gli strumenti per fare scelte consapevoli ogni giorno. L'obiettivo non è il piano perfetto, è che tu non ne abbia più bisogno.",
    icon: GraduationCap
  },
  {
    title: "Miglioramento composizione corporea",
    tagline: "Meno grasso, più muscolo — con metodo",
    description:
      "Lavoriamo sulla composizione corporea in modo sostenibile, senza sacrificare salute o performance.",
    icon: TrendingUp
  }
];

const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Servizi"
      title="Cosa posso fare per te"
      description="Ogni percorso parte dai tuoi obiettivi reali e dal tuo stile di vita. Niente schemi standard: solo strategie costruite su misura e sostenibili nel tempo."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-slate-900">
                {service.title}
              </h3>
              {service.tagline && (
                <p className="text-sm font-semibold text-brand-accent">
                  {service.tagline}
                </p>
              )}
              {service.description && (
                <p className="text-base text-slate-600">
                  {service.description}
                </p>
              )}
            </div>
            {service.logo && (
              <div className="mt-6 flex items-center gap-3 border-t border-brand-primary/10 pt-5">
                <img
                  src={getAssetUrl(service.logo.src)}
                  alt={service.logo.alt}
                  className="h-14 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Nutrizionista certificata
                  <br />
                  V Nutrition · Project Invictus
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
