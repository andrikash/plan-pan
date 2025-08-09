import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { getLanguageSegmentFromUrl } from "~/lib/utils";
import { useEffect } from "react";
import { useGetApiAuthProfile } from "~/api/auth/auth";

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
  const {
    data: user,
    isSuccess,
    isError,
  } = useGetApiAuthProfile({
    query: {
      retry: false, // Don't retry on failure
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchInterval: false, // Don't poll
      refetchOnReconnect: false, // Don't refetch on reconnect
    },
  });

  // TODO: handle the token with a cookie
  useEffect(() => {
    if (isSuccess && user) {
      const lang = pathname.split("/")[1] || "en";
      navigate(`/${lang}/dashboard`);
    } else if (isError) {
      localStorage.removeItem("token");
    }
  }, [isSuccess, isError, navigate, pathname, user]);

  return (
    <>
      <div className="w-full px-20 py-10">
        <Link to="/" className="shrink-0">
          <img src="/images/logo.png" alt="Logo" className="w-[192px]" />
        </Link>
      </div>
      <Outlet />
    </>
  );
}
