import gewoon from '../assets/worsten/gewoon.jpg';
import gerookt from '../assets/worsten/gerookt.jpg';
import pikant from '../assets/worsten/pikant.jpg';
import merguez from '../assets/worsten/merguez.jpg';
import rumbeekse from '../assets/worsten/rumbeekse.jpg';

export const contact = {
  telefoon: '+32 479 59 00 88',
  telefoonLink: 'tel:+32479590088',
  email: 'info@drogeworsten.be',
  straat: 'Begijnestraat 53',
  gemeente: '8880 Ledegem',
  btw: 'BE1033145515',
  facebook: 'https://www.facebook.com/profile.php?id=100039930205540',
  instagram: 'https://www.instagram.com/drogeworsten.be/',
};

export const worsten = [
  {
    slug: 'rumbeekse',
    naam: 'Rumbeekse',
    tag: 'Bestseller',
    kort: 'Eigen kruidenmix, half gerookt op beukenhout.',
    tekst:
      'Onze bestseller. Een unieke kruidenmix en half gerookt op beukenhout: een van de meest smakelijke worsten die je ooit zal proeven.',
    foto: rumbeekse,
  },
  {
    slug: 'gewoon',
    naam: 'Gewoon',
    tag: 'De klassieker',
    kort: '80% varkensvlees, 20% vet, onze eigen kruiden.',
    tekst:
      '80% varkensvlees en 20% vet. Het geheim zit in de perfecte verhouding en onze authentieke kruidenmix.',
    foto: gewoon,
  },
  {
    slug: 'gerookt',
    naam: 'Gerookt',
    tag: 'Beukenhout',
    kort: 'Gerookt in een echte rookkamer met beukenhout.',
    tekst:
      'Gerookt in een originele rookkamer met beukenhout. Zuiver varkensvlees in balans met de rokerige aroma’s van het hout.',
    foto: gerookt,
  },
  {
    slug: 'pikant',
    naam: 'Pikant',
    tag: 'Vurig',
    kort: 'Een gedurfde kruidenmix met een pittige kick.',
    tekst:
      '80% zuiver varkensvlees en 20% vet, met een gedurfde kruidenmix die voor een vurige smaakexplosie zorgt.',
    foto: pikant,
  },
  {
    slug: 'merguez',
    naam: 'Merguez',
    tag: 'Licht pikant',
    kort: 'Onze merguezkruiden, subtiel pittig.',
    tekst:
      '80% puur varkensvlees en 20% vet, met onze eigen merguez-kruidenmix. Licht pikant, subtiel pittig bij elke hap.',
    foto: merguez,
  },
];
