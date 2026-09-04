import { Wrench, Sun, ShieldCheck, CircleDot } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';

const repairKeys = ['paintlessDent', 'titaniumGloss', 'windowTinting', 'wheelRim'] as const;
const icons = [Wrench, ShieldCheck, Sun, CircleDot];

export default function Repairs() {
  const { t } = useTranslation();

  return (
    <section id="repairs" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t('repairs.eyebrow')}</p>
          <h2 className="section-title mt-3">{t('repairs.title')}</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {repairKeys.map((key, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={key}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-400/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {t(`repairs.items.${key}.name`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t(`repairs.items.${key}.blurb`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
