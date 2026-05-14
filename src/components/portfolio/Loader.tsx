import { useEffect, useState } from "react";

export function HackerLoader() {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const seq = [
    "> initializing secure shell...",
    "> loading modules: nmap, wireshark, kali...",
    "> bypassing firewall... [OK]",
    "> establishing encrypted tunnel...",
    "> access granted. welcome, operator.",
  ];
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setLines((l) => [...l, seq[i]]);
      i++;
      if (i >= seq.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
    }, 240);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background scanlines">
      <div className="w-[min(92vw,560px)] rounded-md border border-primary/30 bg-card/80 p-5 font-mono text-sm shadow-[0_0_40px_oklch(0.85_0.24_145/0.25)]">
        <div className="mb-3 flex items-center gap-2 border-b border-border pb-2 text-xs text-muted-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
          <span className="ml-2">root@banele:~#</span>
        </div>
        {lines.map((l, i) => (
          <div key={i} className="text-primary">{l}</div>
        ))}
        <div className="text-primary terminal-cursor" />
      </div>
    </div>
  );
}
