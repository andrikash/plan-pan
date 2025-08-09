import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

//TODO: Fix not-found path
const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF5EC] text-center p-4">
      <h1 className="text-5xl font-bold text-[#1E293B] mb-4">
        {t("not-found-title", { defaultValue: "404" })}
      </h1>
      <p className="text-xl text-[#475569] mb-6">
        {t("not-found-subtitle", {
          defaultValue: "Oops! This page could not be found.",
        })}
      </p>
      <p className="text-[#64748B] mb-8">
        {t("not-found-description", {
          defaultValue:
            "The page you are looking for doesn't exist or has been moved.",
        })}
      </p>
      <Link
        to="/"
        className="inline-block bg-[#F99525] hover:bg-[#F97316] text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
      >
        {t("not-found-button", { defaultValue: "Back to homepage" })}
      </Link>
    </div>
  );
};

export default NotFoundPage;
