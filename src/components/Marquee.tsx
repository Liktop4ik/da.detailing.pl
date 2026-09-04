import { Star } from 'lucide-react';

const items = [
  '10,000+ 5-star reviews',
  'Vetted & insured detailers',
  'Available in 90 minutes',
  'Waterless options',
  '100% satisfaction guarantee',
  '150+ professionals',
  'Cashless & secure',
];

export default function Marquee() {
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
