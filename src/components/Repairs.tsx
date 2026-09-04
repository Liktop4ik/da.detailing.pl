import { Wrench, Sun, ShieldCheck, CircleDot } from 'lucide-react';
import { repairs } from '@/data/content';

const icons = [Wrench, ShieldCheck, Sun, CircleDot];

export default function Repairs() {
  return (
    <section id="repairs" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">More than a clean</p>
          <h2 className="section-title mt-3">
            More than just a cleaning service. We do common repairs too.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {repairs.map((r, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={r.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-400/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.blurb}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
