import { Star, MapPin, ArrowRight, ShieldCheck, Clock, Droplets } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/28995187/pexels-photo-28995187.jpeg?auto=compress&cs=tinysrgb&w=1400';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="absolute right-0 top-32 h-[360px] w-[360px] rounded-full bg-accent-500/15 blur-[120px]" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="container-x grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        {/* Copy */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-200">
            <Clock className="h-3.5 w-3.5" /> Available in as little as 90 minutes
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            The car detail
            <br />
            that <span className="text-brand-400">comes to you</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
            Professional hand wash and detailing at your home or office. Vetted, insured
            detailers arrive fully equipped — you just pick the time and place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#book" className="btn-primary">
              Book now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              View pricing
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <span className="text-sm text-slate-300">
                <span className="font-semibold text-white">10,000+</span> 5-star reviews since 2015
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-accent-400" />
              Insured &amp; vetted detailers
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <img
              src={HERO_IMG}
              alt="A luxury car being foam washed in a modern garage"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

            {/* Floating cards */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-md animate-float">
              <Droplets className="h-4 w-4 text-brand-300" /> Waterless option available
            </div>
            <div
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-md animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <MapPin className="h-4 w-4 text-accent-400" /> 150+ detailers on the road
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
