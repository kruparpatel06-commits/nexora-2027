import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — NEXORA 2027",
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="mt-2 text-white/50">Last updated: planning stage</p>

        <div className="mt-8 space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Event Registration</h2>
            <p className="mt-2">
              Registration for NEXORA 2027 is subject to availability and
              organiser approval. Ticket prices displayed on the website are
              provisional until formally approved. Payment, if required, must be
              completed according to the instructions provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Tickets & Check-in</h2>
            <p className="mt-2">
              Each confirmed registration receives one unique QR ticket valid for
              the purchased access (two-day or single-day). The same attendee may
              check in once per event day. Duplicate check-ins on the same day
              are not permitted. Tickets are non-transferable unless a transfer
              policy is published by the organiser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Cancellation & Refunds</h2>
            <p className="mt-2">
              Refund, cancellation and ticket-transfer policies have not yet been
              finalised. These will be published before paid registration opens.
              Until then, registrations are held pending further communication
              from the organiser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Code of Conduct</h2>
            <p className="mt-2">
              Attendees are expected to behave professionally and respectfully.
              The organiser reserves the right to refuse entry or remove any
              person whose conduct is disruptive or harmful.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Changes to the Event</h2>
            <p className="mt-2">
              The organiser may modify the agenda, speakers, venue details or
              schedule as needed. Significant changes will be communicated to
              registered attendees via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-2">
              krupapatel@klecbalc.edu.in | 9845677868
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
