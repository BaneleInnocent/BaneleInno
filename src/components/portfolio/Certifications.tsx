import { Section } from "./Section";
import { Award, ShieldCheck, Network } from "lucide-react";

const CERTS = [
  {
    title: "IT Essentials Software & Hardware",
    issuer: "Cisco Networking Academy",
    status: "Completed ",
    icon: Network,
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    status: "In Progress",
    icon: ShieldCheck,
  },
  {
    title: "CCNA Part1 Introduction TO Networks",
    issuer: "Cisco Networking Academy",
    status: "Completed",
    icon: Award,
  },
];

export function Certifications() {
  return (
    <Section id="certs" eyebrow="05 / credentials" title="Certifications">
      <div className="grid gap-5 md:grid-cols-3">
        {CERTS.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="rounded-lg border border-border bg-card/60 p-5 transition-all hover:border-primary/60">
              <div className="mb-3 inline-flex rounded-md border border-primary/30 bg-primary/10 p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <span className="mt-3 inline-block rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                {c.status}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
