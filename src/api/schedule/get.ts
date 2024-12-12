"use server";

import { BASE_API } from "@/constants";
import { Event } from "@/types";

type Schedule = {
  data: {
    schedule: {
      pages: {
        older: string;
        newer: string | null;
      };
      events: Event[];
    };
  };
};

type Events = {
  pages: {
    older: string;
    newer: string | null;
  };
  data: Event[];
};

export const get = async (): Promise<Events> => {
  const url = new URL(`${BASE_API}/persisted/gw/getSchedule`);
  url.searchParams.set("hl", "en-US");

  const response = await fetch(
    "https://esports-api.lolesports.com/persisted/gw/getSchedule?hl=en-US",
    {
      headers: {
        "x-api-key": "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z",
      },
    },
  );

  const data = (await response.json()) as Schedule;

  return {
    pages: data.data.schedule.pages,
    data: data.data.schedule.events.sort(
      (a, b) =>
        new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
    ),
  };
};
