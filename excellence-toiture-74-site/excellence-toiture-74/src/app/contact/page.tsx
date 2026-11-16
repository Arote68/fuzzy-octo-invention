"use client";

import { useState } from "react";
import { ArrowUpRight, Phone, MapPin, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Demande de devis — Excellence Toiture 74");
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\nTéléphone : ${data.get("phone")}\nE-mail : ${data.get("email")}\nPrestation : ${data.get("service")}\nMessage : ${data.get("message")}`
    );
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    if (!recipient) {
      window.alert("L'adresse e-mail de réception n'est pas encore configurée. Vous pouvez nous contacter par téléphone.");
      return;
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="section-shell">
          <p className="eyebrow">Contact & devis</p>
          <h1 className="display-title">Parlons de votre <em>toiture.</em></h1>
          <p>Un projet de rénovation, une question sur l’entretien ou un besoin de réparation ? Décrivez-nous votre situation.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="section-shell contact-layout">
          <div>
            <p className="eyebrow">Restons en contact</p>
            <h2 className="display-title mt-6 text-5xl">Un échange simple, avant tout.</h2>
            <p className="mt-6 max-w-sm text-sm leading-8 text-[var(--muted)]">Chaque projet commence par une bonne compréhension de votre besoin. Laissez-nous quelques informations pour préparer notre échange.</p>
            <div className="mt-12 grid gap-6 text-sm">
              <a href="tel:+33768647323" className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--cream)]"><Phone size={17}/></span><span><small className="block text-[var(--muted)]">Téléphone</small><strong>07 68 64 73 23</strong></span></a>
              <div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--cream)]"><MapPin size={17}/></span><span><small className="block text-[var(--muted)]">Zone d’intervention</small><strong>Annecy · Haute-Savoie et alentours</strong></span></div>
              <div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--cream)]"><Clock3 size={17}/></span><span><small className="block text-[var(--muted)]">Urgences</small><strong>Disponibilité à confirmer par téléphone</strong></span></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="form-field"><label htmlFor="name">Nom complet *</label><input id="name" name="name" required placeholder="Votre nom"/></div>
              <div className="form-field"><label htmlFor="phone">Téléphone *</label><input id="phone" name="phone" required type="tel" placeholder="06 00 00 00 00"/></div>
            </div>
            <div className="form-field"><label htmlFor="email">Adresse e-mail *</label><input id="email" name="email" type="email" required placeholder="vous@exemple.fr"/></div>
            <div className="form-field"><label htmlFor="service">Votre besoin</label><select id="service" name="service" defaultValue=""><option value="" disabled>Choisir une prestation</option><option>Couverture / rénovation</option><option>Zinguerie</option><option>Démoussage / entretien</option><option>Traitement hydrofuge</option><option>Boiseries / façades</option><option>Réparation / urgence</option><option>Autre demande</option></select></div>
            <div className="form-field"><label htmlFor="message">Décrivez votre projet *</label><textarea id="message" name="message" required placeholder="Quelques mots sur votre toiture, votre maison et votre besoin…"/></div>
            <p className="form-note">En cliquant sur « Préparer ma demande », votre logiciel de messagerie s’ouvrira avec les informations saisies. Aucun message n’est envoyé automatiquement depuis ce site.</p>
            <Button type="submit" size="lg" className="w-full">Préparer ma demande <ArrowUpRight size={16}/></Button>
            {sent && <p className="text-xs text-[var(--clay)]">Votre logiciel de messagerie devrait s’ouvrir. Si ce n’est pas le cas, contactez-nous par téléphone.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
