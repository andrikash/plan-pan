import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { Button } from "~/components/ui/button";
import { Locales } from "~/const/constants";
import Chat from "./components/chat.component";
import { useGetApiOrdersId } from "~/api/orders/orders";
import { useGetApiAuthProfile } from "~/api/auth/auth";

export default function Order() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: order } = useGetApiOrdersId(id ?? "");
  // TODO: fix type
  const chatId = order?.data?.data?.chat?._id;
  const { data: user } = useGetApiAuthProfile();
  const senderId = user?.data?._id;

  const lang = i18n.language || Locales.EN;
  return (
    <div className="px-20 py-6">
      <div className="w-full justify-center items-center relative flex flex-col mb-10">
        <Button
          variant="ghost"
          className="absolute left-0 ml-20"
          onClick={() => navigate(`/${lang}/dashboard`)}
        >
          <ArrowLeft />
          <MainText
            text={t("Back to Orders", {
              defaultValue: "Back to Orders",
            })}
            className="mt-1"
          />
        </Button>
        <H2Title
          title={
            <>
              {t("Order", {
                defaultValue: "Order",
              })}{" "}
              № {order?.data?.data?.orderId}
            </>
          }
        />
      </div>
      <div className="flex flex-col gap-y-10 w-8/12">
        <Chat chatId={chatId} senderId={senderId} />
      </div>
    </div>
  );
}
