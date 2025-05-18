import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Menu } from "~/components/menu/menu.component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// This tells remix to load the "home" namespace
export const handle = { i18n: "common" };

export default function Index() {
  const { t } = useTranslation();
  console.log(t("greeting"), "t");
  return (
    <div className="py-">
      <Menu />
      <div className="bg-brand">landing page</div>
      {t("greeting")}
    </div>
  );
}
