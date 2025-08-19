import { cn } from "~/lib/utils";

interface Props {
  title: string | React.ReactNode;
  className?: string;
}

export function H2Title({ title, className }: Props) {
  return (
    <div className={cn("text-[28px] xl:text-[32px] leading-[130%]", className)}>
      {title}
    </div>
  );
}
