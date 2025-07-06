import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { remixDevTools } from "remix-development-tools";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    remixDevTools(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          // TODO: use core.layout.tsx instead of redirect-to-landing.page.tsx
          route("/", "pages/redirect-to-landing.page.tsx", {
            index: true,
          });
          route("/:lang", "layouts/core.layout.tsx", () => {
            route("", "layouts/menu.layout.tsx", () => {
              route("landing-page", "pages/landing-page/landing.page.tsx");
              route("dashboard", "pages/dashboard.page.tsx");
              route("place-order", "pages/place-order.page.tsx");
            }),
              route("auth", "layouts/auth.layout.tsx", () => {
                route("login", "pages/login.page.tsx");
                route("sign-up", "pages/sign-up.page.tsx");
                route("forgot-password", "pages/forgot-password.page.tsx");
                route("reset-password/:token", "pages/reset-password.page.tsx");
              });
          });
          // Catch-all 404 route (must be last)
          route("*", "pages/not-found.page.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
