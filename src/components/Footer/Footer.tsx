import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="inline-flex items-center justify-center p-6 font-mono font-bold text-zinc-400">
      <span>
        Build with &lt;3. Not affiliated with Riot Games. Source code on{" "}
        <Link
          className="inline-flex underline-offset-4 hover:underline"
          href="https://github.com/UNRULYEON/esports-next"
          target="_blank"
        >
          Github
        </Link>
      </span>
    </footer>
  );
};
