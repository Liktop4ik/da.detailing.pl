import { ArrowRight, Wind } from 'lucide-react';

const IMG =
  'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function CtaBanner() {
  return (
    <section id="book" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src={IMG}
            alt="Detailer cleaning a car interior"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 grain opacity-40" />

          <div className="relative px-6 py-14 md:px-14 md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-200">
              <Wind className="h-3.5 w-3.5" /> New car smell, guaranteed
            </span>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let us help you get that new car smell today
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Sign up and we'll get a fully equipped detailer to your location in as little as
              90 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="btn-primary">
                Book now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#membership" className="btn-ghost">
                View membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
