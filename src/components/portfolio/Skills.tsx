import { Section } from "./Section";
import {
  Network, Bug, ScanSearch, Activity, Terminal, Router,
  ShieldCheck, Wrench, Server,
} from "lucide-react";

const skills = [
  { name: "Networking (VLANs, DHCP, Routing)", level: 80, icon: Network },
  { name: "Ethical Hacking", level: 70, icon: Bug },
  { name: "Nmap", level: 78, icon: ScanSearch },
  { name: "Wireshark", level: 72, icon: Activity },
  { name: "Linux / Kali Linux", level: 75, icon: Terminal },
  { name: "Cisco Packet Tracer", level: 85, icon: Router },
  { name: "Cybersecurity Fundamentals", level: 78, icon: ShieldCheck },
  { name: "Troubleshooting", level: 88, icon: Wrench },
  { name: "System Support", level: 82, icon: Server },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 / arsenal" title="Skills & Tools">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className="group rounded-lg border border-border bg-card/60 p-4 transition-all hover:border-primary/60 hover:shadow-[0_0_30px_oklch(0.85_0.24_145/0.12)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-md border border-primary/30 bg-primary/10 p-1.5 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                </div>
                <span className="font-mono text-xs text-primary">{s.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-1000 group-hover:shadow-[0_0_8px_oklch(0.85_0.24_145/0.6)]"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
