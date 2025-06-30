import { TFunction } from "i18next";
import { SubjectArea, WorkType } from "~/types/forms/order";

export const workTypesEnum = [
  "term-paper",
  "bachelor-thesis",
  "master-thesis",
  "dissertation",
  "essay",
  "technical-report",
  "project-work",
  "literature-review",
  "presentation",
  "academic-article",
] as const;

export const getWorkTypeItems = (
  t: TFunction
): { label: string; value: WorkType }[] => [
  {
    label: t("workType.term-paper", { defaultValue: "Term Paper" }),
    value: "term-paper",
  },
  {
    label: t("workType.bachelor-thesis", { defaultValue: "Bachelor's Thesis" }),
    value: "bachelor-thesis",
  },
  {
    label: t("workType.master-thesis", { defaultValue: "Master's Thesis" }),
    value: "master-thesis",
  },
  {
    label: t("workType.dissertation", { defaultValue: "Dissertation (PhD)" }),
    value: "dissertation",
  },
  {
    label: t("workType.essay", { defaultValue: "Essay" }),
    value: "essay",
  },
  {
    label: t("workType.technical-report", { defaultValue: "Technical Report" }),
    value: "technical-report",
  },
  {
    label: t("workType.project-work", { defaultValue: "Project Work" }),
    value: "project-work",
  },
  {
    label: t("workType.literature-review", {
      defaultValue: "Literature Review",
    }),
    value: "literature-review",
  },
  {
    label: t("workType.presentation", { defaultValue: "Presentation" }),
    value: "presentation",
  },
  {
    label: t("workType.academic-article", { defaultValue: "Academic Article" }),
    value: "academic-article",
  },
];

export const subjectAreasEnum = [
  "business",
  "law",
  "medicine",
  "psychology",
  "education",
  "computer-science",
  "engineering",
  "social-sciences",
  "literature",
  "philosophy",
  "political-science",
  "natural-sciences",
] as const;
export const getSubjectAreaItems = (
  t: TFunction
): { label: string; value: SubjectArea }[] => [
  {
    label: t("subjectArea.business", { defaultValue: "Business" }),
    value: "business",
  },
  {
    label: t("subjectArea.law", { defaultValue: "Law" }),
    value: "law",
  },
  {
    label: t("subjectArea.medicine", { defaultValue: "Medicine" }),
    value: "medicine",
  },
  {
    label: t("subjectArea.psychology", { defaultValue: "Psychology" }),
    value: "psychology",
  },
  {
    label: t("subjectArea.education", { defaultValue: "Education" }),
    value: "education",
  },
  {
    label: t("subjectArea.computer-science", {
      defaultValue: "Computer Science",
    }),
    value: "computer-science",
  },
  {
    label: t("subjectArea.engineering", { defaultValue: "Engineering" }),
    value: "engineering",
  },
  {
    label: t("subjectArea.social-sciences", {
      defaultValue: "Social Sciences",
    }),
    value: "social-sciences",
  },
  {
    label: t("subjectArea.literature", { defaultValue: "Literature" }),
    value: "literature",
  },
  {
    label: t("subjectArea.philosophy", { defaultValue: "Philosophy" }),
    value: "philosophy",
  },
  {
    label: t("subjectArea.political-science", {
      defaultValue: "Political Science",
    }),
    value: "political-science",
  },
  {
    label: t("subjectArea.natural-sciences", {
      defaultValue: "Natural Sciences",
    }),
    value: "natural-sciences",
  },
];
