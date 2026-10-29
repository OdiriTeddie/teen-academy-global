import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  placement?: "header" | "footer";
};

export function BrandLogo({ placement = "header" }: BrandLogoProps) {
  const isHeader = placement === "header";

  return (
    <Link
      aria-label="Teens Academy Global home"
      className="inline-flex shrink-0 items-center gap-2.5"
      href="/"
    >
      <span className={`relative grid shrink-0 place-items-center overflow-hidden rounded-lg bg-tag-cream ${isHeader ? "size-10" : "size-12"}`}>
        <Image alt="" className="object-contain p-1" fill sizes={isHeader ? "40px" : "48px"} src="/icon.png" />
      </span>
      <span className="leading-none">
        <strong className={`block font-heading font-bold tracking-[-.03em] ${isHeader ? "text-lg text-tag-midnight" : "text-2xl text-tag-cream"}`}>TAG</strong>
        <span className={`mt-1 block whitespace-nowrap text-[8px] font-bold uppercase tracking-[.14em] ${isHeader ? "text-tag-text-muted" : "text-tag-text-on-dark-muted"}`}>Teens Academy Global</span>
      </span>
    </Link>
  );
}
