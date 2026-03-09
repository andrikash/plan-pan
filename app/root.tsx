import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { LinksFunction } from "@remix-run/node";
import { useChangeLanguage } from "remix-i18next/react";

import "./tailwind.css";
import { useTranslation } from "react-i18next";
import { getLanguageSegmentFromUrl } from "./lib/utils";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const locale = getLanguageSegmentFromUrl(url);

  return {
    locale,
    ENV: {
      BASE_URL: process.env.BASE_URL,
    },
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  // Get the locale from the loader
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  return (
    <html lang={locale} dir={i18n.dir()} className="bg-light-yellow">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ToastContainer />
        <ScrollRestoration />
        <Scripts />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        /> */}
      </body>
    </html>
  );
}

export default function App() {
  const isDev = process.env.NODE_ENV === "development";
  console.log("isDev", isDev);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: isDev ? false : true, // development: don't refetch when window regains focus (including tab switches), production: refetch when window regains focus (including tab switches)
            refetchOnMount: isDev ? false : true, // development: don't refetch when remounting (e.g., switching tabs), production: refetch when remounting (e.g., switching tabs)
            refetchOnReconnect: isDev ? false : true, // development: don't refetch when reconnecting, production: refetch when reconnecting
            refetchInterval: isDev ? false : false, // development: don't poll, production: poll
            retry: isDev ? false : true, // development: don't retry, production: retry
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
