import AboutMe from "@/components/about-me";
import Contacts from "@/components/contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      {/*<AboutMe />*/}
      <Contacts />
    </div>
  );
}
