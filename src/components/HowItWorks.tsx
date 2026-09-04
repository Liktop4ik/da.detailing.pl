import { CalendarCheck, Truck, Star } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    step: 'Step 1',
    title: 'Book your appointment',
    blurb: 'Tell us when and where. We\u2019ll be there within 90 minutes.',
  },
  {
    icon: Truck,
    step: 'Step 2',
    title: 'We come to you',
    blurb: 'An assigned detailer will arrive fully equipped to complete your service at the selected location.',
  },
  {
    icon: Star,
    step: 'Step 3',
    title: 'Rate your detailer',
    blurb: 'You only get charged after the service. Tell us how we did and rate your detailer.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-3">How does da.detailing work?</h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent md:block" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="reveal relative text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-ink-800 ring-1 ring-brand-400/30">
                <s.icon className="h-7 w-7 text-brand-300" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-glow">
                  {i + 1}
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                {s.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
