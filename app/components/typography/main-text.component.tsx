import { cn } from "~/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export function MainText({ text, className }: Props) {
  return (
    <div className={cn("xl:text-xl leading-[150%] font-normal", className)}>
      {text}
    </div>
  );
}
