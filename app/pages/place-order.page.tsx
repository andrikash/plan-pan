import { Button } from "~/components/ui/button";
import { SendOrder } from "./landing-page/components/send-order/send-order.component";
import { Locales } from "~/const/constants";
import { useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { MainText } from "~/components/typography/main-text.component";
import { H2Title } from "~/components/typography/h2-title.component";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language || Locales.EN;
  return (
    <div>
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
          title={t("Place Order", {
            defaultValue: "Place Order",
          })}
        />
      </div>
      <div className="pb-10">
        <SendOrder
          onSuccess={(data) => {
            toast(
              t("orderSent", {
                defaultValue: "Order created successfully!",
              }),
              {
                type: "success",
              }
            );
            // TODO: eliminate data.data, find better way to get properties
            navigate(`/${lang}/dashboard/order/${data.data._id}`);
          }}
        />
      </div>
    </div>
  );
};

export default PlaceOrder;
