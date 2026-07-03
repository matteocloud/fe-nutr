import LogoCB from "./LogoCB";
import { PRIVACY_POLICY_URL } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200" aria-labelledby="footer-title">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                <LogoCB className="h-12 w-12" />
              </span>
              <div className="max-w-sm">
                <h2 id="footer-title" className="font-heading text-lg font-extrabold text-white">
                  Beatrice Ferrari — Biologa Nutrizionista
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Iscritta all&apos;Ordine dei Biologi della Lombardia n. AA_101264
                </p>
                <p className="text-sm text-slate-400">
                  P.IVA 04135520122
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 text-center lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Naviga
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#about">
                    Chi sono
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#services">
                    Servizi
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#method">
                    Metodo
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#contact">
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:items-start sm:text-left">
          <p>© {new Date().getFullYear()} Beatrice Ferrari · Tutti i diritti riservati.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <a className="transition hover:text-white" href="#contact">
              Prenota una consulenza
            </a>
            <a
              className="transition hover:text-white"
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
