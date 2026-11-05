"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(!!token);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    setData({
      message:
        "Present this QR at the check-in desk. Staff will scan and validate your ticket.",
      tokenPreview: token.slice(0, 12) + "…",
    });
    setLoading(false);
  }, [token]);

  if (loading) {
    return <p className="text-center text-white/50">Verifying…</p>;
  }

  if (!token) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold text-white">Ticket Verification</h1>
        <p className="mt-2 text-white/60">
          No token provided. Open this page from your confirmation email QR code
          or enter the link that ends with <code>?token=…</code>
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-white">Your NEXORA 2027 Ticket</h1>
      <p className="mt-4 text-white/70">{data?.message}</p>
      <div className="mt-6 inline-block rounded-xl border border-[#7564E8]/40 bg-[#7564E8]/10 px-6 py-4">
        <p className="text-xs text-white/50">Token</p>
        <p className="font-mono text-sm text-[#B9B2FF]">{data?.tokenPreview}</p>
      </div>
      <p className="mt-6 text-sm text-white/40">
        Valid for check-in on both event days (unless single-day ticket).
        <br />
        14–15 January 2027 · JNMC, Belagavi
      </p>
    </div>
  );
}

export default function TicketVerifyPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-md card p-8">
        <Suspense fallback={<p className="text-center text-white/50">Loading…</p>}>
          <VerifyContent />
        </Suspense>
      </div>
    </div>
  );
}
