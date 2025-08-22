import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { locales } from "~/const/constants";
import { getLanguageSegmentFromUrl } from "~/lib/utils";
import { useEffect, useState } from "react";
import { protectedRoutes } from "~/const/protected-routes";

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

export default function CoreLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const isProtected = protectedRoutes.some((route) =>
      pathname.includes(route)
    );

    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    // TODO: check if token is expired instead of checking if it just exists
    if (isProtected && !token) {
      const lang = pathname.split("/")[1] || "en";
      navigate(`/${lang}/auth/login`);
    }

    // setIsAuthChecked(true);
  }, [pathname, navigate]);

  // TODO: add loading spinner when auth is not checked to prevent flash of content
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  //     </div>
  //   );
  // }

  return <Outlet />;
}
