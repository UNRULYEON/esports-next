import { schedule } from "@/api";
import { Event } from "@/components";
import { format } from "date-fns";
import { Fragment } from "react";

export const Events = async () => {
  const { data } = await schedule.get();

  return (
    <code>
      {data.map(({ date, events }, i) => (
        <Fragment key={i}>
          <h2>{format(new Date(date), "PPPP ")}</h2>
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
