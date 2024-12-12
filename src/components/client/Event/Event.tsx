"use client";

import type { Event as EventType } from "@/types";
import { date } from "@/utils";

type EventProps = {
  data: EventType;
};

export const Event = ({ data: { startTime } }: EventProps) => {
  return <div>{date.format(new Date(startTime), "MM/dd/yyyy")}</div>;
};
