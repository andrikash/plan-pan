import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

import { InputForm } from "~/components/forms/input-form.component";
import { PhoneInput } from "~/components/ui/phone-input";
import { MainText } from "~/components/typography/main-text.component";
import { H2Title } from "~/components/typography/h2-title.component";
import { H4Title } from "~/components/typography/h4-title.component";
import { useGetApiAuthProfile } from "~/api/auth/auth";

const getProfileSchema = (t: TFunction) =>
  z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email({
      message: t("invalidEmail", {
        defaultValue: "Invalid email address",
      }),
    }),
    phoneNumber: z.string().optional(),
  });

// TODO: Connect to BE
export function ProfileInformation({ onSuccess }: { onSuccess?: () => void }) {
  const { t } = useTranslation();
  const formSchema = getProfileSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data } = useGetApiAuthProfile({
    query: {
      retry: false, // Don't retry on failure
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchInterval: false, // Don't poll
      refetchOnReconnect: false, // Don't refetch on reconnect
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Profile updated:", values);
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <div className="bg-gray-10 px-28 py-12 mx-20 rounded-4xl">
      {/* Username Display Section */}
      <div className="mb-8 flex flex-col gap-y-4">
        <H4Title title={t("username", { defaultValue: "Username" })} />
        <div className="text-gray-600 mb-4">{data?.data?.email}</div>
      </div>
      <hr className="border-gray-200 mb-6" />

      {/* Personal Information Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <InputForm
              form={form}
              placeholder={t("yourFirstName", {
                defaultValue: "Your First Name",
              })}
              label={t("firstName", {
                defaultValue: "First Name",
              })}
              fieldName="firstName"
            />
            <InputForm
              form={form}
              placeholder={t("yourLastName", {
                defaultValue: "Your Last Name",
              })}
              label={t("lastName", {
                defaultValue: "Last Name",
              })}
              fieldName="lastName"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-left">
                    <MainText
                      text={t("phoneNumber", {
                        defaultValue: "Phone Number",
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

          <div className="flex justify-end">
            <Button type="submit" className="px-8 py-2">
              {t("save", {
                defaultValue: "Save",
              })}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
