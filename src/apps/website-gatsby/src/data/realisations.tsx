import * as React from "react";
import { ExternalLink } from "../components/ExternalLink";

interface Realisation {
  name: string;
  link: string;
  description: string[];
  imageSrc?: string;
}

export const summary: React.ReactNode[] = [
  "Liste non exaustive de mes réalisations sous forme de projets personnels permettant de mettre en pratique mes compétences et découvertes.",
  "Vous le découvrirez par vous même, je ne suis pas designer, mais j’y travaille !",
  <>
    Vous pouvez évidemment en savoir plus en allant directement consulter{" "}
    <ExternalLink href="https://linkedin.com/in/raphael-tison" newTab>
      mon LinkedIn
    </ExternalLink>{" "}
    ou{" "}
    <ExternalLink href="https://github.com/Airthee" newTab>
      mon Github
    </ExternalLink>
    .
  </>,
];

export const realisations: Realisation[] = [
    {
        name: 'Flish',
        description: [
            "Service en ligne permettant de partager des données textuelles de manière sécurisée, par mot de passe, avec effacement des données automatique.",
            "Entièrement anonyme, entièrement gratuit, entièrement chiffré.",
        ],
        link: 'https://flish.link',
        imageSrc: 'flish.png'
    },
    {
        name: 'How Long',
        description: [
            "Site web permettant de calculer le délai passé depuis une date, pratique pour connaître son âge à la seconde près, ou le temps passé depuis un évènement spécifique."
        ],
        link: 'https://how-long.xyz',
        imageSrc: 'how-long.png'
    },
    {
        name: "Airthee's Tools",
        description: [
            "Suite d’outils pour la vie courante : générateur de mot de passe, calculateur de coût d’abonnement d’électricité, ..."
        ],
        link: 'https://tools.airthee.com'
    }
];
