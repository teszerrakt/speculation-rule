import Link from "next/link";
import { cn } from "@/lib/utils";

type BackLinkProps = {
  href?: string;
  variant?: "demo" | "flight";
  className?: string;
};

export function BackLink({
  href = "/",
  variant = "demo",
  className,
}: BackLinkProps) {
  const baseStyles = "text-sm hover:underline";
  const variantStyles = {
    demo: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
    flight:
      "font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      ← Back to Home
    </Link>
  );
}
