import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import en from '@/i18n/locales/en.json';
import pl from '@/i18n/locales/pl.json';
import ua from '@/i18n/locales/ua.json';

export type Locale = 'en' | 'pl' | 'ua';

const dictionaries: Record<Locale, typeof en> = {
  en,
  pl,
  ua,
};

const STORAGE_KEY = 'da.detailing.lang';

type Dict = typeof en;

type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function resolve(dict: Dict, key: string): string {
  const parts = key.split('.');
  let current: unknown = dict;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof current === 'string' ? current : key;
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && stored in dictionaries) return stored as Locale;
  const nav = window.navigator.language.slice(0, 2);
  if (nav in dictionaries) return nav as Locale;
  return 'en';
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<TranslationContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => resolve(dictionaries[locale], key),
    }),
    [locale]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation(): TranslationContextValue {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return ctx;
}
