import { useMemo, useState } from "react";
import { Section } from "./Section";
import { ImageOff, Network, ScanSearch, Activity, Bug, Router } from "lucide-react";

type Project = {
  title: string;
  category: "Networking" | "Pentesting" | "Analysis";
  description: string;
  tools: string[];
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
};

const PROJECTS: Project[] = [
  {
    title: "Network Design — Cisco Packet Tracer",
    category: "Networking",
    description:
      "Designed a multi-branch enterprise network with routing, VLAN segmentation and DHCP services across multiple sites.",
    tools: ["Cisco Packet Tracer", "OSPF", "DHCP"],
    skills: ["Routing", "VLANs", "Network Design"],
    icon: Router,
  },
  {
    title: "Nmap Network Scanning",
    category: "Pentesting",
    description:
      "Performed reconnaissance and service enumeration on a lab network — host discovery, port scans, OS fingerprinting and version detection.",
    tools: ["Nmap", "Kali Linux"],
    skills: ["Recon", "Enumeration", "Reporting"],
    icon: ScanSearch,
  },
  {
    title: "Wireshark Packet Analysis",
    category: "Analysis",
    description:
      "Captured and dissected HTTP, DNS and ARP traffic to identify suspicious activity and reconstruct sessions for incident response practice.",
    tools: ["Wireshark", "tcpdump"],
    skills: ["Traffic Analysis", "Protocols", "IR Basics"],
    icon: Activity,
  },
  {
    title: "DHCP Starvation Attack Simulation",
    category: "Pentesting",
    description:
      "Simulated a DHCP starvation attack in a controlled lab, then deployed DHCP snooping and port-security mitigations.",
    tools: ["Yersinia", "Kali Linux", "Cisco IOS"],
    skills: ["L2 Attacks", "Mitigation", "Switch Hardening"],
    icon: Bug,
  },
  {
    title: "VLAN Configuration Lab",
    category: "Networking",
    description:
      "Configured and tested 802.1Q VLAN trunking, inter-VLAN routing and access ports across a multi-switch topology.",
    tools: ["Cisco Packet Tracer", "802.1Q"],
    skills: ["Switching", "Trunking", "Inter-VLAN Routing"],
    icon: Network,
  },
];

const FILTERS = ["All", "Networking", "Pentesting", "Analysis"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section id="projects" eyebrow="03 / payloads" title="Projects & Labs">
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-md border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
              filter === f
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_40px_oklch(0.85_0.24_145/0.15)]"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-background to-card">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <Icon className="relative h-14 w-14 text-primary/70 transition-transform group-hover:scale-110" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <ImageOff className="h-3 w-3" /> screenshot
                </span>
                <span className="absolute left-3 top-3 rounded-md border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">Tools</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span key={t} className="rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">Skills</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.skills.map((s) => (
                      <span key={s} className="rounded-full border border-primary/30 px-2 py-0.5 text-[11px] text-primary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
