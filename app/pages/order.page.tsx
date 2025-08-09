import { useTranslation } from "react-i18next";
import { H2Title } from "~/components/typography/h2-title.component";

export default function Order() {
  const { t } = useTranslation();
  return (
    <div>
      <H2Title
        title={t("Place Order", {
          defaultValue: "Place Order",
        })}
      />
    </div>
  );
}
