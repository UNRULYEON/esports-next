import { Team } from "@/types";

export type Match = {
  id: string;
  flags: string[];
  teams: Team[];
  strategy: {
    type: string;
    count: number;
  };
};
