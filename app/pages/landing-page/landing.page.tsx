import { useTranslation } from "react-i18next";
import {
  getBenefitCardsInfo,
  getBenefitCardsWithIconInfo,
  Locales,
  SEND_ORDER_ID,
} from "~/const/constants";
import HeroSection from "~/pages/landing-page/components/hero-section/hero-section.component";
import { BenefitCardWithIcon } from "./components/benefit-card-with/benefit-card-with-icon.component";
import { MainText } from "~/components/typography/main-text.component";
import { Button } from "~/components/ui/button";
import { H3Title } from "~/components/typography/h3-title.component";
import { BenefitCard } from "./components/benefit-card-2/benefit-card.component";
import { OurServices } from "./components/our-services/our-services.component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { SendOrder } from "./components/send-order/send-order.component";
import { Footer } from "./components/footer/footer.component";
import { toast } from "react-toastify";
import { useGetApiAuthProfile } from "~/api/auth/auth";
import { useNavigate } from "@remix-run/react";

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language || Locales.EN;
  const benefitCardsWithIconsInfo = getBenefitCardsWithIconInfo(t);
  const benefitCardsInfo = getBenefitCardsInfo(t);
  const { data: user, isSuccess } = useGetApiAuthProfile();

  const isAuthenticated = isSuccess && user;
  return (
    <div>
      <div className="mb-52">
        <HeroSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 p-4 px-20">
        {benefitCardsWithIconsInfo.map((card, index) => (
          <BenefitCardWithIcon
            key={index}
            title={card.title}
            icon={card.icon}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
      <div className="mx-80 my-28">
        <MainText
          text={t("landingPage.description-1", {
            defaultValue:
              "Our company specializes in writing seminar papers, bachelor's and master's theses, scientific articles, dissertations, literature reviews, critiques, and reports. We understand how important it is for you to meet the demands of the academic community and achieve excellent results. That’s why we approach every project with a personalized strategy, careful analysis, and deep expertise in the relevant discipline.",
          })}
          className="mb-10"
        />
        <MainText
          text={t("landingPage.description-2", {
            defaultValue:
              "Our authors are experienced experts from various academic fields, which allows us to guarantee high text quality, accuracy, and up-to-date information. We work exclusively with verified sources and strictly adhere to the ethical principles of academic writing — avoiding plagiarism and delivering original content.",
          })}
        />
      </div>
      <div className="bg-primary-30 px-80 py-20 relative">
        <img
          src="/images/emoji-guy.webp"
          alt="emoji-guy-thumb-up"
          className="w-[280px] absolute top-[-130px] right-14 rotate-6"
        />
        <MainText
          text={t("landingPage.description-3", {
            defaultValue:
              "Whether you need support with conducting a complex scientific study or preparing a publication for a professional journal — we are ready to assist you at every step of the process. Your successful academic career is our priority!",
          })}
          className="mb-10"
        />
        <Button
          variant="default"
          onClick={() => {
            const placeOrderElement = document.getElementById(SEND_ORDER_ID);
            if (placeOrderElement) {
              placeOrderElement.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
        >
          {t("place-order", { defaultValue: "Place order" })}
        </Button>
      </div>
      <div className="px-48 py-20">
        <div className="mb-12">
          <H3Title
            title={t("how-we-select-authors", {
              defaultValue:
                "How We Select the Perfect Authors for Your Academic Work",
            })}
            className="mb-8"
          />
          <MainText
            text={t("how-we-select-authors.description", {
              defaultValue:
                "At our company, we understand how crucial it is to choose the right author for your academic project. That’s why we hold our candidates to the highest standards and carefully evaluate every order. Here’s how we find our authors—and what matters most in our selection process:",
            })}
          />
        </div>
        <div className="flex flex-col gap-y-8">
          {benefitCardsInfo.map((card, index) => (
            <BenefitCard
              title={card.title}
              description={card.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <OurServices />
      <div className="mt-28 bg-gray-10 px-80 py-20">
        <H3Title
          title={t("getStartedNow", {
            defaultValue: "Get Started Now",
          })}
          className="mb-6"
        />
        <MainText
          text={t("getStartedNow.description", {
            defaultValue:
              "Start your research project today. Our experts are here to support you every step of the way. Benefit from our experience and achieve your academic goals with us.",
          })}
          className="mb-8"
        />
        <Button
          variant="default"
          onClick={() => {
            const placeOrderElement = document.getElementById(SEND_ORDER_ID);
            if (placeOrderElement) {
              placeOrderElement.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
        >
          {t("order-now", { defaultValue: "Order now" })}
        </Button>
      </div>
      <div className="pt-28">
        <div className="mb-12 px-48">
          <H3Title
            title={t("guaranteedAnonymity", {
              defaultValue: "Guaranteed Anonymity",
            })}
            className="mb-8"
          />
          <MainText
            text={t("guaranteedAnonymity.description", {
              defaultValue:
                "We place great importance on the security and protection of your personal data. That’s why we guarantee that your identity and all information you provide to us will be treated with strict confidentiality.",
            })}
          />
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-20"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-secondary-100">
              {t("guaranteedAnonymity", {
                defaultValue: "Anonymity Guaranteed",
              })}
            </AccordionTrigger>
            <AccordionContent>
              {t("guaranteedAnonymity.description", {
                defaultValue:
                  "Your personal data will never be shared with third parties without your explicit consent. All communication and orders are anonymized to protect your privacy. You can be sure that your data will be used solely for processing your order and not for any other purpose.",
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-secondary-100">
              {t("confidentialityAgreement", {
                defaultValue: "Confidentiality Agreement",
              })}
            </AccordionTrigger>
            <AccordionContent>
              {t("confidentialityAgreement.description", {
                defaultValue:
                  "Your trust is our top priority. That’s why we offer a clear and binding confidentiality agreement — to guarantee that your data, documents, and personal information remain 100% secure and protected. Whether you're sharing sensitive academic details or proprietary research, we ensure complete discretion at every stage of the collaboration.",
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-secondary-100">
              {t("protectionOfYourWork", {
                defaultValue: "Protection of Your Work",
              })}
            </AccordionTrigger>
            <AccordionContent>
              {t("protectionOfYourWork.description", {
                defaultValue:
                  "We treat your work with the same level of care and confidentiality as you do. From encryption to restricted access, every step we take is designed to keep your documents safe and ensure they are never shared, reused, or repurposed — ever. Your intellectual property stays 100% yours.",
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-secondary-100">
              {t("responsibilityOfTheAuthorsAndTheCompany", {
                defaultValue: "Responsibility of the Authors and the Company",
              })}
            </AccordionTrigger>
            <AccordionContent>
              {t("responsibilityOfTheAuthorsAndTheCompany.description", {
                defaultValue:
                  "Our authors are not only experts in their fields — they’re committed to delivering work that meets your expectations and complies with academic integrity. And we back that promise as a company. If something’s not right, we’re here to make it right. Because responsibility isn’t optional — it’s our standard.",
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-28">
        <SendOrder
          onSuccess={() => {
            if (isAuthenticated) {
              navigate(`/${lang}/dashboard`);
            } else {
              toast(
                t("orderSent", {
                  defaultValue: "Order sent successfully. Check your enail!",
                }),
                {
                  type: "success",
                }
              );
            }
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

// titles into components
