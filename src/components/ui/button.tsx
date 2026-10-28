import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-150 outline-none select-none focus-visible:ring-[3px] focus-visible:ring-tag-gold disabled:pointer-events-none disabled:border-tag-line disabled:bg-tag-sand disabled:text-tag-text-muted! active:not-aria-[haspopup]:translate-y-px aria-invalid:border-tag-error aria-invalid:ring-tag-error-bg motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-tag-royal text-white! shadow-elev-button hover:bg-tag-royal-deep hover:text-white!",
        accent: "bg-tag-gold text-tag-midnight! shadow-elev-button hover:bg-[#d99610] hover:text-tag-midnight!",
        outline:
          "border-tag-midnight bg-tag-cream text-tag-midnight! hover:bg-tag-sand hover:text-tag-midnight!",
        "outline-inverse":
          "border-tag-cream/60 bg-transparent text-tag-cream! hover:bg-tag-cream hover:text-tag-midnight!",
        inverse: "bg-white text-tag-royal! hover:bg-tag-cream hover:text-tag-royal-deep!",
        glass:
          "border-tag-cream/70 bg-tag-midnight/20 text-tag-cream! backdrop-blur hover:bg-tag-cream hover:text-tag-midnight!",
        subtle: "bg-tag-sand text-tag-midnight! hover:bg-tag-line hover:text-tag-midnight!",
        secondary:
          "bg-tag-midnight text-tag-cream! hover:bg-tag-midnight-2 hover:text-white!",
        dark: "bg-tag-midnight text-tag-cream! hover:bg-tag-midnight-2 hover:text-white!",
        ghost:
          "text-tag-midnight! hover:bg-muted hover:text-tag-midnight! aria-expanded:bg-muted aria-expanded:text-tag-midnight! dark:hover:bg-muted/50",
        destructive: "bg-tag-error text-white! hover:bg-tag-girls-deep hover:text-white! focus-visible:ring-tag-error-bg",
        link: "h-auto rounded-none border-0 p-0 text-tag-royal! underline-offset-4 shadow-none hover:text-tag-royal-deep! hover:underline",
      },
      size: {
        default: "h-[52px] gap-2 px-6 text-[15px]",
        xs: "h-9 gap-1.5 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        sm: "h-11 gap-2 px-5 text-sm",
        lg: "h-[58px] gap-2.5 px-8 text-base",
        xl: "h-[58px] gap-2.5 px-8 text-base",
        icon: "size-11",
        "icon-xs": "size-9 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-10",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
