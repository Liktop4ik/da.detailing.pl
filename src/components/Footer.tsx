import { Sparkles, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();

  const serviceLinks = [
    t('services.items.goldWash.name'),
    t('services.items.expressDetail.name'),
    t('services.items.interiorDetail.name'),
    t('services.items.deluxeDetail.name'),
    t('services.items.signatureDetail.name'),
    t('services.items.diamondCeramic.name'),
  ];

  const companyLinks = [
    t('footer.about'),
    t('footer.locations'),
    t('footer.joinTeam'),
    t('footer.businessClients'),
    t('footer.support'),
  ];

  const accountLinks = [
    t('footer.login'),
    t('footer.signUp'),
    t('footer.membership'),
    t('footer.pricing'),
    t('footer.repairs'),
  ];

  const cols = [
    { title: t('footer.services'), links: serviceLinks },
    { title: t('footer.company'), links: companyLinks },
    { title: t('footer.account'), links: accountLinks },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-16">
      <div className="container-x pb-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                da<span className="text-brand-400">.</span>detailing
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {t('brand.tagline')}
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition-all hover:border-brand-400/50 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-slate-300 transition-colors hover:text-brand-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" /> {t('footer.location')}
            </span>
            <a href="tel:+18552101337" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-brand-400" /> {t('footer.phone')}
            </a>
            <a href="mailto:support@da.detailing" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-brand-400" /> {t('footer.email')}
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} da.detailing. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
