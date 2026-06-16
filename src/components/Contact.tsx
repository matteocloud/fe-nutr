import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall
} from "lucide-react";
import Section from "./Section";
import { CONTACT_DETAILS } from "../constants";
import { buildWhatsAppLink } from "../utils/booking";
import { getAssetUrl } from "../utils/assets";

const Contact = () => {
  const whatsappLink = buildWhatsAppLink({
    phoneNumber: CONTACT_DETAILS.whatsappNumber
  });
  const location = CONTACT_DETAILS.locations[0];

  return (
    <Section
      id="contact"
      eyebrow="Dove mi trovi"
      title="Prenota una consulenza"
      description="Ricevo in studio a Varese e sono disponibile anche online. Il primo passo è una chiacchierata per capire di cosa hai bisogno — senza impegno."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="space-y-6">
          <div className="grid gap-3 text-sm text-slate-700">
            <ContactField
              icon={PhoneCall}
              label="Telefono"
              value={CONTACT_DETAILS.phone}
              href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`}
            />
            <ContactField
              icon={MessageCircle}
              label="WhatsApp"
              value="Scrivimi un messaggio"
              href={whatsappLink}
            />
            <ContactField
              icon={Mail}
              label="Email"
              value={CONTACT_DETAILS.email}
              href={`mailto:${CONTACT_DETAILS.email}`}
            />
            {location && (
              <ContactField
                icon={MapPin}
                label={location.label}
                value={location.address}
                href={location.mapsUrl}
              />
            )}
            <ContactField
              icon={Clock}
              label="Orari"
              value={
                <div className="space-y-2">
                  {CONTACT_DETAILS.hours.map((slot) => (
                    <div key={slot.label} className="space-y-1">
                      <p className="text-sm font-semibold text-slate-700">
                        {slot.label}
                      </p>
                      <p className="text-sm text-slate-600">{slot.value}</p>
                    </div>
                  ))}
                </div>
              }
            />
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-primary/90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Scrivimi per prenotare
          </a>
        </div>

        {location && (
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
              <div className="grid grid-cols-2">
                <img
                  src={getAssetUrl("images/interno-studio-luogo-lavoro.png")}
                  alt="Interno dello studio Panorama Salute a Varese"
                  className="h-48 w-full object-cover sm:h-56"
                  loading="lazy"
                />
                <img
                  src={getAssetUrl("images/esterno-luogo-lavoro.png")}
                  alt="Esterno dello studio Panorama Salute a Varese"
                  className="h-48 w-full object-cover sm:h-56"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 border-t border-brand-primary/10 p-5">
                <img
                  src={getAssetUrl("images/logo-luogo-lavoro.png")}
                  alt="Logo Panorama Salute"
                  className="h-14 w-14 flex-none rounded-xl object-contain"
                  loading="lazy"
                />
                <div className="space-y-1 text-sm">
                  <p className="font-heading text-base font-extrabold text-slate-900">
                    {location.label}
                  </p>
                  <p className="text-slate-600">{location.address}</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-white shadow-soft">
              <iframe
                title={`Indicazioni per ${location.label}`}
                src={location.embedUrl}
                loading="lazy"
                className="h-56 w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

type ContactFieldProps = {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
};

const ContactField = ({ icon: Icon, label, value, href }: ContactFieldProps) => {
  const content = (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-primary/10 bg-white px-4 py-3 text-center shadow-sm transition hover:border-brand-primary/30 hover:shadow md:flex-row md:items-center md:text-left">
      <div className="rounded-full bg-brand-primary/10 p-2 text-brand-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="space-y-1 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted md:text-left">
          {label}
        </p>
        <div className="text-sm font-medium text-slate-700 md:text-left">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Contact;
