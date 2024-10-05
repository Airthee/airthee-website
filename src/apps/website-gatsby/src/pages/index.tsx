import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { citations, presentation, skills } from "../data";
import { RotatingCitation } from "../components/RotatingCitations";

function Section(props: React.PropsWithChildren & {className?: string, title?: string}) {
  return (
    <section className={`py-8 px-4 ${props.className}`}>
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

function SkillsSection() {
  return (
    <Section title="Compétences">
      <div className="flex flex-col space-y-4">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <h2 className="text-2xl font-medium mb-2">{skill.name}</h2>
            <div className="flex flex-col space-y-2">
              {skill.description.map((skillDescription, descriptionIndex) => (
                <p key={descriptionIndex}>{skillDescription}</p>
              ))}
            </div>
          </div>
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
      <RotatingCitation
        period={10_000}
        citations={citations}
      />
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
