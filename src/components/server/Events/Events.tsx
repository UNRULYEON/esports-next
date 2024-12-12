import { schedule } from "@/api";
import { Event } from "@/components";

export const Events = async () => {
  const { data } = await schedule.get();

  return (
    <code>
      {data.map((event, i) => (
        <Event key={i} data={event} />
      ))}
    </code>
  );
};
