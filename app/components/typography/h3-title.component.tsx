import { cn } from "~/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export function H3Title({ title, className }: Props) {
  return (
    <div
      className={cn(
        "font-bold text-2xl xl:text-[28px] leading-[130%]",
        className
      )}
    >
      {title}
    </div>
  );
}
