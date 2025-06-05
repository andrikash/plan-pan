import {
  deadlineEnum,
  subjectAreasEnum,
  workTypesEnum,
} from "~/const/forms/order";

export type WorkType = (typeof workTypesEnum)[number];
export type SubjectArea = (typeof subjectAreasEnum)[number];
export type DeadlinePreset = (typeof deadlineEnum)[number];
