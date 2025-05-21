import { Outlet } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { locales } from "~/const/constants";
import { getLanguageSegmentFromUrl } from "~/lib/utils";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const langageSegment = getLanguageSegmentFromUrl(url);

  if (!locales.includes(langageSegment)) {
    return redirect(`/not-found`);
  }

  //rewrite, because we do not have to compare url pathname and locale
  // those should be the same
  // url.pathname === `/${locale}` || url.pathname === `/${locale}/`
  if (
    url.pathname === `/${langageSegment}` ||
    url.pathname === `/${langageSegment}/`
  ) {
    return redirect(`/${langageSegment}/landing-page`);
  }

  return null;
};

export default function AuthLayout() {
  return <Outlet />;
}
