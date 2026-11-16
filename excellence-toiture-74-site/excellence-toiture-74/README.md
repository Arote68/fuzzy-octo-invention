# Excellence Toiture 74 — Refonte

Site vitrine Next.js / TypeScript / Tailwind CSS avec une direction artistique artisanat premium : terre cuite, crème, brun profond, typographie éditoriale et motif de toiture.

## Installation

Prérequis : Node.js 20.9+.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

## Structure

- `src/app/page.tsx` : accueil
- `src/app/services/page.tsx` : prestations
- `src/app/realisations/page.tsx` : galerie
- `src/app/contact/page.tsx` : formulaire de contact
- `src/components/` : navigation, pied de page, animations et bouton
- `src/app/globals.css` : identité visuelle et responsive

## À finaliser avant publication

1. Remplacer les photos Unsplash par les photos authentiques des chantiers et de l'équipe.
2. Vérifier le numéro, l'adresse e-mail, les zones d'intervention et les modalités d'urgence avec l'entreprise.
3. Ajouter les avis Google authentiques (texte, auteur, note et lien source) après validation.
4. Renseigner `NEXT_PUBLIC_CONTACT_EMAIL` dans `.env.local` avec l'adresse officielle confirmée. Le formulaire prépare alors un e-mail via `mailto`. Pour un envoi sans logiciel de messagerie, brancher ensuite Resend, Formspree ou une API métier.
5. Ajouter les pages Mentions légales et Politique de confidentialité avec les informations juridiques exactes de l'entreprise.
6. Vérifier les données structurées locales (NAP, horaires, zone de service) avant déploiement.

## Images

Les visuels actuels sont des images distantes Unsplash utilisées comme placeholders de direction artistique. Elles ne représentent pas nécessairement des chantiers de l'entreprise et doivent être remplacées avant mise en production.
