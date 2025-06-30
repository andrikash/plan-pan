import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import { TFunction } from "i18next";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { postApiAuthLogin } from "~/api/auth/auth";
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
    password: z
      .string()
      .min(8, {
        message: t("Password must be at least 8 characters long.", {
          defaultValue: "Password must be at least 8 characters long.",
        }),
      })
      .max(64, {
        message: t("Password must not exceed 64 characters.", {
          defaultValue: "Password must not exceed 64 characters.",
        }),
      })
      .regex(/[A-Z]/, {
        message: t("Password must contain at least one uppercase letter.", {
          defaultValue: "Password must contain at least one uppercase letter.",
        }),
      })
      .regex(/[a-z]/, {
        message: t("Password must contain at least one lowercase letter.", {
          defaultValue: "Password must contain at least one lowercase letter.",
        }),
      })
      .regex(/[0-9]/, {
        message: t("Password must contain at least one number.", {
          defaultValue: "Password must contain at least one number.",
        }),
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: t("Password must contain at least one special character.", {
          defaultValue: "Password must contain at least one special character.",
        }),
      }),
  });

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const formSchema = getFormSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "values");
    postApiAuthLogin(values);
  }

  const lang = i18n.language || Locales.EN;

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="w-full p-20">
        <img src="/images/logo.png" alt="Logo" className="w-[192px]" />
      </div>
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
        {/* <div className="absolute left-0 flex gap-x-2 items-center justify-center ml-20 cursor-pointer">
          
        </div> */}
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
                required
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
              <Button type="submit" className="w-full">
                {t("Sign in", {
                  defaultValue: "Sign in",
                })}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate(`/${lang}/auth/signup`)}
              >
                {t("Sign Up", {
                  defaultValue: "Sign Up",
                })}
              </Button>
              <SmallText
                text={t("Forgot your password?", {
                  defaultValue: "Forgot your password?",
                })}
                className="underline text-gray-100"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
