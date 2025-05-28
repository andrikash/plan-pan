import { cn } from "~/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export function H4Title({ title, className }: Props) {
  return (
    <div
      className={cn("font-bold text-lg xl:text-2xl leading-[130%]", className)}
    >
      {title}
    </div>
  );
}
