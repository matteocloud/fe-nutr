import { LineChart, Microscope, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";

type MethodPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const points: MethodPoint[] = [
  {
    icon: Microscope,
    title: "Scientifica",
    description:
      "Ogni consiglio è basato sulle evidenze più aggiornate. Ho una formazione in biotecnologie e ho fatto ricerca — so distinguere il marketing dalla scienza."
  },
  {
    icon: HeartHandshake,
    title: "Empatica",
    description:
      "Ascolto prima di parlare. Non esiste un piano giusto che non tenga conto di chi sei, come vivi e cosa ami mangiare."
  },
  {
    icon: LineChart,
    title: "Concreta",
    description:
      "Follow-up regolari, aggiustamenti in corsa, obiettivi misurabili. Non sparisco dopo la prima consulenza."
  }
];

const Method = () => {
  return (
    <Section id="method" eyebrow="Il mio metodo" title="Come lavoro">
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="flex h-full flex-col gap-4 rounded-3xl border border-brand-primary/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="inline-flex w-fit rounded-2xl bg-brand-accent/15 p-3 text-brand-accent">
              <point.icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-slate-900">
              {point.title}
            </h3>
            <p className="text-base text-slate-600">{point.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Method;
