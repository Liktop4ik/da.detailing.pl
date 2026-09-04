import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="absolute right-6 top-6 h-16 w-16 text-white/[0.04]" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-400">
                <span className="font-semibold text-white">{t.name}</span> | {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
