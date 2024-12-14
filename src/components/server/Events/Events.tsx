import { schedule } from "@/api";
import { Event, Typography } from "@/components";
import { format } from "date-fns";
import { Fragment } from "react";

export const Events = async () => {
  const { data } = await schedule.get();

  return (
    <code>
      {data.map(({ date, events }, i) => (
        <Fragment key={i}>
          <Typography.Large>{format(new Date(date), "PPPP ")}</Typography.Large>
          {events.map((event, i) => {
            if (event.type === "show") {
              return <Fragment key={i}>SHOW</Fragment>;
            }

            if (event.type === "match") {
              return <Event key={i} data={event} />;
            }
          })}
        </Fragment>
      ))}
    </code>
  );
};
