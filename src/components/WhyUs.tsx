import { Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function WhyUs() {
  const { t } = useTranslation();

  const items = [
    { icon: Clock, title: t('why.convenience.title'), blurb: t('why.convenience.blurb') },
    { icon: ShieldCheck, title: t('why.quality.title'), blurb: t('why.quality.blurb') },
    { icon: HeartHandshake, title: t('why.trust.title'), blurb: t('why.trust.blurb') },
  ];

  return (
    <section id="why" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/15 blur-[150px]" />
      </div>
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t('why.eyebrow')}</p>
          <h2 className="section-title mt-3">{t('why.title')}</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
