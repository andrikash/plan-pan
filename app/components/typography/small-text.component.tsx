import { cn } from "~/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export function SmallText({ text, className }: Props) {
  return (
    <div className={cn("text-sm leading-[150%] font-normal", className)}>
      {text}
    </div>
  );
}
