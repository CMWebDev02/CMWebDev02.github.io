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
      className="h-full flex flex-row"
      onClick={redirectFunction}
    >
      <h3 className="text-4xl">
        {linkText}
      </h3>
      <span className="text-xs">
        {children}
      </span>
    </Button>
  );
}
