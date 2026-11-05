import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers — NEXORA 2027",
  description: "Prospective speakers for NEXORA 2027. All listed as proposed until confirmed.",
};

const prospectiveSpeakers = [
  "Deepak Shapeti",
  "Murali Srinivasa",
  "Swathi Gururaj Kulkarni",
  "Krishna Shinde",
  "Irina Ghose",
  "Rahul Chari",
  "Ankush Sabharwal",
  "Chaitanya Ramalingegowda",
];

export default function SpeakersPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Speakers</h1>
        <p className="mt-2 text-white/60">
          The following names have been discussed as prospective invitees. None
          are confirmed until formal acceptance and organiser verification.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prospectiveSpeakers.map((name) => (
            <div
              key={name}
              className="card flex flex-col items-center p-6 text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-[#B9B2FF]">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
              <p className="mt-1 text-sm text-white/50">Topic & details TBD</p>
              <span className="mt-3 inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                Proposed / Awaiting confirmation
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">
          Speaker profiles, photographs and session topics will be published once
          confirmed. Do not treat any listing above as a confirmed commitment.
        </p>
      </div>
    </div>
  );
}
