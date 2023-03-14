import { Link } from "@remix-run/react";
import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
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

   </>
  );
}
