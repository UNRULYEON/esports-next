"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/server";
import { EyeOffIcon } from "lucide-react";
import type { Event as EventType } from "@/types";
import {
  Card,
  CardContent,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import { useFormatter } from "next-intl";
import { useRouter } from "next/navigation";

type EventProps = {
  data: EventType;
};

export const Event = ({ data: event }: EventProps) => {
  const router = useRouter();
  const format = useFormatter();
  const [isScoreRevealed, setIsScoreRevealed] = useState(true);
  const [isMatchRevealed, setIsMatchRevealed] = useState(
    !event.match.flags.includes("isSpoiler"),
  );

  return (
    <TooltipProvider>
      <Card
        className="relative bg-card pt-6 transition hover:bg-accent"
        onClick={() =>
          isMatchRevealed && router.push(`/match/${event.match.id}`)
        }
      >
        <CardContent className="flex flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center gap-3 font-bold">
            <div className="flex w-full items-center justify-end gap-5">
              <div className="flex items-center gap-3">
                <div>{event.match.teams[0].code}</div>
                <Image
                  src={event.match.teams[0].image}
                  alt={event.match.teams[0].name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px]"
                />
              </div>
              <div>{event.match.teams[0].result.gameWins}</div>
            </div>
            <Separator
              orientation="vertical"
              className="h-6 w-[2px] rounded bg-accent-foreground"
            />
            <div className="flex w-full items-center gap-5">
              <div>{event.match.teams[1].result.gameWins}</div>
              <div className="flex items-center gap-3">
                <Image
                  src={event.match.teams[1].image}
                  alt={event.match.teams[1].name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px]"
                />
                <div>{event.match.teams[1].code}</div>
              </div>
            </div>
            {!isScoreRevealed && (
              <button className="absolute flex h-10 w-14 place-content-center rounded-lg border-2 bg-secondary p-1.5">
                <EyeOffIcon
                  className="w-5 cursor-pointer"
                  onClick={() => setIsScoreRevealed(true)}
                />
              </button>
            )}
          </div>
          <div className="flex w-full items-center justify-center gap-2 uppercase text-muted-foreground">
            <Typography.Small className="flex w-full items-center justify-end font-bold">
              <time dateTime={new Date(event.startTime).toISOString()}>
                {format.dateTime(new Date(event.startTime), {
                  timeStyle: "short",
                })}
              </time>
            </Typography.Small>
            <Typography.Small className="font-bold">•</Typography.Small>
            <div className="flex items-center">
              <Typography.Small className="w-max font-bold">
                {event.blockName}
              </Typography.Small>
            </div>
            <Typography.Small className="font-bold">•</Typography.Small>
            {event.match.strategy.type === "bestOf" && (
              <Typography.Small className="flex w-full items-center font-bold">
                <Tooltip>
                  <TooltipTrigger>
                    {"BO" + event.match.strategy.count}
                  </TooltipTrigger>
                  <TooltipContent>
                    <Typography.Paragraph className="normal-case">
                      Best of {event.match.strategy.count}
                    </Typography.Paragraph>
                  </TooltipContent>
                </Tooltip>
              </Typography.Small>
            )}
          </div>
          {!isMatchRevealed && (
            <button
              className="absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer flex-col place-content-center items-center gap-2 rounded-md bg-background p-1.5 hover:bg-accent"
              onClick={() => setIsMatchRevealed(true)}
            >
              <EyeOffIcon className="w-5 cursor-pointer" />
              <Typography.Small className="uppercase text-muted-foreground">
                Click to reveal
              </Typography.Small>
            </button>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};
