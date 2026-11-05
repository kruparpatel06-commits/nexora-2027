import { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Venue & Contact — NEXORA 2027",
};

export default function VenuePage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Venue & Contact
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-center gap-3 text-[#7564E8]">
              <MapPin size={24} />
              <h2 className="text-lg font-semibold text-white">Venue</h2>
            </div>
            <p className="mt-4 text-white/80">
              <strong>JNMC, Belagavi, Karnataka</strong>
            </p>
            <p className="mt-2 text-sm text-white/50">
              Exact hall / auditorium and capacity confirmation pending. Full
              address, entry gates, parking and accessibility details will be
              published once confirmed.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3 text-[#7564E8]">
              <Mail size={24} />
              <h2 className="text-lg font-semibold text-white">Contact</h2>
            </div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/40" />
                <a
                  href="mailto:krupapatel@klecbalc.edu.in"
                  className="hover:text-[#B9B2FF]"
                >
                  krupapatel@klecbalc.edu.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white/40" />
                <a href="tel:+919845677868" className="hover:text-[#B9B2FF]">
                  +91 98456 77868
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
