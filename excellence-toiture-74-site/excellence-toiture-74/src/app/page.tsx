import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  { n:"01", title:"Couverture & rénovation", desc:"Réparer, rénover ou reprendre une couverture dans les règles de l’art, en respectant l’architecture de votre maison.", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", href:"/services#couverture" },
  { n:"02", title:"Zinguerie", desc:"Des raccords et des finitions soignés pour guider l’eau et protéger durablement votre habitation.", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", href:"/services#zinguerie" },
  { n:"03", title:"Démoussage", desc:"Retirer les mousses et dépôts qui s’installent avec le temps et altèrent l’aspect de votre toit.", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85", href:"/services#entretien" },
  { n:"04", title:"Traitement hydrofuge", desc:"Une protection complémentaire adaptée à l’état et à la nature de votre couverture.", image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", href:"/services#hydrofuge" },
  { n:"05", title:"Boiseries & façades", desc:"Entretenir les éléments extérieurs qui participent à la beauté et à la protection de votre maison.", image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", href:"/services#facades" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Artisans couvreurs · Annecy & Haute-Savoie</p>
          <h1 className="display-title">Préserver votre maison.<br /><em>Honorer son histoire.</em></h1>
          <p className="hero-copy">Depuis trois générations, nous prenons soin de vos toitures avec la même exigence : le respect du métier, des matériaux et de votre maison.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><Link href="/contact">Parler de mon projet <ArrowUpRight size={17} /></Link></Button>
            <Button asChild size="lg" variant="outline" className="!border-white/45 !text-white hover:!bg-white/10"><Link href="/realisations">Voir nos réalisations</Link></Button>
          </div>
          <div className="hero-note">Un savoir-faire transmis depuis 1992</div>
        </div>
        <div className="hero-index">01 / 05</div>
      </section>

      <div className="tile-divider" />

      <section className="intro-section">
        <div className="section-shell">
          <SectionReveal>
            <div className="intro-grid">
              <div>
                <p className="eyebrow">Le soin du détail, la force du temps</p>
                <h2 className="display-title">Une toiture n’est pas qu’une couverture. <em>C’est un héritage.</em></h2>
              </div>
              <div className="intro-copy">
                <p>Votre toiture protège bien plus que des murs. Elle donne son caractère à votre maison, accompagne les saisons et traverse les années.</p>
                <p className="mt-5"><strong>Notre métier : en prendre soin.</strong> Du conseil à la réalisation, nous privilégions des interventions adaptées, des finitions soignées et des choix durables.</p>
                <Link href="/services" className="inline-flex items-center gap-3 mt-7 text-xs font-bold uppercase tracking-widest text-[var(--clay)]">Découvrir nos savoir-faire <ArrowUpRight size={15} /></Link>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={.1}>
            <div className="stat-row">
              <div className="stat"><strong>3</strong><span>Générations de savoir-faire</span></div>
              <div className="stat"><strong>1992</strong><span>Une histoire familiale</span></div>
              <div className="stat"><strong>74</strong><span>Au cœur de la Haute-Savoie</span></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="services-section">
        <div className="section-shell">
          <SectionReveal>
            <div className="section-heading">
              <div><p className="eyebrow">Nos savoir-faire</p><h2 className="display-title">Chaque matière a ses exigences. <em>Chaque toit son histoire.</em></h2></div>
              <p>Une approche complète de votre toiture, de son entretien à sa rénovation, avec le souci du geste juste.</p>
            </div>
          </SectionReveal>
          <div className="service-grid">
            {services.map((service, i) => (
              <SectionReveal key={service.n} delay={i * .06} className="service-card">
                <div className="service-bg" style={{ backgroundImage:`url("${service.image}")` }} />
                <span className="service-number">{service.n} / SAVOIR-FAIRE</span>
                <div><h3>{service.title}</h3><p>{service.desc}</p><Link href={service.href} className="service-arrow"><span>En savoir plus</span><span><ArrowUpRight size={17} /></span></Link></div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-shell">
          <SectionReveal>
            <div className="section-heading">
              <div><p className="eyebrow">Réalisations</p><h2 className="display-title">Le savoir-faire se voit <em>dans le résultat.</em></h2></div>
              <p>Chaque chantier est une rencontre entre un lieu, un matériau et un besoin précis.</p>
            </div>
          </SectionReveal>
          <div className="project-grid">
            <SectionReveal>
              <div className="project-image" style={{backgroundImage:'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90")'}} />
              <div className="project-caption"><span>Couverture traditionnelle</span><span>Haute-Savoie</span></div>
            </SectionReveal>
            <SectionReveal delay={.12}>
              <div className="project-image secondary" style={{backgroundImage:'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90")'}} />
              <div className="project-caption"><span>Rénovation & finitions</span><span>Découvrir ↗</span></div>
            </SectionReveal>
          </div>
          <div className="mt-10 text-center"><Button asChild variant="outline"><Link href="/realisations">Explorer les réalisations <ArrowUpRight size={16} /></Link></Button></div>
        </div>
      </section>

      <section className="story-section" id="histoire">
        <div className="section-shell story-grid">
          <SectionReveal><div className="story-photo" /></SectionReveal>
          <SectionReveal delay={.12}>
            <div className="story-copy">
              <p className="eyebrow !text-[#d9a486]">Une histoire de transmission</p>
              <h2 className="display-title">Le geste juste ne s’improvise pas.</h2>
              <p>Depuis 1992, Excellence Toiture cultive une même idée du métier : connaître les matériaux, comprendre les maisons et prendre le temps de faire les choses correctement.</p>
              <p className="mt-5">Trois générations de savoir-faire, une exigence constante et une attention particulière portée à chaque projet.</p>
              <div className="story-stamp">Depuis<br />1992</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-shell text-center">
          <SectionReveal>
            <p className="eyebrow justify-center">La confiance se construit</p>
            <h2 className="display-title mt-6 text-5xl md:text-6xl">La parole à ceux qui nous ont confié leur toit.</h2>
            <div className="quote-card">
              <div className="quote-mark">“</div>
              <blockquote>Le meilleur témoignage de notre travail reste la satisfaction de celles et ceux qui nous font confiance.</blockquote>
              <p>Avis clients · Excellence Toiture 74</p>
            </div>
            <p className="mt-8 text-xs text-[var(--muted)]">Les avis nominatifs et leurs notes seront intégrés après validation des avis Google officiels.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <div><p className="eyebrow !text-[#f0cbb6]">Votre projet commence ici</p><h2 className="display-title">Prenons soin de votre toiture.</h2></div>
          <div><p>Une question, un projet de rénovation ou un besoin d’entretien ? Échangeons sur la solution la plus adaptée à votre maison.</p><Button asChild size="lg" variant="secondary" className="mt-5"><Link href="/contact">Demander un devis <ArrowUpRight size={16} /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
