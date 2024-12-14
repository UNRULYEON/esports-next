"use client";

import type { Event as EventType } from "@/types";

type EventProps = {
  data: EventType;
};

export const Event = ({ data }: EventProps) => {
  return (
    <div>
      {data.match.teams[0].code} vs {data.match.teams[1].code}
    </div>
  );
};
