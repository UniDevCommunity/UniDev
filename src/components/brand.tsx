import Image from "next/image";
import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={`brand${compact ? " brand-compact" : ""}`}
      href="/"
      aria-label="UniDev؛ صفحهٔ اصلی نقشه‌راه‌ها"
    >
      <span className="brand-mark">
        <Image
          className="brand-logo"
          src="/brand/unidev.jpg"
          alt="لوگوی UniDev"
          width={96}
          height={96}
          sizes="80px"
          priority={!compact}
        />
      </span>
      <span dir="ltr">
        UniDev<span className="brand-dot">.</span>
        {!compact && <small dir="rtl">مسیرهای یادگیری</small>}
      </span>
    </Link>
  );
}
