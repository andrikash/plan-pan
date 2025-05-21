import { useTranslation } from "react-i18next";
import { Menu } from "~/components/menu/menu.component";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div>
      <Menu />
      <div className="bg-brand">landing page</div>
      {t("greeting", { defaultValue: "Hello" })}
    </div>
  );
}
