import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import { AxiosError } from "axios";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { z } from "zod";
import { usePostApiAuthRegister } from "~/api/auth/auth";
import { InputForm } from "~/components/forms/input-form.component";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { SmallText } from "~/components/typography/small-text.component";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { getEmailAndPasswordSchema } from "~/const/auth/utils";
import { Locales } from "~/const/constants";
import { AuthErrorResponse } from "~/types/api";

const SignUpPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const formSchema = getEmailAndPasswordSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate, isPending } = usePostApiAuthRegister({
    mutation: {
      onSuccess: () => {
        navigate(`/${i18n.language || Locales.EN}/auth/login`);
        form.reset();
      },
      onError: (error: AxiosError<AuthErrorResponse>) => {
        console.error("Registration error:", error.response?.data?.error);
        form.setError("email", {
          type: "manual",
          message:
            error.response?.data?.error ||
            t("Registration failed.", {
              defaultValue: "Registration failed.",
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
          <ArrowLeft />
          <MainText
            text={t("Back to Home", {
              defaultValue: "Back to Home",
            })}
            className="mt-1"
          />
        </Button>
        <H2Title
          title={t("Sign Up", {
            defaultValue: "Sign Up",
          })}
        />
      </div>
      <div className="w-4/12 bg-gray-10 px-10 py-12 rounded-4xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-rows-2 gap-6">
              <InputForm
                form={form}
                placeholder="email@example.com"
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
              <InputForm
                form={form}
                placeholder={t("confirmYourPassword", {
                  defaultValue: "Confirm your password",
                })}
                label={t("confirmPassword", {
                  defaultValue: "Confirm Password",
                })}
                type="password"
                fieldName="passwordRepeat"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Button
                type="submit"
                className="w-full"
                loading={isPending}
                disabled={isPending}
              >
                {t("Sign up", {
                  defaultValue: "Sign up",
                })}
              </Button>
              <div className="flex gap-x-2">
                <SmallText
                  text={t("Already have an account?", {
                    defaultValue: "Already have an account?",
                  })}
                  className="text-gray-100"
                />
                <Link to={`/${lang}/auth/login`}>
                  <SmallText
                    text={t("Sign In", {
                      defaultValue: "Sign In",
                    })}
                    className="text-blue-500 underline"
                  />
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
