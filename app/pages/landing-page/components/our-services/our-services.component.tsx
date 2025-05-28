import { useNavigate } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { H3Title } from "~/components/typography/h3-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { Button } from "~/components/ui/button";

export function OurServices() {
  const { t, i18n } = useTranslation();
  const { language } = i18n || {};

  const navigate = useNavigate();
  const services = [
    t("bachelorThesis", {
      defaultValue: "Bachelor's Thesis",
    }),
    t("mastersThesis", {
      defaultValue: "Master's Thesis",
    }),
    t("doctoralThesis", {
      defaultValue: "Doctoral Thesis / Dissertation",
    }),
    t("seminarPaper", {
      defaultValue: "Seminar Paper",
    }),
    t("termPaper", {
      defaultValue: "Term Paper",
    }),
    t("projectPaper", {
      defaultValue: "Project Paper",
    }),
  ];
  return (
    <div className="flex flex-col items-end bg-primary-30 px-28 py-12 mx-20 rounded-4xl">
      <H3Title
        title={t("our-services", {
          defaultValue: "Our Services",
        })}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-1 border-primary-100 rounded-2xl p-6 bg-white"
          >
            <MainText text={service} />
          </div>
        ))}
      </div>
      <Button
        variant="default"
        className="gap-x-2.5 mt-10"
        onClick={() => navigate(`/${language}/services`)}
      >
        {t("seeAllServices", { defaultValue: "See all services" })}
        <ArrowUpRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
