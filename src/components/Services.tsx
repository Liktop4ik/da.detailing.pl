import { useState } from 'react';
import { Droplets, Shield, Clock, ChevronDown, Check, Crown } from 'lucide-react';
import { services, type Service } from '@/data/services';
import { useTranslation } from '@/i18n/TranslationContext';

const categories = ['Wash', 'Detail', 'Protection'] as const;
type Category = (typeof categories)[number];

const catIcon: Record<Category, typeof Droplets> = {
  Wash: Droplets,
  Detail: Shield,
  Protection: Crown,
};

const serviceKey: Record<string, string> = {
  'gold-wash': 'goldWash',
  'express-detail': 'expressDetail',
  'interior-detail': 'interiorDetail',
  'deluxe-detail': 'deluxeDetail',
  'signature-detail': 'signatureDetail',
  'diamond-ceramic': 'diamondCeramic',
  'rim-refinish': 'rimRefinish',
  'ceramic-windows': 'ceramicWindows',
  'ceramic-wheels': 'ceramicWheels',
  'titanium-gloss': 'titaniumGloss',
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const Icon = catIcon[service.category];
  const key = serviceKey[service.id];

  return (
    <div
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-brand-400/40 hover:bg-white/[0.05]"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-300">
            <Icon className="h-3.5 w-3.5" /> {t(`services.${service.category.toLowerCase()}`)}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-white">
            {t(`services.items.${key}.name`)}
          </h3>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {t(`services.items.${key}.tagline`)}
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <Clock className="h-3.5 w-3.5 text-accent-400" />
        {t(`services.items.${key}.cadence`)}
      </div>

      <div className="mt-5 flex items-end gap-3">
        <div>
          <span className="text-3xl font-bold text-white">${service.price}</span>
          <span className="text-xs text-slate-500"> {t('services.from')}</span>
        </div>
        <div className="mb-1 rounded-lg bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-400">
          ${service.memberPrice} {t('services.forMembers')}
        </div>
      </div>

      {/* Expandable details */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 flex items-center gap-2 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
      >
        {t('services.packageDetails')}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ${
          open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 border-t border-white/10 pt-4">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {f}
              </li>
            ))}
          </ul>
          {service.note && (
            <p className="mt-4 text-xs italic leading-relaxed text-slate-500">
              {t(`services.items.${key}.note`)}
            </p>
          )}
        </div>
      </div>

      <a href="#book" className="btn-primary mt-6 w-full">
        {t('services.bookNow')}
      </a>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category | 'All'>('All');

  const filtered = active === 'All' ? services : services.filter((s) => s.category === active);

  const tabs: { key: 'All' | Category; label: string }[] = [
    { key: 'All', label: t('services.all') },
    { key: 'Wash', label: t('services.wash') },
    { key: 'Detail', label: t('services.detail') },
    { key: 'Protection', label: t('services.protection') },
  ];

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="section-title mt-3">{t('services.title')}</h2>
          <p className="mt-4 text-slate-400">{t('services.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === tab.key
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'border border-white/10 text-slate-300 hover:border-brand-400/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-slate-500">{t('services.footnote')}</p>
      </div>
    </section>
  );
}
