export type Team = {
  name: string;
  code: string;
  image: string;
  result: {
    outcome: string;
    gameWins: number;
  };
  record: {
    wins: number;
    losses: number;
  };
};
