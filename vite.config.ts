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
          route("/", "pages/redirect-to-landing.page.tsx", {
            index: true,
          });
          route("/:lang", "layouts/core.layout.tsx", () => {
            route("landing-page", "pages/landing.page.tsx");
            route("auth", "layouts/auth.layout.tsx", () => {
              route("login", "pages/login.page.tsx");
            });
          });
          route("/not-found", "pages/not-found.page.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
