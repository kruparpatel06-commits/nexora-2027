import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0e1a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">
              NEXORA <span className="text-[#7564E8]">2027</span>
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Think Beyond Today. Lead What's Next.
            </p>
            <p className="mt-4 text-sm text-white/50">
              14–15 January 2027<br />
              JNMC, Belagavi, Karnataka
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-[#B9B2FF]">About</Link></li>
              <li><Link href="/agenda" className="hover:text-[#B9B2FF]">Agenda</Link></li>
              <li><Link href="/speakers" className="hover:text-[#B9B2FF]">Speakers</Link></li>
              <li><Link href="/register" className="hover:text-[#B9B2FF]">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="mailto:krupapatel@klecbalc.edu.in" className="hover:text-[#B9B2FF]">krupapatel@klecbalc.edu.in</a></li>
              <li><a href="tel:+919845677868" className="hover:text-[#B9B2FF]">+91 98456 77868</a></li>
              <li className="pt-2"><Link href="/privacy" className="hover:text-[#B9B2FF]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#B9B2FF]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2027 NEXORA — The Future of Business Conference. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
