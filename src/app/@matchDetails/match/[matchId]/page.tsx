"use client";

import { useMediaQuery } from "@/hooks";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MatchDetails() {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(true);

  const closeDrawer = () => {
    setOpen(false);
    router.push("/", {
      scroll: false,
    });
  };

  if (isDesktop) {
    return <div className="flex flex-1 flex-col p-3">match details</div>;
  }

  return (
    <Drawer open={open} onOpenChange={closeDrawer}>
      <DrawerTrigger asChild>trigger</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>title</DrawerTitle>
          <DrawerDescription>desc</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>footer</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
