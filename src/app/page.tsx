import { Header, Events } from "@/components";

export default function Home() {
  return (
    <div className="grid w-full grid-rows-[auto,1fr] md:max-w-96">
      <Header />
      <Events />
    </div>
  );
}
