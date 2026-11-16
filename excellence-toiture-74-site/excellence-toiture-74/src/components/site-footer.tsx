import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <div className="brand-lockup brand-lockup-light">
              <span className="brand-mark"><span /></span>
              <span className="flex flex-col leading-none">
                <strong>EXCELLENCE <em>TOITURE</em></strong>
                <small>ANNECY · HAUTE-SAVOIE</small>
              </span>
            </div>
            <h2 className="footer-statement">La qualité d’une toiture se mesure au temps qu’elle traverse.</h2>
            <Link href="/contact" className="footer-cta">Parlons de votre projet <ArrowUpRight size={17} /></Link>
          </div>
          <div>
            <p className="footer-label">EXPLORER</p>
            <div className="footer-links">
              <Link href="/services">Nos savoir-faire</Link>
              <Link href="/realisations">Nos réalisations</Link>
              <Link href="/#histoire">Notre histoire</Link>
              <Link href="/contact">Demander un devis</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">NOUS JOINDRE</p>
            <div className="footer-contact">
              <a href="tel:+33768647323"><Phone size={16} /> 07 68 64 73 23</a>
              <span><MapPin size={16} /> Annecy et alentours</span>
              <span><Clock3 size={16} /> Urgences toiture 24h/24*</span>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-5 text-white/40">*À confirmer directement auprès de l’entreprise avant publication.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Excellence Toiture 74. Tous droits réservés.</span>
          <span>Couverture · Zinguerie · Entretien</span>
        </div>
      </div>
    </footer>
  );
}
