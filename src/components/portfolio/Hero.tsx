import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Terminal } from "lucide-react";

const ROLES = [
  "Cybersecurity Specialist",
  "IT Support Technician",
  "Ethical Hacker in Training",
  "Network Defender",
];

function useTyping(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next.length === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, oklch(0.85 0.24 145 / 0.15), transparent 60%), radial-gradient(500px circle at 80% 70%, oklch(0.5 0.2 250 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </div>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Banele Monamudi
          </h1>
          <p className="mt-3 font-mono text-lg text-primary md:text-xl">
            <span className="text-muted-foreground">$ role:</span> {typed}
            <span className="terminal-cursor" />
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Driven by a passion for{" "}
            <span className="text-foreground">networking</span>,{" "}
            <span className="text-foreground">ethical hacking</span> and{" "}
            <span className="text-foreground">defensive security</span>. I build
            secure networks, hunt vulnerabilities, and keep systems running.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:glow"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-5 py-2.5 font-mono text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { p: "whoami", o: "banele_monamudi" },
    { p: "cat about.txt", o: "Aspiring cybersecurity specialist." },
    { p: "nmap -sV target.local", o: "22/tcp ssh OpenSSH 8.9 ✓" },
    { p: "wireshark --capture eth0", o: "packets captured: 1,284" },
    { p: "echo $STATUS", o: "ready_to_be_hired" },
  ];
  const [shown, setShown] = useState<{ p: string; o: string }[]>([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(id);
    }, 700);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-xl bg-primary/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card/90 shadow-[0_0_60px_oklch(0.85_0.24_145/0.15)]">
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>~/portfolio — zsh</span>
          <div className="ml-auto flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
          </div>
        </div>
        <div className="min-h-[280px] p-5 font-mono text-sm scanlines">
          {shown.map((l, idx) => (
            <div key={idx} className="mb-2">
              <div>
                <span className="text-primary">➜</span>{" "}
                <span className="text-muted-foreground">~</span>{" "}
                <span className="text-foreground">{l.p}</span>
              </div>
              <div className="pl-4 text-primary/90">{l.o}</div>
            </div>
          ))}
          <div>
            <span className="text-primary">➜</span>{" "}
            <span className="text-muted-foreground">~</span>
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
