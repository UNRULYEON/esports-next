import { schedule } from "@/api";
import { Event, Typography, ScrollArea } from "@/components";
import { format } from "date-fns";
import { Fragment } from "react";

export const Events = async () => {
  const { data } = await schedule.get();

  return (
    <ScrollArea>
      {data.map(({ date, events }) => (
        <div key={date} className="mb-5 flex flex-col gap-1">
          <Typography.Large className="sticky top-0 z-10 bg-background py-1">
            {format(new Date(date), "PPPP ")}
          </Typography.Large>
          <div className="flex w-full flex-col gap-3">
            {events.map((event) => {
              if (event.type === "show") {
                return <Fragment key={event.league.name}>SHOW</Fragment>;
              }

              if (event.type === "match") {
                return <Event key={event.match.id} data={event} />;
              }
            })}
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};
