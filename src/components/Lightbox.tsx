import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { getAssetUrl } from "../utils/assets";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

const Lightbox = ({ image, onClose }: LightboxProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 p-6 backdrop-blur-md sm:p-10"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Chiudi"
        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-700 shadow-soft transition hover:bg-white hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>
      <img
        src={getAssetUrl(image.src)}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-2xl bg-white object-contain shadow-soft"
      />
    </div>
  );
};

export default Lightbox;
