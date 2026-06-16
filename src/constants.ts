import type { ContactInfo } from "./types";

export const CONTACT_DETAILS: ContactInfo = {
  phone: "+39 366 538 8556",
  email: "beatriceferrarinutrizionista@gmail.com",
  whatsappNumber: "+39 366 538 8556",
  locations: [
    {
      label: "Panorama Salute",
      shortLabel: "Apri Panorama Salute",
      address: "Via Belmonte, 169, 21100 Varese (VA)",
      mapsUrl:
        "https://maps.google.com/?q=Via%20Belmonte%2C%20169%2C%2021100%20Varese%20VA",
      embedUrl:
        "https://maps.google.com/maps?q=Via%20Belmonte%2C%20169%2C%2021100%20Varese%20VA&output=embed"
    }
  ],
  hours: [
    {
      label: "Lunedì e Giovedì",
      value: "14:30 – 19:00"
    }
  ]
};

export const WHATSAPP_MESSAGE =
  "Ciao Beatrice! Vorrei prenotare una consulenza. Sono [Nome].";
