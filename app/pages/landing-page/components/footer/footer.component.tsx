import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { getMenuItems } from "~/components/menu/menu.constants";
import { SecondaryText } from "~/components/typography/secondary-text.component";
import { SmallText } from "~/components/typography/small-text.component";
import { Button } from "~/components/ui/button";

export function Footer() {
  const { t } = useTranslation();
  const menuItems = getMenuItems(t);

  return (
    <div className="bg-secondary-30 px-14 py-12 mx-20 rounded-4xl mt-28 flex flex-col justify-between gap-x-6 mb-12">
      <div className="flex flex-row w-full justify-between">
        <div>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[192px] mb-6 shrink-0"
          />
          <SmallText
            text={t("landingPage.footer.description", {
              defaultValue: "Just learn – leave the difficult things to us!",
            })}
            className="w-[230px]"
          />
        </div>
        <div className="flex flex-col">
          <SecondaryText
            text={t("landingPage.footer.menu", {
              defaultValue: "Menu",
            })}
            className="mb-6"
          />
          <div className="flex flex-col gap-y-4">
            {menuItems.map((item, i) => (
              <Link to={item.link} key={i}>
                <SecondaryText text={item.name} className="text-gray-60" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <SecondaryText
            text={t("landingPage.footer.getInTouch", {
              defaultValue: "Get in touch",
            })}
            className="mb-6"
          />
          <div className="flex flex-col gap-y-4 mb-10">
            <SecondaryText
              text="service@projekte.de"
              className="text-gray-60"
            />
            <SecondaryText text="+49 1523 4567890" className="text-gray-60" />
          </div>
          <SecondaryText
            text={t("landingPage.footer.legalInformation", {
              defaultValue: "Legal Information",
            })}
            className="mb-6"
          />
          <div className="flex flex-col gap-y-4">
            <Link to="/terms-of-use">
              <SecondaryText
                text={t("landingPage.footer.termsOfUse", {
                  defaultValue: "Terms of Use",
                })}
                className="text-gray-60"
              />
            </Link>

            <Link to="/privacy-policy">
              <SecondaryText
                text={t("landingPage.footer.privacyPolicy", {
                  defaultValue: "Privacy Policy",
                })}
                className="text-gray-60"
              />
            </Link>
            <Link to="/cookies-policy">
              <SecondaryText
                text={t("landingPage.footer.cookiesPolicy", {
                  defaultValue: "Cookies Policy",
                })}
                className="text-gray-60"
              />
            </Link>
          </div>
        </div>
        <div>
          <Button variant="default">
            {t("place-order", { defaultValue: "Place order" })}
          </Button>
        </div>
      </div>
      <div className="border-b border-gray-20 mt-14 w-full" />
      <p className="text-sm xl:text-lg leading-[150%] font-normal text-gray-60 mt-4">
        {t("landingPage.footer.copyright", {
          defaultValue: "Copyright",
        })}{" "}
        © {new Date().getFullYear()} Plan&Pan
      </p>
    </div>
  );
}
