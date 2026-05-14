import { useState } from "react";
import { Section } from "./Section";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Section id="contact" eyebrow="06 / connect" title="Get In Touch">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <p className="text-base text-muted-foreground">
            Open to junior cybersecurity, IT support and networking roles. Drop a message —
            response within 24 hours. Use email address form on the left under constraction
          </p>

          <a href="mailto:banele.monamudi9@gmail.com" className="flex items-center gap-3 rounded-lg border border-border bg-card/60 p-3 transition-colors hover:border-primary/60">
            <span className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary"><Mail className="h-4 w-4" /></span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">Email</p>
              <p className="text-sm text-foreground">banele.monamudi@example.com</p>
            </div>
          </a>
          <a href="www.linkedin.com/in/banele-monamudi-101493371" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card/60 p-3 transition-colors hover:border-primary/60">
            <span className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary"><Linkedin className="h-4 w-4" /></span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">LinkedIn</p>
              <p className="text-sm text-foreground">linkedin.com/in/your-handle</p>
            </div>
          </a>
          <a href="N/A" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card/60 p-3 transition-colors hover:border-primary/60">
            <span className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary"><Github className="h-4 w-4" /></span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">GitHub</p>
              <p className="text-sm text-foreground">github.com/your-handle</p>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 rounded-lg border border-border bg-card/60 p-6">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div className="mb-4">
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-primary">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:glow"
          >
            {sent ? (<><Check className="h-4 w-4" /> Message sent</>) : (<><Send className="h-4 w-4" /> Send message</>)}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-primary">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
