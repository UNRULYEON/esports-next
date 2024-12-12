import { Header, Events } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col p-3">
      <Header />
      <Events />
    </main>
  );
}
