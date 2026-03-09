import { formatDate } from "date-fns";
import { CheckCheck } from "lucide-react";
import { SecondaryText } from "~/components/typography/secondary-text.component";
import { cn } from "~/lib/utils";
import { Message as MessageType } from "~/types/api";

interface MessageProps {
  message: MessageType;
  senderId: string;
}

export default function Message({ message, senderId }: MessageProps) {
  const orientation = senderId === message.sender ? "right" : "left";
  const isRight = orientation === "right";
  return (
    <div className={cn("w-full", isRight && "flex justify-end")}>
      <div
        className={cn(
          {
            "bg-secondary-100 px-3 py-2 rounded-2xl rounded-br-none text-white":
              isRight,
            "bg-white px-3 py-2 rounded-2xl rounded-bl-none text-gray-100":
              !isRight,
          },
          "max-w-1/2 w-fit"
        )}
      >
        <SecondaryText text={message.content ?? ""} className="mb-2" />
        <div className="flex items-center gap-x-2 w-full justify-end text-[13px]">
          <div>{formatDate(message.createdAt ?? "", "HH:mm")}</div>
          {isRight && <CheckCheck className="w-3.5 h-3.5" />}
        </div>
      </div>
    </div>
  );
}
