import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — NEXORA 2027",
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl prose prose-invert">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-white/50">Last updated: planning stage</p>

        <div className="mt-8 space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Data We Collect</h2>
            <p className="mt-2">
              When you register for NEXORA 2027 we collect only the information
              needed to manage your attendance: full name, email address, mobile
              number, college or organisation, participant category, city, ticket
              type and consent preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. How We Use Your Data</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Process registration and issue tickets / QR codes</li>
              <li>Send confirmation, reminder and event-update emails</li>
              <li>Manage on-site check-in and attendance records</li>
              <li>Respond to enquiries and provide event support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Sharing</h2>
            <p className="mt-2">
              We do not sell your personal data. Data may be processed by service
              providers (email delivery, hosting, database) under contractual
              obligations that protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Retention</h2>
            <p className="mt-2">
              Registration and attendance data are retained for the period
              necessary to administer the event and meet any legal or audit
              requirements, after which they are deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Your Rights</h2>
            <p className="mt-2">
              You may request access, correction or deletion of your personal
              data by contacting the organiser at krupapatel@klecbalc.edu.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-2">
              For privacy-related questions: krupapatel@klecbalc.edu.in |
              9845677868
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
