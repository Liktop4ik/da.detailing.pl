import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const;

export default function Faq() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t('faq.eyebrow')}</p>
          <h2 className="section-title mt-3">{t('faq.title')}</h2>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl space-y-3">
          {faqKeys.map((key, i) => {
            const isOpen = open === i;
            return (
              <div
                key={key}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-brand-400/40 bg-white/[0.05]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">
                    {t(`faq.items.${key}.question`)}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-brand-500 text-white' : 'text-brand-300'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-300">
                      {t(`faq.items.${key}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
