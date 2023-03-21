import { Link } from "@remix-run/react";
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Medium from "~/components/Medium";
import Nav from "~/components/Nav";
import Projects from "~/components/Projects";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Medium />
      <Education />
    </>
  );
}
