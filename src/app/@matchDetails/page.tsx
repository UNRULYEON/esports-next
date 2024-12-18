"use client";

import { useMediaQuery } from "@/hooks";

export default function Match() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <div className="flex flex-1 flex-col p-3">placeholder</div>;
  }

  return null;
}
