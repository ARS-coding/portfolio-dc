import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  // useEffect(() => {
  //   gsap.from(".name", { duration: 2, opacity: 0 });
  //   gsap.from(".navlink", { duration: 0.7, opacity: 0, y: -20, stagger: 0.2, ease: "power1", delay: 1 });
  //   gsap.from(".nav-social-icon", { duration: 0.7, opacity: 0, y: 20, stagger: 0.2, ease: "power1", delay: 2.5 });
  // }, []);

  return (
    <header className="sticky top-0 z-10 py-3 lg:py-5 bg-[#6700ee] shadow">
      <div className="max-w-7xl mx-auto px-7 flex items-center justify-between">
        {window.innerWidth > 993 ? (
          <Image src="/full-name-20.svg" alt="full name 20" className="name" width={175} height={50} />
        ) : (
          <Image src="/full-name-16.svg" alt="full name 16" className="name" width={175} height={50} />
        )}

        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Link href="#work" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white">Work</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#skills" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white">Skills</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#contact-me" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white">Contact Me</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
