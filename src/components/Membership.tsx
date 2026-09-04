import { Check, Crown } from 'lucide-react';

const perks = [
  'Up to 35% off every booking',
  'Priority scheduling \u2014 book ahead of everyone else',
  'Exclusive member-only packages',
  'Dedicated support line',
  'Flexible monthly or annual billing',
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-brand-400/20 bg-gradient-to-br from-brand-700/30 via-ink-900 to-ink-900 p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-[120px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-200">
                <Crown className="h-3.5 w-3.5" /> Membership
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Wash more. Pay less.
              </h2>
              <p className="mt-4 max-w-md text-slate-300">
                Join the da.detailing membership and lock in member pricing on every service,
                plus priority booking and dedicated support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book" className="btn-primary">
                  Become a member
                </a>
                <a href="#services" className="btn-ghost">
                  Compare pricing
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-950/50 p-7 backdrop-blur">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">$39</span>
                <span className="text-sm text-slate-400">/month, cancel after 12 months</span>
              </div>
              <ul className="mt-6 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-500/15 text-accent-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                Minimum 12-month term. $59 early termination fee. Membership fee is
                non-refundable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
