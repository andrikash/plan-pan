import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  deadlineEnum,
  subjectAreasEnum,
  workTypesEnum,
  getWorkTypeItems,
  getSubjectAreaItems,
  getDeadlineItems,
} from "~/const/forms/order";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

import { ComboboxForm } from "~/components/forms/combobox-form.component";
import { InputForm } from "~/components/forms/input-form.component";
import { DatePickerForm } from "~/components/forms/date-picker.component";

const getFormSchema = (t: TFunction) =>
  z.object({
    workType: z.enum(workTypesEnum, {
      required_error: t("typeOfPaperIsRequired", {
        defaultValue: "Type of paper is required",
      }),
    }),
    subjectArea: z.enum(subjectAreasEnum).optional(),
    deadline: z.enum(deadlineEnum, {
      required_error: t("deadlineIsRequired", {
        defaultValue: "Deadline is required",
      }),
    }),
    theme: z.string(),
    // email: z.string().email(),
    // pages: z.number(),
    phoneNumber: z.string(),
    // firstName: z.string().optional(),
    // lastName: z.string().optional(),
  });

export function SendOrder() {
  const { t } = useTranslation();
  const formSchema = getFormSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const workTypeItems = getWorkTypeItems(t);
  const subjectAreaItems = getSubjectAreaItems(t);
  const deadlineItems = getDeadlineItems(t);
  return (
    <div className="bg-gray-10 px-28 py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ComboboxForm
            form={form}
            items={workTypeItems}
            fieldName="workType"
            label={t("typeOfPaper", {
              defaultValue: "Type of paper",
            })}
            required
          />
          <ComboboxForm
            form={form}
            items={subjectAreaItems}
            fieldName="subjectArea"
            label={t("subjectArea", {
              defaultValue: "Subject area",
            })}
          />
          <ComboboxForm
            form={form}
            items={deadlineItems}
            fieldName="deadline"
            label={t("Deadline", {
              defaultValue: "Deadline",
            })}
            required
          />
          <InputForm
            form={form}
            placeholder={t("Theme", {
              defaultValue: "Enter your theme",
            })}
            label={t("Theme", { defaultValue: "Theme" })}
            required
            fieldName="theme"
          />
          <DatePickerForm
            form={form}
            label={t("deadlineDate", {
              defaultValue: "Deadline date",
            })}
          />
          <Button type="submit">
            {t("sumbit Order", {
              defaultValue: "Submit Order",
            })}
          </Button>
        </form>
      </Form>
    </div>
  );
}
