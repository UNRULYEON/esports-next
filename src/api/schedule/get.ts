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
  data: { date: string; events: Event[] }[];
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

  const grouped = groupEventsByDate(data.data.schedule.events);
  const sortedGrouped = sortGroupedEventsByDateAndTime(grouped);

  return {
    pages: data.data.schedule.pages,
    data: sortedGrouped,
  };
};

const groupEventsByDate = (
  data: Event[],
): { date: string; events: Event[] }[] => {
  const groupedEvents: { [date: string]: Event[] } = {};

  data.forEach((event: Event) => {
    const date = event.startTime.split("T")[0];
    if (!groupedEvents[date]) {
      groupedEvents[date] = [];
    }
    groupedEvents[date].push(event);
  });

  return Object.keys(groupedEvents).map((date) => ({
    date,
    events: groupedEvents[date],
  }));
};

const sortGroupedEventsByDateAndTime = (
  groupedEvents: { date: string; events: Event[] }[],
): { date: string; events: Event[] }[] =>
  groupedEvents
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    })
    .map((group) => ({
      date: group.date,
      events: group.events.sort(
        (a, b) =>
          new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
      ),
    }));
