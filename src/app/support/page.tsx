"use client"

import { professionals } from "@/data/professionals";
import { SupportCard } from "@/components/support-card";

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Technical Support</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Our team of expert IT professionals is here to help you with any issue. Browse their profiles and request support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {professionals.map((professional) => (
          <SupportCard key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
}
