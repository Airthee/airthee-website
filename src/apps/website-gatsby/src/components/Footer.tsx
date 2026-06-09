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
    <footer className="bg-dark text-white py-14 px-4 md:px-[15vw] flex flex-col space-y-8">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold mb-2">Mes réseaux sociaux</span>
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
        <div data-tf-live="01J88EJK1988JXW53KBDYWN89C"></div>
      </div>
      <div className="text-center">
        Copyright © 2024 Raphaël TISON (@Airthee)
      </div>
    </footer>
  );
}
