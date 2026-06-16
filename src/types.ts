import type { LucideIcon } from "lucide-react";

export type BrandPalette = {
  primary: string;
  accent: string;
  muted: string;
  surface: string;
  ink: string;
  outline: string;
};

export type ServiceItem = {
  title: string;
  tagline?: string;
  description?: string;
  points?: string[];
  icon: LucideIcon;
  href?: string;
  logo?: {
    src: string;
    alt: string;
  };
};

export type ContactInfo = {
  phone: string;
  email: string;
  whatsappNumber: string;
  locations: ContactLocation[];
  hours: ContactHour[];
};

export type ContactLocation = {
  label: string;
  address: string;
  mapsUrl: string;
  embedUrl: string;
  shortLabel?: string;
};

export type ContactHour = {
  label: string;
  value: string;
};
