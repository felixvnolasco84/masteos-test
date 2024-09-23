"use client";

import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { Button } from "../ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function WhatsAppButton({ title }: { title: string }) {
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
      size={"default"}
      className="rounded-md bg-green-400 text-center text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
      onClick={handleClick}
    >
      {title}
    </Button>
  );
}
