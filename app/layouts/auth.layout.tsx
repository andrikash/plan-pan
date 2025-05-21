import { Outlet } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { getLanguageSegmentFromUrl } from "~/lib/utils";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const langageSegment = getLanguageSegmentFromUrl(url);

  if (url.pathname === `/${langageSegment}/auth`) {
    return redirect(`/${langageSegment}/auth/login`);
  }

  return null;
};

export default function AuthLayout() {
  return <Outlet />;
}
