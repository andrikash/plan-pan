import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  subjectAreasEnum,
  workTypesEnum,
  getWorkTypeItems,
  getSubjectAreaItems,
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

import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

import { ComboboxForm } from "~/components/forms/combobox-form.component";
import { InputForm } from "~/components/forms/input-form.component";
import { DatePickerForm } from "~/components/forms/date-picker.component";
import { NumberInputForm } from "~/components/forms/number-input-form.component";
import { PhoneInput } from "~/components/ui/phone-input";
import { MainText } from "~/components/typography/main-text.component";
import { postApiOrders } from "~/api/orders/orders";

const getFormSchema = (t: TFunction) =>
  z.object({
    workType: z.enum(workTypesEnum, {
      required_error: t("typeOfPaperIsRequired", {
        defaultValue: "Type of paper is required",
      }),
    }),
    subjectArea: z.enum(subjectAreasEnum),
    deadline: z.date({
      required_error: t("deadlineIsRequired", {
        defaultValue: "Deadline is required",
      }),
    }),
    theme: z.string().optional(),
    pages: z
      .number({
        required_error: t("numberOfPagesMustBeGreaterThanZero", {
          defaultValue: "Number of pages is required",
        }),
      })
      .min(1)
      .max(1000),
    email: z.string().email(),
    phoneNumber: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  });

export function SendOrder() {
  const { t } = useTranslation();
  const formSchema = getFormSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const orderRequestPayload = {
      ...values,
      deadline: values.deadline.toISOString(),
    };
    postApiOrders(orderRequestPayload);
  }

  const workTypeItems = getWorkTypeItems(t);
  const subjectAreaItems = getSubjectAreaItems(t);
  return (
    <div className="bg-gray-10 px-28 py-12 mx-20 rounded-4xl mt-28">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-x-6">
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
              required
            />
            <DatePickerForm
              fieldName="deadline"
              form={form}
              label={t("deadlineDate", {
                defaultValue: "Deadline date",
              })}
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="col-span-2">
              <InputForm
                form={form}
                placeholder={t("theme", {
                  defaultValue: "Enter your theme",
                })}
                label={t("Theme", { defaultValue: "Theme" })}
                fieldName="theme"
              />
            </div>
            <NumberInputForm
              placeholder={t("enterNumberOfPages", {
                defaultValue: "Enter number of pages",
              })}
              label={t("numberOfPages", { defaultValue: "Number of pages" })}
              fieldName="pages"
              form={form}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <InputForm
              form={form}
              placeholder={t("enterYourLastName", {
                defaultValue: "Enter your last name",
              })}
              label={t(" lastName", {
                defaultValue: "Last name",
              })}
              fieldName="lastName"
            />
            <InputForm
              form={form}
              placeholder={t("enterYourFirstName", {
                defaultValue: "Enter your first name",
              })}
              label={t("firstName", {
                defaultValue: "First name",
              })}
              fieldName="firstName"
            />
            <InputForm
              form={form}
              placeholder="email@example.com"
              label={t("email", {
                defaultValue: "Email",
              })}
              fieldName="email"
              type="email"
              required
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-left">
                    <MainText
                      text={t("phoneNumber", {
                        defaultValue: "Phone number",
                      })}
                    />
                  </FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder={t("enterYourPhoneNumber", {
                        defaultValue: "Enter your phone number",
                      })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button type="submit" className="w-1/2">
              {t("sumbit Order", {
                defaultValue: "Submit Order",
              })}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
