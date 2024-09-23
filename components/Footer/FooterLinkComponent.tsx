"use client";

import { api } from "@/convex/_generated/api";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { useMutation } from "convex/react";
import React from "react";
import { Button } from "../ui/button";

export default function FooterLinkComponent() {
  const create = useMutation(api.contact.create);

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent(
      "click",
      "enviar_mensaje",
      window.location.pathname
    );

    const promise = create();

    if (promise) {
      promise.then((url) => {
        if (url) {
          window.open(url, "_blank");
        }
      });
    }
  };

  return (
    <Button
      className="text-lg underline"
      variant={"ghost"}
      size={"sm"}
      onClick={handleClick}
    >
      WHATSAPP
    </Button>
  );
}
