import { Button } from "~/components/ui/button";
import { SendOrder } from "../landing-page/components/send-order/send-order.component";
import { Locales } from "~/const/constants";
import { useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { MainText } from "~/components/typography/main-text.component";
import { H2Title } from "~/components/typography/h2-title.component";
import { toast } from "react-toastify";
import { ProfileInformation } from "./components/profile-form.component";
import { ChangePassword } from "./components/change-password.component";

const PersonalInformation = () => {
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
          title={t("Personal Details", {
            defaultValue: "Personal Details",
          })}
        />
      </div>
      <div className="pb-10 flex flex-col gap-y-10">
        <ProfileInformation />
        <ChangePassword />
      </div>
    </div>
  );
};

export default PersonalInformation;
