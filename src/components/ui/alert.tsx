import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("rounded-md border px-4 py-3 text-sm font-medium", {
  variants: {
    variant: {
      info: "border-tag-boys-tint bg-tag-boys-tint text-tag-royal-deep",
      success: "border-tag-success-bg bg-tag-success-bg text-tag-success",
      warning: "border-tag-gold-soft bg-tag-gold-soft text-tag-midnight",
      error: "border-tag-error-bg bg-tag-error-bg text-tag-error",
      trust: "border-tag-midnight bg-tag-midnight text-tag-cream",
    },
  },
  defaultVariants: { variant: "info" },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div role="status" className={cn(alertVariants({ variant }), className)} {...props} />;
}

export { Alert, alertVariants };
