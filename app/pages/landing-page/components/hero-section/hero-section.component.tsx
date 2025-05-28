import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { H1Title } from "~/components/typography/h1-title.component";
import { MainText } from "~/components/typography/main-text.component";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-20 relative pt-[120px]">
      <div className="w-[732px]">
        <H1Title
          title={t("hero-section-title", {
            defaultValue:
              "Your Academic Support – Fast, Professional, Reliable!",
          })}
          className="mb-8"
        />
        <MainText
          text={t("hero-section-description", {
            defaultValue:
              "We are a team of experts who have been successfully creating academic texts for clients in Germany, Austria, and Switzerland for over two years. Our goal is to help students, doctoral candidates, researchers, and professionals from various fields to write high-quality papers that meet academic standards.",
          })}
          className="mb-10"
        />
        <Button variant="default">
          {t("place-order", { defaultValue: "Place order" })}
        </Button>
      </div>
      <img
        src="/images/girl-with-tablet.webp"
        alt="girl-with-tablet"
        className="w-[686px] absolute top-[-50px] right-0"
      />
    </div>
  );
};

export default HeroSection;
