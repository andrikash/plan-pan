import { TFunction } from "i18next";
import { z } from "zod";

export const getPasswordSchema = (t: TFunction) =>
  z
    .string()
    .min(8, { message: t("Password must be at least 8 characters long.") })
    .max(64, { message: t("Password must not exceed 64 characters.") })
    .regex(/[A-Z]/, {
      message: t("Password must contain at least one uppercase letter."),
    })
    .regex(/[a-z]/, {
      message: t("Password must contain at least one lowercase letter."),
    })
    .regex(/[0-9]/, {
      message: t("Password must contain at least one number."),
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: t("Password must contain at least one special character."),
    });

export const getEmailAndPasswordSchema = (t: TFunction) =>
  z
    .object({
      email: z.string().email({
        message: t("Invalid email address.", {
          defaultValue: "Invalid email address.",
        }),
      }),
      password: getPasswordSchema(t),
      passwordRepeat: getPasswordSchema(t),
    })
    .superRefine(({ password, passwordRepeat }, ctx) => {
      if (password !== passwordRepeat) {
        ctx.addIssue({
          path: ["passwordRepeat"],
          code: z.ZodIssueCode.custom,
          message: t("Passwords do not match.", {
            defaultValue: "Passwords do not match.",
          }),
        });
      }
    });
