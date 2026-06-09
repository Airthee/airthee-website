import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { citations } from "../data";
import { RotatingCitation } from "../components/RotatingCitations";

function HeroSection() {
  return (
    <section className="bg-primary h-screen px-4 flex justify-center items-center flex-col space-y-4">
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
    </section>
  )
}

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
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
