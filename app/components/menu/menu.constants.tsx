import { TFunction } from "i18next";

export const getMenuItems = (t: TFunction) => [
  {
    id: 1,
    name: t("services", { defaultValue: "Services" }),
    link: "/services",
  },
  {
    id: 2,
    name: "About us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Guarantees",
    link: "/guarantees",
  },
  {
    id: 4,
    name: "Feedback",
    link: "/feedback",
  },
  {
    id: 5,
    name: "Contact us",
    link: "/contact-us",
  },
];
