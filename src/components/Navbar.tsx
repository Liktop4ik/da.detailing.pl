import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'Pricing', href: '#services' },
  { label: 'Membership', href: '#membership' },
  { label: 'Repairs', href: '#repairs' },
  { label: 'About', href: '#why' },
  { label: 'Locations', href: '#locations' },
  { label: 'Support', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            da<span className="text-brand-400">.</span>detailing
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#book" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Login
          </a>
          <a href="#book" className="btn-primary">
            Book now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3">
            <a href="#book" onClick={() => setOpen(false)} className="btn-ghost flex-1">
              Login
            </a>
            <a href="#book" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Book now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
