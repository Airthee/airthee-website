import React from "react";
import { ExternalLink } from "./ExternalLink";

import githubLogo from "../icons/github-mark-white.svg";
import linkedInLogo from "../icons/In-White-14@2x.png";

function FooterIcon(props: {
  imageSrc: string;
  imageAlt: string;
  link: string;
}) {
  return (
    <ExternalLink href={props.link} newTab>
      <div className="h-8 aspect-square">
        <img src={props.imageSrc} alt={props.imageAlt} />
      </div>
    </ExternalLink>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-white py-8 px-4">
      <div className="flex flex-row space-between">
        <div className="flex flex-col">
          <span className="font-semibold">Mes réseaux sociaux</span>
          <div className="flex flex-row space-x-2">
            <FooterIcon
              link="https://linkedin.com/in/raphael-tison"
              imageSrc={linkedInLogo}
              imageAlt="Icône LinkedIn"
            />
            <FooterIcon
              link="https://github.com/Airthee"
              imageSrc={githubLogo}
              imageAlt="Icône Github"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
