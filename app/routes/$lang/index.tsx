import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Menu } from "~/components/menu/menu.component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <Menu />
      <div className="bg-brand">landing page</div>
      {t("greeting")}
    </div>
  );
}
