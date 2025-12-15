"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

export const NewsletterSection = () => {
  const { t } = useLocale();
  const newsletterTexts = t.sections.newsletter;

  return (
    <section
      className="bg-black py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Título principal */}
        <h2
          id="newsletter-heading"
          className="text-white text-3xl sm:text-4xl font-gilroy font-semibold mb-8 text-center"
        >
          {newsletterTexts.title}
        </h2>

        {/* Formulario de suscripción */}
        <form
          className="w-full max-w-lg"
          aria-label={newsletterTexts.a11y.sectionLabel}
        >
          <div className="flex flex-col sm:flex-row items-center mb-4">
            {/* Campo de correo electrónico */}
            <input
              type="email"
              placeholder={newsletterTexts.emailPlaceholder}
              aria-label={newsletterTexts.a11y.emailInputLabel}
              required
              className="grow w-full font-gilroy sm:w-auto px-4 py-3 text-white bg-white/5 border border-white/10 rounded-bl-md rounded-tl-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Botón de Enviar */}
            <button
              type="submit"
              aria-label={newsletterTexts.a11y.submitButtonLabel}
              className="w-full sm:w-auto px-6 py-3 bg-primary border border-white/10 text-white text-base font-gilroy font-medium rounded-br-md rounded-tr-md cursor-pointer hover:bg-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            >
              <Check className="w-5 h-5 inline-block" aria-hidden="true" />
              <span className="sr-only">{newsletterTexts.submitButton}</span>
            </button>
          </div>
        </form>

        <p className="text-label font-notosans text-xs mt-4 max-w-lg text-center">
          {newsletterTexts.description}
        </p>
      </div>
    </section>
  );
};
