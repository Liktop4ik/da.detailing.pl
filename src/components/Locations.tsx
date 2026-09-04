import { MapPin } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';
import { locationGroups } from '@/data/content';

export default function Locations() {
  const { t } = useTranslation();

  return (
    <section id="locations" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t('locations.eyebrow')}</p>
          <h2 className="section-title mt-3">{t('locations.title')}</h2>
          <p className="mt-4 text-slate-400">{t('locations.subtitle')}</p>
        </div>

        <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
          {locationGroups.map((group) => (
            <div key={group.state} className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                {group.state}
              </h3>
              <ul className="space-y-2.5">
                {group.counties.map((county) => (
                  <li key={`${group.state}-${county}`}>
                    <a
                      href="#book"
                      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <MapPin className="h-4 w-4 text-brand-400 transition-transform group-hover:scale-110" />
                      {county}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-slate-400">
          {t('locations.missing')}{' '}
          <a href="#book" className="font-semibold text-brand-300 hover:text-brand-200">
            {t('locations.letUsKnow')}
          </a>{' '}
          {t('locations.expanding')}
        </p>
      </div>
    </section>
  );
}
