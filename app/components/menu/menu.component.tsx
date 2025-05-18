import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { getMenuItems } from "./menu.constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUserRound, LogOut } from "lucide-react";
import { Button } from "../ui/button";

export const Menu = () => {
  const menuItems = getMenuItems();
  const email = "example@email.com";
  return (
    <div className="flex items-center justify-between p-20">
      <img src="/images/logo.png" alt="Logo" className="w-[192px]" />
      <div className="flex gap-x-14">
        <div className="flex items-center gap-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link to={item.link}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-accent cursor-pointer px-4 h-9 rounded-md">
              <CircleUserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-y-2">
                  Username
                  <span className="text-gray-600">{email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Personal Information</DropdownMenuItem>
              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem>Create a New Order</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex gap-x-2">
                  <LogOut />
                  Log out
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant="default">Place Order</Button>
      </div>
    </div>
  );
};
