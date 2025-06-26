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
      className="flex flex-row group cursor-pointer select-none h-full"
      onClick={redirectFunction}
    >
      <h3 className="text-4xl transition-[color] duration-200 ease-in-out group-hover:text-blue-600">
        {linkText}
      </h3>
      <span className="text-xs transition-[color] duration-200 ease-in-out group-hover:text-green-500">
        {children}
      </span>
    </Button>
  );
}
