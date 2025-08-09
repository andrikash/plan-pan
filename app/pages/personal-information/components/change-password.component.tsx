import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";

import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { useNavigate } from "@remix-run/react";

import { InputForm } from "~/components/forms/input-form.component";
import { H4Title } from "~/components/typography/h4-title.component";
import { usePostApiPasswordChange } from "~/api/password/password";
import { Locales } from "~/const/constants";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { getPasswordSchema } from "~/const/auth/utils";
import { useGetApiOrders } from "~/api/orders/orders";

const getChangePasswordSchema = (t: TFunction) =>
  z
    .object({
      currentPassword: z.string().min(1, {
        message: t("currentPasswordRequired", {
          defaultValue: "Current password is required",
        }),
      }),
      newPassword: getPasswordSchema(t),
      repeatPassword: getPasswordSchema(t),
    })
    .refine((data) => data.newPassword === data.repeatPassword, {
      message: t("passwordsDoNotMatch", {
        defaultValue: "Passwords do not match",
      }),
      path: ["repeatPassword"],
    });

export function ChangePassword() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const formSchema = getChangePasswordSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const lang = i18n.language || Locales.EN;

  const { data: orders } = useGetApiOrders(
    {
      pageNumber: 1,
      pageSize: 100,
    },
    {
      query: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchOnReconnect: false,
      },
    }
  );

  const { mutate, isPending } = usePostApiPasswordChange({
    mutation: {
      onSuccess: () => {
        toast(
          t("passwordChanged", {
            defaultValue: "Password changed successfully!",
          }),
          {
            type: "success",
          }
        );
        form.reset();
      },
      onError: (error: AxiosError<AuthErrorResponse>) => {
        console.error("Forgot password error:", error.response?.data?.error);
        form.setError("currentPassword", {
          type: "manual",
          message:
            error.response?.data?.error ||
            t("Change password failed.", {
              defaultValue: "Change password failed.",
            }),
        });
        form.setFocus("currentPassword");
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Password updated:", values);
    mutate({
      data: {
        newPassword: values.newPassword,
        currentPassword: values.currentPassword,
      },
    });
  }

  const numberOfOrders = orders?.data?.data?.length ?? 0;

  return (
    <div className="bg-gray-10 px-28 py-12 mx-20 rounded-4xl">
      {/* Order Information Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-x-2">
          <H4Title
            title={
              <div>
                {t("numberOfOrders", { defaultValue: "Number of orders" })}:{" "}
                {numberOfOrders}
              </div>
            }
          />
        </div>
        <Button
          type="submit"
          className="px-8 py-2"
          onClick={() => navigate(`/${lang}/dashboard`)}
        >
          {t("myOrders", { defaultValue: "My Orders" })}
        </Button>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Change Password Section */}
      <div className="mb-8">
        <H4Title
          title={t("changePassword", { defaultValue: "Change Password" })}
          className="mb-6"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="currentPassword"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <InputForm
                        form={form}
                        placeholder="************"
                        label={t("currentPassword", {
                          defaultValue: "Current Password",
                        })}
                        fieldName="currentPassword"
                        type="password"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>

      {/* Set New Password Section */}
      <div>
        <H4Title
          title={t("setNewPassword", { defaultValue: "Set a new Password" })}
          className="mb-6"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="newPassword"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <InputForm
                        form={form}
                        placeholder="********"
                        label={t("newPassword", {
                          defaultValue: "New Password",
                        })}
                        fieldName="newPassword"
                        type="password"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repeatPassword"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <InputForm
                        form={form}
                        placeholder="**********"
                        label={t("repeatNewPassword", {
                          defaultValue: "Repeat new Password",
                        })}
                        fieldName="repeatPassword"
                        type="password"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="px-8 py-2"
                disabled={isPending}
                loading={isPending}
              >
                {t("save", {
                  defaultValue: "Save",
                })}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
