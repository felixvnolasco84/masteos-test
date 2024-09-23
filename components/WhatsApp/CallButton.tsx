"use client";

import Link from "next/link";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import React from "react";
import { Button } from "../ui/button";

export default function CallButton() {
  return (
    <Link
      target="_blank"
      onClick={() =>
        TrackGoogleAnalyticsEvent("click", "llamar", window.location.pathname)
      }
      href={"tel:5542957398"}
    >
      <Button className="text-lg" size={"lg"} variant={"contact"}>
        Llamar
      </Button>
    </Link>
  );
}
