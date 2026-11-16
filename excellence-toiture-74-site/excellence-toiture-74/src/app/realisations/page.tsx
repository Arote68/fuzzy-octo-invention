import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les réalisations d'Excellence Toiture 74 en couverture, zinguerie et entretien de toiture."
};

const photos = [
  { title:"Couverture traditionnelle", type:"Couverture", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90" },
  { title:"Détails de façade & toiture", type:"Finitions", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90" },
  { title:"Maison de caractère", type:"Rénovation", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90" },
  { title:"Architecture & matériaux", type:"Patrimoine", image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90" }
];

export default function RealisationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-shell">
          <p className="eyebrow">Réalisations</p>
          <h1 className="display-title">Des maisons singulières.<br /><em>Des gestes précis.</em></h1>
          <p>Quelques inspirations pour découvrir l’univers des matériaux, des lignes et des détails qui composent une toiture réussie.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          {photos.map((photo, i) => (
            <article key={photo.title} className={i % 2 ? "md:mt-24" : ""}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage:`url("${photo.image}")`}} />
              <div className="project-caption"><span>{photo.title}</span><span>{photo.type}</span></div>
            </article>
          ))}
        </div>
        <div className="section-shell mt-16 rounded-sm bg-[var(--cream)] p-8 md:p-12">
          <p className="eyebrow">Galerie à compléter</p>
          <h2 className="display-title mt-5 max-w-3xl text-5xl md:text-6xl">Les plus belles réalisations sont les vôtres.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">Les images présentées ici sont des visuels d’ambiance temporaires. Ils devront être remplacés par les photographies authentiques des chantiers d’Excellence Toiture 74 avant mise en ligne.</p>
          <Button asChild className="mt-7"><Link href="/contact">Présenter mon projet <ArrowUpRight size={16}/></Link></Button>
        </div>
      </section>
    </>
  );
}
