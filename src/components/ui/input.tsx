import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-[52px] w-full rounded-lg border border-tag-line-strong bg-tag-cream px-4 text-[15px] text-tag-text shadow-none outline-none placeholder:text-tag-text-muted transition-[border-color,box-shadow] focus:border-tag-gold focus:ring-[3px] focus:ring-tag-gold/25 disabled:cursor-not-allowed disabled:bg-tag-sand disabled:text-tag-text-muted aria-invalid:border-tag-error-border aria-invalid:bg-tag-error-bg aria-invalid:ring-tag-error-bg",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
