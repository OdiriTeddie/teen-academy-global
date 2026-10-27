import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-lg border border-tag-line-strong bg-tag-cream px-4 py-3 text-[15px] leading-6 text-tag-text outline-none placeholder:text-tag-text-muted transition-[border-color,box-shadow] focus:border-tag-gold focus:ring-[3px] focus:ring-tag-gold/25 disabled:cursor-not-allowed disabled:bg-tag-sand disabled:text-tag-text-muted aria-invalid:border-tag-error-border aria-invalid:bg-tag-error-bg aria-invalid:ring-tag-error-bg",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
