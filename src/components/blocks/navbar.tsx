"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Customers", href: "/customers" },
  { label: "Global", href: "/#global" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const darkNav = pathname === "/services" || pathname === "/customers";

  return (
    <section
      className={cn(
        "left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        pathname === "/" ? "fixed" : "absolute",
        darkNav
          ? "border-white/12 bg-[#111214]/78 text-white"
          : "bg-background/70 text-foreground",
        "lg:w-[min(92%,820px)]",
        "top-5 lg:top-12",
      )}
    >
      <div className="relative flex h-14 items-center justify-between px-6">
        <Link
          href="/"
          target="_self"
          className="relative flex h-full w-24 shrink-0 items-center"
        >
          <Image
            src={darkNav ? "/ace_logo footer.png" : "/ace_logo.png"}
            alt="ACE"
            width={92}
            height={92}
            className="absolute left-0 size-[88px] object-contain md:size-[100px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) => {
              const active =
                pathname === link.href ||
                (pathname === "/services" && link.label === "Services") ||
                (pathname === "/customers" && link.label === "Customers");

              return (
                <NavigationMenuItem key={link.label} className="">
                  <Link
                    href={link.href}
                    target="_self"
                    className={cn(
                      "relative bg-transparent px-1.5 pb-1 text-sm font-medium transition-opacity after:absolute after:bottom-0 after:left-1.5 after:h-px after:w-[calc(100%-0.75rem)] after:origin-center after:scale-x-0 after:rounded-full after:transition-transform hover:opacity-75",
                      darkNav ? "after:bg-white" : "after:bg-foreground",
                      active && "after:scale-x-100",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            target="_self"
            className={cn(
              "hidden h-9 items-center justify-center rounded-full border px-4 text-sm font-semibold transition lg:inline-flex",
              darkNav
                ? "border-white bg-white text-zinc-950 hover:bg-white/90"
                : "border-foreground/30 bg-background text-foreground hover:bg-accent",
            )}
          >
            Start a Project
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          darkNav
            ? "border-white/12 bg-[#111214] text-white"
            : "bg-background text-foreground",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav
          className={cn(
            "flex flex-1 flex-col divide-y",
            darkNav ? "divide-white/12" : "divide-border",
          )}
        >
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_self"
              className={cn(
                "py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                darkNav
                  ? "text-white/86 hover:text-white"
                  : "text-primary hover:text-primary/80",
                pathname === link.href &&
                  (darkNav ? "text-white" : "text-muted-foreground"),
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            target="_self"
            className={cn(
              "mt-5 inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold",
              darkNav
                ? "border-white bg-white text-zinc-950 hover:bg-white/90"
                : "border-foreground/30 bg-background text-foreground hover:bg-accent",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </section>
  );
};
