import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>banele.sec — built with security in mind</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Banele Monamudi · <span className="text-primary">stay curious, stay secure.</span>
        </p>
      </div>
    </footer>
  );
}
