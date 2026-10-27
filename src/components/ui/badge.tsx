import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex min-h-6 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold leading-none",
  {
    variants: {
      variant: {
        default: "bg-tag-midnight text-tag-cream",
        gold: "bg-tag-gold text-tag-midnight",
        royal: "bg-tag-royal text-white",
        boys: "bg-tag-boys-tint text-tag-boys",
        girls: "bg-tag-girls-tint text-tag-girls-deep",
        success: "bg-tag-success-bg text-tag-success",
        notice: "bg-tag-gold-soft text-tag-midnight",
        outline: "border border-tag-line-strong bg-white text-tag-text-body",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
