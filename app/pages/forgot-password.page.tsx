import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import { ArrowLeft, MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { InputForm } from "~/components/forms/input-form.component";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { Locales } from "~/const/constants";
import { usePostApiPasswordForgot } from "~/api/password/password";
import { AxiosError } from "axios";

//TODO: Pass language to BE so it can form propert reset password link
// template {FRONT_END_URL}/{LANG}/auth/reset-password/{RESET_TOKEN}

const ForgotPasswordPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language || Locales.EN;

  const formSchema = z.object({
    email: z.string().email({
      message: t("Invalid email address.", {
        defaultValue: "Invalid email address.",
      }),
    }),
  });

  const { mutate, isPending, isSuccess } = usePostApiPasswordForgot({
    mutation: {
      onError: (
        error: AxiosError<{
          error: string;
        }>
      ) => {
        console.error("Forgot password error:", error.response?.data?.error);
        form.setError("email", {
          type: "manual",
          message:
            error.response?.data?.error ||
            t("Reset password failed.", {
              defaultValue: "Reset password failed.",
            }),
        });
        form.setFocus("email");
      },
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate({
      data: {
        email: values.email,
      },
    });
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full justify-center items-center relative flex flex-col mx-20 mb-10">
        <Button
          variant="ghost"
          className="absolute left-0 ml-20"
          onClick={() => navigate(`/${lang}/landing-page`)}
        >
          <ArrowLeft />
          <MainText
            text={t("Back to Home", {
              defaultValue: "Back to Home",
            })}
            className="mt-1"
          />
        </Button>
        <H2Title
          title={t("Forgot Password", {
            defaultValue: "Forgot Password",
          })}
        />
      </div>
      {isSuccess ? (
        <div className="mt-24 flex flex-col items-center text-center px-4">
          <MailCheck size={64} className="text-[#FDAF52] mb-6" />
          <h2 className="text-2xl font-semibold mb-2">
            {t("Check your email", { defaultValue: "Check your email" })}
          </h2>
          <p className="text-gray-600 max-w-md">
            {t("checkYourInbox", {
              defaultValue:
                "If an account with that email exists, we have sent a password reset link to it. Please check your inbox.",
            })}
          </p>
        </div>
      ) : (
        <div className="w-4/12 bg-gray-10 px-10 py-12 rounded-4xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">
                <InputForm
                  form={form}
                  placeholder="email@example.com"
                  label={t("email", {
                    defaultValue: "Email",
                  })}
                  fieldName="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  loading={isPending}
                  disabled={isPending}
                >
                  {t("Submit", {
                    defaultValue: "Submit",
                  })}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
