"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { PopupModal } from "react-calendly";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const CustomModalCalendly = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);

  return (
    <div className="w-full">
      <Button
        type="reset"
        className="w-full"
        size={"contact"}
        variant={"contact"}
        onClick={() => {
          TrackGoogleAnalyticsEvent(
            "click",
            "agendar_cita",
            window.location.pathname
          );
          setIsOpen(true);
        }}
      >
        Agenda una cita
      </Button>
      <PopupModal
        url={url}
        // pageSettings={props.pageSettings}
        // utm={props.utm}
        // prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document?.getElementById("root") as HTMLElement}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(CustomModalCalendly), {
  ssr: false,
});
