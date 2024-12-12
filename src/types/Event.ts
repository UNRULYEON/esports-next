import { Match } from "@/types";

export type Event = {
  startTime: string;
  state: string;
  type: string;
  blockName: string;
  league: {
    name: string;
    slug: string;
  };
  match: Match;
};
