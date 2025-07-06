import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TFunction } from "i18next";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import {
  getGetApiAuthProfileQueryKey,
  usePostApiAuthLogin,
} from "~/api/auth/auth";
import { InputForm } from "~/components/forms/input-form.component";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { SmallText } from "~/components/typography/small-text.component";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Locales } from "~/const/constants";

const getFormSchema = (t: TFunction) =>
  z.object({
    email: z.string().email({
      message: t("Invalid email address.", {
        defaultValue: "Invalid email address.",
      }),
    }),
    password: z.string(),
  });

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formSchema = getFormSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate, isPending } = usePostApiAuthLogin({
    mutation: {
      onSuccess: (response) => {
        localStorage.setItem("token", response.data.token ?? "");
        const profileKey = getGetApiAuthProfileQueryKey();
        queryClient.invalidateQueries({ queryKey: profileKey });
        navigate(`/${i18n.language || Locales.EN}/place-order`);
        form.reset();
      },
      onError: (error: AxiosError<{ error?: string }>) => {
        console.error("Registration error:", error.response?.data?.error);
        form.setError("email", {
          type: "manual",
          message:
            error.response?.data?.error ||
            t("Sign in failed.", {
              defaultValue: "Sign in failed.",
            }),
        });
        form.setFocus("email");
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      data: {
        email: values.email,
        password: values.password,
      },
    });
  }

  const lang = i18n.language || Locales.EN;

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full justify-center items-center relative flex flex-col mx-20 mb-10">
        <Button
          variant="ghost"
          className="absolute left-0 ml-20"
          onClick={() => navigate(`/${lang}/landing-page`)}
        >
          <ArrowLeft size={240} />
          <MainText
            text={t("Back to Home", {
              defaultValue: "Back to Home",
            })}
            className="mt-1"
          />
        </Button>
        <H2Title
          title={t("Sign In", {
            defaultValue: "Sign In",
          })}
        />
      </div>
      <div className="w-4/12 bg-gray-10 px-10 py-12 rounded-4xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-rows-2 gap-6">
              <InputForm
                form={form}
                placeholder={t("enterYourEmail", {
                  defaultValue: "Enter your email",
                })}
                label={t("email", {
                  defaultValue: "Email",
                })}
                fieldName="email"
                type="email"
              />
              <InputForm
                form={form}
                placeholder={t("enterYourPassword", {
                  defaultValue: "Enter your password",
                })}
                label={t("password", {
                  defaultValue: "Password",
                })}
                type="password"
                fieldName="password"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
                loading={isPending}
              >
                {t("Sign in", {
                  defaultValue: "Sign in",
                })}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${lang}/auth/sign-up`);
                }}
              >
                {t("Sign Up", {
                  defaultValue: "Sign Up",
                })}
              </Button>
              <Button
                variant="ghost"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${lang}/auth/forgot-password`);
                }}
              >
                <SmallText
                  text={t("Forgot your password?", {
                    defaultValue: "Forgot your password?",
                  })}
                  className="underline text-gray-100"
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
