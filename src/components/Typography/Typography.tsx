import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type H1Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;
const H1 = ({ children, className, ...props }: H1Props) => (
  <h1
    className={cn(
      "shrink grow basis-0 text-5xl font-extrabold leading-[48px] text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

type H2Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;
const H2 = ({ children, className, ...props }: H2Props) => (
  <h2
    className={cn(
      "text-3xl font-semibold leading-9 text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

type H3Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;
const H3 = ({ children, className, ...props }: H3Props) => (
  <h3
    className={cn(
      "shrink grow basis-0 text-2xl font-semibold leading-loose text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

type H4Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;
const H4 = ({ children, className, ...props }: H4Props) => (
  <h4
    className={cn("text-xl font-semibold leading-7 text-foreground", className)}
    {...props}
  >
    {children}
  </h4>
);

type ParagraphProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;
const Paragraph = ({ children, className, ...props }: ParagraphProps) => (
  <h1
    className={cn(
      "shrink grow basis-0 text-base font-normal leading-7 text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

type InlineCodeProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;
const InlineCode = ({ children, className, ...props }: InlineCodeProps) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className,
    )}
    {...props}
  >
    {children}
  </code>
);

type LeadProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;
const Lead = ({ children, className, ...props }: LeadProps) => (
  <p
    className={cn(
      "shrink grow basis-0 text-xl font-normal leading-7 text-muted-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </p>
);

type LargeProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Large = ({ children, className, ...props }: LargeProps) => (
  <div
    className={cn("text-lg font-semibold leading-7 text-foreground", className)}
    {...props}
  >
    {children}
  </div>
);

type SmallProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Small = ({ children, className, ...props }: SmallProps) => (
  <small
    className={cn("text-sm font-medium leading-none", className)}
    {...props}
  >
    {children}
  </small>
);

type MutedProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;
const Muted = ({ children, className, ...props }: MutedProps) => (
  <p
    className={cn(
      "text-sm font-medium leading-[14px] text-muted-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </p>
);

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
};
