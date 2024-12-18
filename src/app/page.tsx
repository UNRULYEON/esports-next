import { Header, Events } from "@/components";

export default function Home() {
  return (
    <div className="grid w-full max-w-96 grid-rows-[auto,1fr]">
      <Header />
      <Events />
    </div>
  );
}
