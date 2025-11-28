import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoBoxVariant = "info" | "warning" | "success";

const variantStyles: Record<InfoBoxVariant, string> = {
  info: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950",
  warning:
    "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950",
  success:
    "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950",
};

const titleStyles: Record<InfoBoxVariant, string> = {
  info: "text-blue-900 dark:text-blue-100",
  warning: "text-amber-900 dark:text-amber-100",
  success: "text-green-900 dark:text-green-100",
};

const contentStyles: Record<InfoBoxVariant, string> = {
  info: "text-blue-800 dark:text-blue-200",
  warning: "text-amber-800 dark:text-amber-200",
  success: "text-green-800 dark:text-green-200",
};

type InfoBoxProps = {
  title: string;
  children: ReactNode;
  variant?: InfoBoxVariant;
  className?: string;
};

export function InfoBox({
  title,
  children,
  variant = "info",
  className,
}: InfoBoxProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        variantStyles[variant],
        className,
      )}
    >
      <h3 className={cn("mb-2 font-semibold", titleStyles[variant])}>
        {title}
      </h3>
      <div className={contentStyles[variant]}>{children}</div>
    </div>
  );
}
