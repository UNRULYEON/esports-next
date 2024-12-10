import { AnchorHTMLAttributes } from "react";
import type { LinkProps as NextLinkProps } from "next/link";
import * as NextLink from "next/link";
import { cn } from "@/lib/utils";

type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink.default
      className={cn(
        "inline-flex underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink.default>
  );
};
