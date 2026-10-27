import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  align?: "left" | "center";
  className?: string;
  copy?: string;
  eyebrow?: string;
  inverse?: boolean;
  title: string;
};

export function SectionHeading({
  align = "center",
  className,
  copy,
  eyebrow,
  inverse = false,
  title,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        inverse ? "text-tag-cream" : "text-tag-midnight",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", inverse ? "text-tag-gold" : "text-tag-royal")}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-heading text-3xl font-bold leading-[1.02] sm:text-4xl">{title}</h2>
      {copy && (
        <p className={cn("mt-4 text-base leading-7", inverse ? "text-tag-text-on-dark-body" : "text-tag-text-body")}>
          {copy}
        </p>
      )}
    </header>
  );
}
