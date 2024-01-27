"use client";

import clsx from "clsx";
import { Arrow } from "./icons";

export default function Button({
  variant,
  text,
  className,
  icon,
  mobileIcon,
  onClick,
}: {
  variant: "primary" | "ghost";
  text: string;
  className?: string;
  icon?: boolean;
  mobileIcon?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `${className ? className + " " : ""}transition-all flex h-[40px] items-center justify-center gap-[6px] rounded-full px-[18px] text-sm font-medium`,
        {
          "bg-foreground text-background-secondary duration-200 hover:bg-[#c8c8c8]":
            variant === "primary",
          "bg-transparent text-foreground-teritary duration-200 hover:bg-background-teritary hover:text-foreground":
            variant === "ghost",
        }
      )}
    >
      {text}
      {icon ? <Arrow /> : null}
      {mobileIcon ? <Arrow className={"md:hidden"} /> : null}
    </button>
  );
}
