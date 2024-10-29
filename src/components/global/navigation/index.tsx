"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import logo from "@/public/assets/ACMStarlightLogo.webp";

interface link {
  name: string;
  link: string;
}

interface props {
  links: link[];
}

const Navigation = ({ links }: props) => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex max-w-full items-center justify-between bg-starlight-blue px-4 py-1 text-white">
      <Link className="flex items-center" href="/">
        <Image src={logo} alt="ACM Starlight Logo" width={64} height={64} />
      </Link>
      <NavigationMenuList>
        {links.map(({ name, link }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link
                href={link}
                className={`text-white ${
                  pathname === link ? "underline underline-offset-8" : ""
                }`}
              >
                {name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
