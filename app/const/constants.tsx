import { TFunction } from "i18next";

export enum Locales {
  EN = "en",
  DE = "de",
}

export const locales = [Locales.EN, Locales.DE];

export const getBenefitCardsWithIconInfo = (t: TFunction) => [
  {
    title: t("benefit-card-1-title", {
      defaultValue: "Expert Authors",
    }),
    icon: "👨‍🎓",
    value: t("benefit-card-1-value", {
      defaultValue: "110+",
    }),
    description: t("benefit-card-1-description", {
      defaultValue:
        "Academically qualified professionals work on your assignments.",
    }),
  },
  {
    title: t("benefit-card-2-title", {
      defaultValue: "Skilled Editors",
    }),
    icon: "📝",
    value: t("benefit-card-2-value", {
      defaultValue: "30+",
    }),
    description: t("benefit-card-2-description", {
      defaultValue: "Editors meticulously review every paper.",
    }),
  },
  {
    title: t("benefit-card-3-title", {
      defaultValue: "Originality Guarantee",
    }),
    icon: "🔍",
    value: t("benefit-card-3-value", {
      defaultValue: "91%+",
    }),
    description: t("benefit-card-3-description", {
      defaultValue:
        "Over 91% of all papers are thoroughly checked for plagiarism.",
    }),
  },
  {
    title: t("benefit-card-4-title", {
      defaultValue: "Proven Experience",
    }),
    icon: "🎓",
    value: t("benefit-card-4-value", {
      defaultValue: "2+ years",
    }),
    description: t("benefit-card-4-description", {
      defaultValue: "of crafting high-quality academic content.",
    }),
  },
  {
    title: t("benefit-card-5-title", {
      defaultValue: "Fast & Reliable Delivery",
    }),
    icon: "🚀",
    value: t("benefit-card-5-value", {
      defaultValue: "90%",
    }),
    description: t("benefit-card-5-description", {
      defaultValue: "of orders are delivered ahead of schedule.",
    }),
  },
  {
    title: t("benefit-card-6-title", {
      defaultValue: "Top-Rated Service",
    }),
    icon: "⭐",
    value: t("benefit-card-6-value", {
      defaultValue: "4.7/5",
    }),
    description: t("benefit-card-6-description", {
      defaultValue: "Customer satisfaction speaks for our quality.",
    }),
  },
];

export const getBenefitCardsInfo = (t: TFunction) => [
  {
    title: t("rigorousSelectionOfAuthors", {
      defaultValue: "Rigorous Selection of Authors",
      ns: "common",
    }),
    description: t("rigorousSelectionOfAuthors.description", {
      defaultValue:
        "We work exclusively with qualified professionals who hold at least a bachelor’s degree and have proven expertise in relevant academic fields. Every author undergoes a strict selection process, including tests on theoretical knowledge and academic writing skills. Only those who pass all stages successfully are entrusted with client orders.",
      ns: "common",
    }),
  },
  {
    title: t("specializationAndExpertise", {
      defaultValue: "Specialization and Expertise",
      ns: "common",
    }),
    description: t("specializationAndExpertise.description", {
      defaultValue:
        "We always match authors to the subject area of your request. For example, we assign literature, philosophy, or social science experts to humanities topics, and professionals in engineering, physics, or biology to technical and scientific subjects. This ensures that every author understands the topic deeply and can handle its nuances confidently.",
      ns: "common",
    }),
  },
  {
    title: t("academicStandardsYouCanTrust", {
      defaultValue: "Academic Standards You Can Trust",
      ns: "common",
    }),
    description: t("academicStandardsYouCanTrust.description", {
      defaultValue:
        "Our authors are well-versed in academic norms across different countries (Germany, Austria, Switzerland). They are experts in citation rules, structure, and plagiarism prevention. You can rely on us to deliver original, high-quality work that fully complies with academic expectations.",
      ns: "common",
    }),
  },
  {
    title: t("provenWritingExperience", {
      defaultValue: "Proven Writing Experience",
      ns: "common",
    }),
    description: t("provenWritingExperience.description", {
      defaultValue:
        "Our authors bring extensive experience in writing various academic texts—seminar papers, bachelor’s and master’s theses, dissertations, journal articles, and more. They’re not only capable of conducting thorough research but also of presenting the findings in a clear, logical, and compelling way.",
      ns: "common",
    }),
  },
  {
    title: t("tailoredAndThoughtfulApproach", {
      defaultValue: "Tailored and Thoughtful Approach",
    }),
    description: t("qualityControlAndFeedback.description", {
      defaultValue:
        "Every order is treated individually. Whether you need a unique methodology or an unconventional perspective, we find the right author to bring your vision to life. Our experts are familiar with both qualitative and quantitative research methods, and always adapt to your specific needs.",
    }),
  },
];

export const SEND_ORDER_ID = "send-order";
