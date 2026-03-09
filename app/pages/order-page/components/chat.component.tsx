import { MessageCirclePlus, Paperclip, SendHorizonal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MainText } from "~/components/typography/main-text.component";
import Message from "./message.component";
import {
  getApiChatsChatIdMessages,
  getApiChatsChatIdMessagesOlder,
  getGetApiChatsChatIdMessagesQueryKey,
  useGetApiChatsChatIdMessages,
  usePostApiChatsChatIdMessages,
} from "~/api/messages/messages";
import { Input } from "~/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export default function Chat({
  chatId,
  senderId,
}: {
  chatId: string;
  senderId: string;
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: наступне завдання реалізувати весь чат із infinity scroll, short pulling і всім іншим
  // посилання на чат: https://chatgpt.com/share/68b6ac33-d2c4-8007-bbda-b0fb108a56a3
  const { mutate, isPending } = usePostApiChatsChatIdMessages({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getGetApiChatsChatIdMessagesQueryKey(chatId),
        });
        // TODO: Implement real success logic
        form.setValue("message", "");
      },
      onError: (error) => {
        // TODO: Implement real error logic
        // console.error("Forgot password error:", error.response?.data?.error);
      },
    },
  });

  const {
    data: messagesFromInfiniteQuery,
    fetchPreviousPage,
    hasPreviousPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["chat", chatId],
    queryFn: ({ pageParam }) => {
      if (!pageParam) {
        // перший запит: останні повідомлення
        return getApiChatsChatIdMessages(chatId);
      } else {
        // довантаження старіших
        return getApiChatsChatIdMessagesOlder(chatId, {
          beforeMessageId: pageParam,
        });
      }
    },
    getPreviousPageParam: (firstPage) => {
      const arr = firstPage?.data?.data ?? [];
      return arr[arr.length - 1]?._id ?? undefined;
    },
    getNextPageParam: (lastPage) => {},
    initialPageParam: undefined,
  });

  const messagesData =
    messagesFromInfiniteQuery?.pages?.flatMap((p) => p.data?.data ?? []) ?? [];
  console.log(messagesData, "messagesData");
  const formSchema = z.object({
    message: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      data: {
        chatId,
        sender: senderId,
        content: values.message,
        files: [],
      },
    });
  }

  // useEffect(() => {
  //   const el = containerRef.current;
  //   if (el) {
  //     el.scrollTop = el.scrollHeight;
  //   }
  // }, [messages]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(containerRef.current?.scrollTop, "scrollTop");
  //     if (containerRef.current && containerRef.current.scrollTop === 0) {
  //       // User has scrolled to the top, add your logic here
  //       console.log("User scrolled to top");
  //       fetchPreviousPage({
  //         pageParam: messagesFromInfiniteQuery?.pages[0]?.data[0]._id,
  //       });
  //       // e.g., fetchPreviousPage();
  //     }
  //   };

  //   const el = containerRef.current;
  //   if (el) {
  //     el.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (el) {
  //       el.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  //   {
  //     _id: "64a55c7fa2b3a2d7a8e2b5b9",
  //     chatId: "603e1f1b1234abcd5678ef90",
  //     sender: "123",
  //     content: "Hello, how can I help you? #1",
  //     attachments: [
  //       {
  //         url: "https://your-s3-bucket.s3.amazonaws.com/uploads/file.jpg",
  //         fileType: "image/jpeg",
  //       },
  //     ],
  //     isRead: false,
  //     createdAt: "2024-01-01T12:00:00Z",
  //   },
  //   {
  //     _id: "64a55c7fa2b3a2d7a8e2b5b9",
  //     chatId: "603e1f1b1234abcd5678ef90",
  //     sender: "234",
  //     content: "Second message #2",
  //     attachments: [],
  //     isRead: false,
  //     createdAt: "2024-01-01T12:00:00Z",
  //   },
  // ];
  return (
    <div className="rounded-4xl overflow-hidden">
      <div className="bg-gray-20 py-2.5 flex items-center justify-center">
        <MainText
          className="text-gray-100"
          text={t("Chat", {
            defaultValue: "Chat",
          })}
        />
      </div>
      <div
        className="bg-gray-10 py-12 px-12 overflow-y-scroll h-[50dvh]"
        ref={containerRef}
      >
        {!messagesData?.length && (
          <div className="flex flex-col items-center justify-center gap-y-4 py-16">
            <MessageCirclePlus className="w-16 h-16 text-gray-60" />
            <MainText
              text={t("No messages yet", {
                defaultValue: "No messages yet",
              })}
            />
          </div>
        )}
        <div className="flex gap-y-2 flex-col">
          {[...(messagesData ?? [])].reverse().map((message) => (
            <Message key={message._id} message={message} senderId={senderId} />
          ))}
        </div>
      </div>
      <div className="bg-gray-20 py-2.5 flex items-center px-12 justify-between w-full">
        <div className="flex items-center gap-x-1 w-full mr-10">
          <Paperclip className="text-gray-60 h-8 w-8 mr-7" />
          <div className="flex gap-x-1 text-gray-60 items-end w-full">
            <Form {...form}>
              <form
                className="w-full flex items-center gap-x-1"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="bg-gray-20 border-none w-full"
                          placeholder={t("Please write message ...", {
                            defaultValue: "Please write message ...",
                          })}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="px-8 py-2" type="submit" variant="ghost">
                  <SendHorizonal className="text-gray-60 min-h-8 min-w-8 shrink-0" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
