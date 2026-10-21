import { navLinks } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="site-header shell">
      <a href="#hero" className="wordmark" aria-label="Hanin Taclay — home">ht<span>.</span></a>
      <nav aria-label="Main navigation">
        {navLinks.filter((link) => link.href !== "#hero").map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
