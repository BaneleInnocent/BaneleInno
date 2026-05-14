import { Section } from "./Section";
import { Download, FileText } from "lucide-react";

export function CV() {
  return (
    <Section id="cv" eyebrow="04 / dossier" title="Curriculum Vitae">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-lg border border-border bg-card/60 p-6">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Banele Monamudi</h3>
              <p className="font-mono text-xs text-primary">Cybersecurity & IT Support Specialist</p>
            </div>
            <FileText className="h-6 w-6 text-primary" />
          </div>

          <Block label="Experience">
            <Item title="IT Support — Lab & Personal Projects" sub="2023 — Present">
              Hands-on troubleshooting, system imaging, network setup and end-user support in
              educational and home-lab environments.
            </Item>
          </Block>

          <Block label="Education">
            <Item title="NCV Information Technology & Computer Science" sub="Completed">
              Networking, programming fundamentals, systems analysis and IT support.
            </Item>
          </Block>

          <Block label="Core Skills">
            <p className="text-sm text-muted-foreground">
              Networking · VLANs · DHCP · Routing · Nmap · Wireshark · Linux/Kali · Cisco Packet
              Tracer · Cybersecurity Fundamentals · Troubleshooting · System Support
            </p>
          </Block>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card/60 p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Download</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">Get the full CV</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Grab a PDF copy with full experience, education and contact details.
          </p>
          <a
            href="/cv.pdf"
            download
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:glow"
          >
            <Download className="h-4 w-4" /> Download CV (PDF)
          </a>
          <p className="mt-3 font-mono text-[11px] text-muted-foreground">
            <span className="text-primary">$</span> wget banele-cv.pdf
          </p>
        </div>
      </div>
    </Section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Item({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        <span className="font-mono text-xs text-muted-foreground">{sub}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
