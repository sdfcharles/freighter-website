import Link from "next/link";
import { SITE, LINKS } from "@/lib/constants";

const footerLinks = [
  { label: "GitHub", href: SITE.github, external: true },
  { label: "Changelog", href: "/changelog" },
  { label: "Feedback", href: LINKS.feedback, external: true },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer>
      <div className="max-w-[1024px] mx-auto px-6 h-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-text-secondary">
        <p>&copy; 2026 Stellar Development Foundation</p>
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
