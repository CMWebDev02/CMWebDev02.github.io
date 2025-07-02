import type { ReactNode } from "react";
import { Button } from "../ui/button";

interface LinkBadgeProps {
  redirectFunction: () => void;
  linkText: string;
  children: ReactNode;
}

export default function LinkBadge({
  redirectFunction,
  linkText,
  children,
}: LinkBadgeProps) {
  return (
    <Button
      className="h-full flex flex-row group cursor-pointer select-none"
      onClick={redirectFunction}
    >
      <h3 className="text-4xl transition-[color] duration-200 ease-in-out group-hover:text-highlight">
        {linkText}
      </h3>
      <span className="text-xs transition-[color] duration-200 ease-in-out group-hover:text-highlight">
        {children}
      </span>
    </Button>
  );
}
