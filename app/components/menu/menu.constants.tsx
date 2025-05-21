import { TFunction } from "i18next";

export const getMenuItems = (t: TFunction) => [
  {
    id: 1,
    name: t("services", { defaultValue: "Services" }),
    link: "/services",
  },
  {
    id: 2,
    name: t("about-us", { defaultValue: "About us" }),
    link: "/about-us",
  },
  {
    id: 3,
    name: t("guarantees", { defaultValue: "Guarantees" }),
    link: "/guarantees",
  },
  {
    id: 4,
    name: t("feedback", { defaultValue: "Feedback" }),
    link: "/feedback",
  },
  {
    id: 5,
    name: t("contact-us", { defaultValue: "Contact us" }),
    link: "/contact-us",
  },
];
