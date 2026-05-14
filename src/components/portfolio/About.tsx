import { Section } from "./Section";
import { GraduationCap, Target, User } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="01 / about" title="About Me">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="text-foreground font-semibold">Banele Monamudi</span>, an aspiring
            cybersecurity specialist and IT support technician building a career at the intersection of
            <span className="text-primary"> defensive security</span>,
            <span className="text-primary"> network engineering</span>, and
            <span className="text-primary"> ethical hacking</span>.
          </p>
          <p>
            I spend my time in labs — configuring VLANs in Cisco Packet Tracer, scanning networks with
            Nmap, capturing traffic in Wireshark, and learning the offensive techniques that help
            defenders stay one step ahead. I love understanding how systems break so I can help organisations
            keep them running and safe.
          </p>
          <p>
            Beyond the keyboard, I'm focused on becoming a SOC analyst, then earning industry-recognised
            certifications like CompTIA Security+, CEH, and eventually OSCP.
          </p>
        </div>

        <div className="space-y-4">
          <Card icon={<User className="h-4 w-4" />} title="Profile">
            Detail-oriented, curious, and methodical. Comfortable in Linux, terminals, and
            high-pressure troubleshooting.
          </Card>
          <Card icon={<Target className="h-4 w-4" />} title="Career Goal">
            Land a junior cybersecurity role — SOC analyst, network security, or penetration tester
            in training.
          </Card>
          <Card icon={<GraduationCap className="h-4 w-4" />} title="Education">
            NCV Information Technology &amp; Computer Science
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card/60 p-4 transition-colors hover:border-primary/60">
      <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
        {icon}
        {title}
      </div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
