import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Nos savoir-faire",
  description: "Découvrez les prestations d'Excellence Toiture 74 : couverture, rénovation, zinguerie, démoussage et entretien de toiture à Annecy."
};

const details = [
  { id:"couverture", n:"01", title:"Couverture & rénovation", intro:"La première protection de votre maison mérite une attention particulière.", body:"Tuiles, éléments de couverture, réparations ou rénovation : chaque intervention commence par l’observation de l’existant et la compréhension de vos besoins. L’objectif est de préserver l’étanchéité, la cohérence esthétique et la durabilité de votre toiture." },
  { id:"zinguerie", n:"02", title:"Zinguerie", intro:"Le détail qui fait toute la différence face aux intempéries.", body:"Les raccords, abergements, noues et éléments d’évacuation des eaux jouent un rôle essentiel dans la protection du bâti. Une zinguerie bien pensée accompagne la toiture et limite les risques d’infiltration." },
  { id:"entretien", n:"03", title:"Démoussage & entretien", intro:"Entretenir aujourd’hui pour préserver demain.", body:"Les mousses, lichens et dépôts s’installent progressivement sur les couvertures. Un entretien adapté à la nature du matériau permet de retrouver un toit plus propre sans appliquer de méthode inappropriée." },
  { id:"hydrofuge", n:"04", title:"Traitement hydrofuge", intro:"Une protection complémentaire, choisie selon l’état du support.", body:"Après diagnostic et préparation, un traitement hydrofuge peut contribuer à limiter la pénétration de l’eau dans certains matériaux. Le produit et la méthode doivent toujours être adaptés à la couverture." },
  { id:"facades", n:"05", title:"Boiseries & façades", intro:"La toiture s’inscrit dans l’ensemble architectural de votre maison.", body:"Boiseries extérieures et façades participent à la protection et au caractère de votre habitation. Leur entretien contribue à conserver une apparence soignée et à anticiper les dégradations." },
  { id:"urgence", n:"06", title:"Réparation & urgence toiture", intro:"Quand la toiture ne peut pas attendre.", body:"Une tuile déplacée, une infiltration ou un dégât après intempéries nécessite une évaluation rapide. Contactez directement l’entreprise pour confirmer les modalités et disponibilités d’intervention d’urgence." }
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-shell">
          <p className="eyebrow">Nos savoir-faire</p>
          <h1 className="display-title">Le respect du matériau.<br /><em>La précision du geste.</em></h1>
          <p>De l’entretien à la rénovation, nous prenons soin de votre couverture avec une approche adaptée à votre maison, à son histoire et à ses matériaux.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-shell">
          {details.map((item, i) => (
            <SectionReveal key={item.id} delay={i * .04}>
              <article className="service-detail" id={item.id}>
                <div><span className="eyebrow">{item.n} / Prestation</span><h2>{item.title}</h2></div>
                <div><h3 className="font-display text-2xl leading-tight">{item.intro}</h3><p className="mt-5">{item.body}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--clay)]">Parler de ce besoin <ArrowUpRight size={15}/></Link></div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
      <section className="cta-section"><div className="cta-inner"><div><p className="eyebrow !text-[#f0cbb6]">Un projet en tête ?</p><h2 className="display-title">Commençons par en parler.</h2></div><div><p>Chaque toiture est différente. Présentez-nous votre besoin pour envisager la bonne intervention.</p><Button asChild size="lg" variant="secondary" className="mt-5"><Link href="/contact">Demander un devis <ArrowUpRight size={16}/></Link></Button></div></div></section>
    </>
  );
}
