import type { MetaFunction } from "@remix-run/node";
import { Menu } from "~/components/menu/menu.component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="py-">
      <Menu />
      <div className="bg-brand">landing page</div>
    </div>
  );
}
