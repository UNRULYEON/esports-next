import Link from "next/link";
import { Typography } from "../Typography";

export const Footer = () => {
  return (
    <footer className="inline-flex items-center justify-center p-6">
      <Typography.Muted className="font-mono font-bold">
        Build with &lt;3. Not affiliated with Riot Games. Source code on{" "}
        <Link
          className="inline-flex underline-offset-4 hover:underline"
          href="https://github.com/UNRULYEON/esports-next"
          target="_blank"
        >
          Github
        </Link>
      </Typography.Muted>
    </footer>
  );
};
