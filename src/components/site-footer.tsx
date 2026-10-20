import Link from "next/link";
import { Brand } from "@/components/brand";
import { community } from "@/data/community";

export function SiteFooter() {
  return (
    <footer className="site-footer section-container">
      <Brand compact />
      <p>نقشه‌راه‌های یادگیری کامیونیتی UniDev</p>
      <nav className="footer-links" aria-label="درباره و ارتباط">
        <Link href="/about">دربارهٔ یونی‌دو</Link>
        {community.communityUrl && <a href={community.communityUrl} target="_blank" rel="noopener noreferrer">کامیونیتی تلگرام</a>}
      </nav>
    </footer>
  );
}
