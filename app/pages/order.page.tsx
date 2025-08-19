import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { Button } from "~/components/ui/button";
import { Locales } from "~/const/constants";

export default function Order() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language || Locales.EN;
  return (
    <div className="px-20 py-20">
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
              № 12345
            </>
          }
        />
      </div>
      <div className="pb-10 flex flex-col gap-y-10">Content</div>
    </div>
  );
}
