"use client";

import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function WhatsAppComponent() {
  return (
    <div className="sticky bottom-2 right-2 order-9 flex flex-col items-end justify-end gap-2">
      <CallButton />
      <WhatsAppButton title="WhatsApp" />
    </div>
  );
}
