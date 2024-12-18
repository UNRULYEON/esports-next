import { Typography, Link } from "@/components";

export const Footer = () => {
  return (
    <footer className="inline-flex items-center justify-center p-1.5 pb-0 md:p-6 md:pb-0">
      <Typography.Muted className="text-center font-mono font-bold leading-6">
        Build with &lt;3. Not affiliated with Riot Games. Source code on{" "}
        <Link href="https://github.com/UNRULYEON/esports-next" target="_blank">
          Github
        </Link>
      </Typography.Muted>
    </footer>
  );
};
