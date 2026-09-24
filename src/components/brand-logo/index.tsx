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
      className={`relative block shrink-0 ${isHeader ? "h-12 w-24" : "h-24 w-40"}`}
      href="/"
    >
      <Image
        alt="Teens Academy Global"
        className="object-contain object-left"
        fill
        sizes={isHeader ? "96px" : "160px"}
        src="/images/tag-logo.png"
      />
    </Link>
  );
}
