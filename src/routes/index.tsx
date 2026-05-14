import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { CV } from "@/components/portfolio/CV";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { HackerLoader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banele Monamudi — Cybersecurity & IT Support Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Banele Monamudi — aspiring cybersecurity specialist and IT support technician. Networking, ethical hacking, Nmap, Wireshark, Linux and Cisco labs.",
      },
      { property: "og:title", content: "Banele Monamudi — Cybersecurity & IT Support Specialist" },
      { property: "og:description", content: "Networking, ethical hacking and IT support portfolio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HackerLoader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
