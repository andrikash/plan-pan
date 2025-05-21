// routes/redirect-to-landing.tsx
import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/en/landing-page");
};

export default function RedirectToLanding() {
  return null;
}
