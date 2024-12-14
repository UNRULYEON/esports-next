import { Match } from "@/types";

export type Event = {
  startTime: string;
  state: string;
  type: "show" | "match";
  blockName: string;
  league: {
    name: string;
    slug: string;
  };
  match: Match;
};
