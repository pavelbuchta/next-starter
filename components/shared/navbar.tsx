"use client";

import { APP_NAME, MAX_CONTENT_WIDTH } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 flex w-full items-center justify-center border-b bg-[rgba(0,0,0,0.2)] py-4 backdrop-blur-[24px] transition-all duration-300",
        {
          "border-border": isScrolled,
          "border-transparent": !isScrolled,
        }
      )}
    >
      <div
        style={{ maxWidth: MAX_CONTENT_WIDTH + "px" }}
        className="flex w-full items-center justify-between px-4 md:px-6"
      >
        <div className="flex items-center justify-start md:w-[200px]">
          <Link href={"#hero"} scroll>
            <div className="h-[30px]">
              <Image
                className="h-full w-auto"
                src={"/logo.svg"}
                width={126}
                height={30}
                alt={APP_NAME + " Logo"}
                priority
              />
            </div>
          </Link>
        </div>
        <ul className="hidden items-center justify-center gap-7 lg:flex">
          <NavItem href={"#start-here"}>Start here</NavItem>
          <NavItem href={"#services"}>Services</NavItem>
          <NavItem href={"#pricing"}>Pricing</NavItem>
          <NavItem href={"#faqs"}>FAQs</NavItem>
          <NavItem href={"#about"}>About</NavItem>
          <NavItem href={"#happy-clients"}>Happy Clients</NavItem>
        </ul>
        <ul className="flex items-center justify-end gap-6 md:w-[200px]">
          <NavItem className={"max-sm:hidden"} blank href={"/signin"}>
            Sign in
          </NavItem>
          <li>
            <Link href={"/contact"} rel="noopener noreferrer" target="_blank">
              <Button text="Get started" variant="primary" icon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
  blank,
  className,
}: {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
  className?: string;
}) {
  return (
    <li
      className={
        "cursor-pointer text-nowrap text-sm font-medium text-foreground-secondary hover:text-foreground" +
        " " +
        className
      }
    >
      <Link
        {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
