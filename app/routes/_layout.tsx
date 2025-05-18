import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <header>
        <h1>My Site Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
