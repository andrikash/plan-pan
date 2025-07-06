import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { getLanguageSegmentFromUrl } from "~/lib/utils";
import { useEffect } from "react";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const langageSegment = getLanguageSegmentFromUrl(url);

  if (
    url.pathname === `/${langageSegment}/auth` ||
    url.pathname === `/${langageSegment}/auth/`
  ) {
    return redirect(`/${langageSegment}/auth/login`);
  }

  return null;
};

export default function AuthLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      const lang = pathname.split("/")[1] || "en";
      navigate(`/${lang}/dashboard`);
    }
  }, [pathname, navigate]);

  return (
    <>
      <div className="w-full px-20 py-10">
        <img src="/images/logo.png" alt="Logo" className="w-[192px]" />
      </div>
      <Outlet />
    </>
  );
}
