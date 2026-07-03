import { ArrowRight } from "lucide-react";
import { handleBookVisit } from "../utils/booking";
import { getAssetUrl } from "../utils/assets";

const Hero = () => {
  const handleScrollToServices = () => {
    const services = document.getElementById("services");
    if (services) {
      services.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-surface"
      aria-labelledby="hero-title"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Biologa nutrizionista &amp; atleta
          </span>
          <h1
            id="hero-title"
            className="font-heading text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Allena il corpo.
            <br />
            Nutri la <span className="text-brand-primary">performance</span>.
          </h1>
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft md:hidden">
            <img
              src={getAssetUrl("images/Beatrice-copertina.jpeg")}
              alt="Beatrice Ferrari, biologa nutrizionista"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
          </div>
          <p className="max-w-xl text-lg text-slate-600">
            Sono Beatrice, biologa nutrizionista e atleta. Ti aiuto a costruire
            un&apos;alimentazione su misura per i tuoi obiettivi — che tu voglia
            gareggiare, migliorare la composizione corporea o semplicemente
            stare in salute.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleBookVisit}
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-primary/90"
            >
              Prenota una consulenza
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleScrollToServices}
              className="inline-flex items-center justify-center rounded-full border border-brand-primary/30 px-6 py-3 text-base font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary/10"
            >
              Scopri i miei servizi ↓
            </button>
          </div>
        </div>
        <div className="relative hidden flex-1 md:block">
          <div className="absolute inset-0 -translate-x-6 scale-105 rounded-[3rem] bg-brand-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
            <img
              src={getAssetUrl("images/Beatrice-copertina.jpeg")}
              alt="Beatrice Ferrari, biologa nutrizionista"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
