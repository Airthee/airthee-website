import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { citations, presentation, skills } from "../data";
import { RotatingCitation } from "../components/RotatingCitations";
import { MultiParagraphs } from "../components/MultiParagraphs";
import { realisations, summary as realisationsSummary } from "../data/realisations";
import { ExternalLink } from "../components/ExternalLink";

function Section(props: React.PropsWithChildren & {className?: string, title?: string}) {
  return (
    <section className={`py-8 px-4 md:px-[15vw] ${props.className}`}>
      {props.title && (
        <div className="pb-6">
          <h1 className="text-4xl font-bold">{props.title}</h1>
          <div className="mt-1 h-1 w-28 max-w-full bg-secondary"></div>
        </div>
      )}
      {props.children}
    </section>
  )
}

function SubSection(props: React.PropsWithChildren & {title: string}) {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-2">{props.title}</h2>
      {props.children}
    </div>
  )
}

function RealisationsSection() {
  return (
    <Section title="Réalisations">
      <div className="mb-4">
        <MultiParagraphs paragraphs={realisationsSummary} />
      </div>
      <div className="flex flex-col space-y-5">
        {realisations.map((realisation, index) => (
          <SubSection key={index} title={realisation.name}>
            <MultiParagraphs paragraphs={realisation.description} />
            <ExternalLink href={realisation.link} newTab>Visiter {realisation.name}</ExternalLink>
          </SubSection>
        ))}
      </div>
    </Section>
  )
}

function SkillsSection() {
  return (
    <Section title="Compétences">
      <div className="flex flex-col space-y-4">
        {skills.map((skill, skillIndex) => (
          <SubSection key={skillIndex} title={skill.name}>
            <MultiParagraphs paragraphs={skill.description} />
          </SubSection>
        ))}
      </div>
    </Section>
  )
}

function PresentationSection() {
  return (
    <Section title="Qui suis-je ?">
      <p>
        {presentation}
      </p>
    </Section>
  )
}

function HeroSection() {
  return (
    <Section className="bg-primary h-screen flex justify-center items-center flex-col space-y-4">
      <div className="max-h-[80vh] max-w-full aspect-square">
        <StaticImage
          className="rounded-full"
          src="../images/me.jpg"
          alt="Photo de moi en noir et blanc, souriant dans un style décontracté, portant un sweat"
        />
      </div>
      <div className="w-full md:w-3/5">
        <RotatingCitation
          period={10_000}
          citations={citations}
        />
      </div>
    </Section>
  )
}

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <div className="bg-primary-lighten text-justify">
        <PresentationSection />
        <SkillsSection />
        <RealisationsSection />
      </div>
    </main>
  );
}

export function Head() {
  return (
    <>
      <title>Airthee - Welcome to my world</title>
    </>
  );
}
