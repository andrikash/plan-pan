import { cn } from "~/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export function SecondaryText({ text, className }: Props) {
  return (
    <div
      className={cn("text-sm xl:text-lg leading-[150%] font-normal", className)}
    >
      {text}
    </div>
  );
}
