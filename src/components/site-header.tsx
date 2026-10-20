"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Brand } from "@/components/brand";

export function SiteHeader({ activePage = "roadmaps" }: { activePage?: "roadmaps" | "about" }) {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const home = activePage === "about" ? "/" : "";

  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function changeTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("unidev_theme", next); } catch { /* Keep the session preference. */ }
  }

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner">
        <Brand />
        <nav id="site-navigation" className="header-nav" data-open={menuOpen} aria-label="ناوبری اصلی">
          <Link href={`${home}#roadmaps`} className={activePage === "roadmaps" ? "active" : undefined} onClick={() => setMenuOpen(false)}>نقشه‌راه‌ها</Link>
          <Link href={`${home}#projects`} onClick={() => setMenuOpen(false)}>پروژه‌های پیشنهادی</Link>
          <Link href={`${home}#how-it-works`} onClick={() => setMenuOpen(false)}>راهنمای استفاده</Link>
          <Link href="/about" className={activePage === "about" ? "active" : undefined} aria-current={activePage === "about" ? "page" : undefined} onClick={() => setMenuOpen(false)}>دربارهٔ یونی‌دو</Link>
        </nav>
        <div className="header-actions">
          <span className="public-badge"><span />بدون نیاز به ثبت‌نام</span>
          <button className="icon-button theme-toggle" onClick={changeTheme} aria-label={theme === "dark" ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک"}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button ref={menuButton} className="icon-button mobile-menu-toggle" aria-label={menuOpen ? "بستن منو" : "باز کردن منو"} aria-controls="site-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(previous => !previous)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>
  );
}
