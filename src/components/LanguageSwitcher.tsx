import { useEffect, useRef, useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useTranslation, type Locale } from '@/i18n/TranslationContext';

const languages: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'ua', label: 'UA' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-brand-400/50 hover:text-white"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        {locale.toUpperCase()}
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 backdrop-blur-xl transition-all duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="p-1.5">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                  locale === lang.code
                    ? 'bg-brand-500/15 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {lang.label}
                {locale === lang.code && <Check className="h-4 w-4 text-brand-300" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
