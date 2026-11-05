import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors & Partners — NEXORA 2027",
};

export default function SponsorsPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Sponsors & Partners
        </h1>
        <p className="mt-4 text-white/60">
          No sponsors have been confirmed for publication yet. Partner logos and
          names will appear here only after written approval and agreement.
        </p>

        <div className="mt-12 rounded-xl border border-dashed border-white/20 bg-white/5 p-12">
          <p className="text-white/50">
            Interested in partnering with NEXORA 2027?
          </p>
          <p className="mt-2 text-sm text-white/40">
            Contact the organising team to discuss Title, Platinum, Gold or
            category partnership opportunities.
          </p>
          <a
            href="mailto:krupapatel@klecbalc.edu.in"
            className="mt-6 inline-flex rounded-lg bg-[#7564E8] px-6 py-3 text-sm font-semibold text-white"
          >
            Enquire about Sponsorship
          </a>
        </div>

        <p className="mt-8 text-sm text-white/40">
          Suggested tiers (not sold or confirmed): Title / Presenting Partner,
          Platinum, Gold, Silver / Associate, Knowledge / Technology / Community
          Partner.
        </p>
      </div>
    </div>
  );
}
