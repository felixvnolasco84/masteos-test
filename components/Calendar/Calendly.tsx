"use client";

import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

type CalendlyProps = {
  url: string;
};

const Calendly = ({ url }: CalendlyProps) => {
  useEffect(() => {
    // whatever stuff you need here

    return () => {
      // whatever cleanup stuff you need here
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <InlineWidget
        styles={{ margin: "0px", height: "100%", width: "100%" }}
        url={url}
      />
    </div>
  );
};

export default Calendly;
