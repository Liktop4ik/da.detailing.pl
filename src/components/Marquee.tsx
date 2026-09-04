import { Star } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function Marquee() {
  const { t } = useTranslation();
  const items = [
    t('marquee.reviews'),
    t('marquee.vetted'),
    t('marquee.minutes'),
    t('marquee.waterless'),
    t('marquee.satisfaction'),
    t('marquee.professionals'),
    t('marquee.cashless'),
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-900/60 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
            <Star className="h-4 w-4 fill-brand-400 text-brand-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
