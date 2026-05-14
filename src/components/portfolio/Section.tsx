import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="text-muted-foreground">//</span> {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
