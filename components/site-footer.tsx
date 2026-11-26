import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="logo">
          <span>CINEMA</span>
          <span>01</span>
        </Link>
        <p>
          A film production studio. We craft visual stories that linger.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/films">Films</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="footer-bottom">
        <p>© 2026 CINEMA. All rights reserved.</p>
        <p>
          <a href="mailto:hello@cinema.example">hello@cinema.example</a>
        </p>
      </div>
    </footer>
  );
}
