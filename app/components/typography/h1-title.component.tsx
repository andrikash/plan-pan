import { cn } from "~/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export function H1Title({ title, className }: Props) {
  return (
    <div
      className={cn(
        "font-bold text-[32px] xl:text-[40px] leading-[130%]",
        className
      )}
    >
      {title}
    </div>
  );
}
