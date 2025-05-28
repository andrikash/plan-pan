import { Outlet } from "@remix-run/react";
import { Menu } from "~/components/menu/menu.component";

export default function AuthLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
