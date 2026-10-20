"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpLeft, Box, Braces, ChevronDown, Code2, Copy, ExternalLink, GitBranch, Layers3, Search, Sparkles, Terminal, X } from "lucide-react";
import { ROADMAPS, type RoadmapStep } from "@/data/roadmaps";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommunityQuestions } from "@/components/community-questions";
import { StepPanel } from "@/components/step-panel";
import { RoadmapTree } from "@/components/roadmap-tree";
import { RoadmapGuide } from "@/components/roadmap-guide";
import { number } from "@/lib/format";

const routeMeta: Record<string, { icon: typeof Braces; title: string; category: string; tags: string[] }> = {
  "django-backend": { icon: Braces, title: "Django", category: "BACKEND ENGINEERING", tags: ["Python", "Django", "REST API"] },
  "data-science": { icon: Layers3, title: "Data & AI", category: "DATA SCIENCE", tags: ["Python", "Machine Learning", "AI"] },
  "linux-devops-core": { icon: Terminal, title: "Linux & Docker", category: "DEVELOPER ESSENTIALS", tags: ["Linux", "Bash", "Docker"] },
  frontend: { icon: Code2, title: "Frontend", category: "FRONTEND DEVELOPMENT", tags: ["JavaScript", "React", "Next.js"] },
};
const defaultMeta = { icon: Code2, title: "Learning", category: "LEARNING PATH", tags: [] as string[] };

function AtlasArtwork() {
  return <div className="atlas-art" aria-hidden="true"><div className="atlas-orbit orbit-one" /><div className="atlas-orbit orbit-two" /><div className="atlas-floor" /><div className="atlas-network"><svg viewBox="0 0 480 270"><defs><linearGradient id="atlas-wire"><stop stopColor="#34d399" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs><path d="M240 69V113M240 113H98Q78 113 78 133V159M240 113H382Q402 113 402 133V159M240 113V198" /><path className="secondary-wire" d="M78 182V216H153M402 182V216H327M240 217V245" /><circle cx="240" cy="113" r="5" /><circle cx="153" cy="216" r="3" /><circle cx="327" cy="216" r="3" /></svg><div className="atlas-center"><GitBranch size={27} /><span>LEARNING ROADMAPS</span></div><div className="atlas-tile tile-django"><Braces size={23} /><span>Backend</span><i /></div><div className="atlas-tile tile-data"><Layers3 size={23} /><span>Data & AI</span><i /></div><div className="atlas-tile tile-linux"><Terminal size={23} /><span>Linux</span><i /></div><span className="atlas-coordinate coordinate-one">01 / CHOOSE A PATH</span><span className="atlas-coordinate coordinate-two">TOPICS / RESOURCES / PROJECTS</span></div></div>;
}

export function PublicRoadmaps({ initialRoadmapId }: { initialRoadmapId?: string }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [depth, setDepth] = useState(true);
  const [selected, setSelected] = useState<{ step: RoadmapStep; topicId?: string } | null>(null);
  const [notice, setNotice] = useState("");
  const roadmap = ROADMAPS.find(item => item.id === initialRoadmapId) || ROADMAPS[0];

  useEffect(() => {
    setSelected(null);
    setQuery("");
    setFilter("all");
  }, [initialRoadmapId]);
  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 3500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  async function shareRoadmap() {
    const url = `${window.location.origin}/roadmaps/${roadmap.id}#roadmap`;
    try { await navigator.clipboard.writeText(url); setNotice("لینک این نقشهٔ راه کپی شد."); }
    catch { window.prompt("لینک این مسیر را کپی کن", url); }
  }
  const filteredSteps = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    return roadmap.steps.filter(step => {
      const matchesFilter = filter !== "core" || step.isInternCore;
      return matchesFilter && (!q || [step.title, step.subtitle, step.description, step.prerequisites || "", step.outcome || "", ...step.topics.flatMap(topic => [topic.title, topic.enTitle || "", topic.note || "", topic.interviewTip || ""]), ...step.resources.map(resource => resource.title)].join(" ").toLocaleLowerCase().includes(q));
    });
  }, [query, filter, roadmap]);

  return <div className="public-site" data-accent={roadmap.accentColor}>
    <a className="skip-link" href="#roadmap">رفتن به نقشهٔ راه</a>
    <div className="ambient-glow glow-emerald" aria-hidden="true" /><div className="ambient-glow glow-violet" aria-hidden="true" />
    <SiteHeader />

    <main id="main-content">
      <section className="public-hero section-container"><div className="hero-copy"><span className="hero-eyebrow"><span className="eyebrow-line" />راهنمای یادگیری برنامه‌نویسی و مهارت‌های فنی</span><h1>نقشهٔ راه یادگیری،<br /><span>از پایه تا پروژه.</span></h1><p>یک مسیر انتخاب کن تا بدانی چه مباحثی را با چه ترتیبی یاد بگیری. منابع هر مرحله و پروژه‌های پیشنهادی هم در همین صفحه‌اند.</p><a className="hero-link" href="#roadmaps">انتخاب مسیر یادگیری<ArrowDown size={16} /></a><div className="hero-footnote"><span className="overlapping-dots"><i /><i /><i /></span>گردآوری‌شده توسط کامیونیتی UniDev</div></div><AtlasArtwork /></section>

      <section id="roadmaps" className="roadmap-catalog section-container" aria-labelledby="catalog-title"><div className="catalog-heading"><h2 id="catalog-title">چه چیزی می‌خواهی یاد بگیری؟</h2><span>{number(ROADMAPS.length)} مسیر یادگیری<GitBranch size={14} /></span></div><div className="catalog-grid">{ROADMAPS.map(item => {
        const meta = routeMeta[item.id] || defaultMeta;
        const Icon = meta.icon;
        return <Link key={item.id} href={`/roadmaps/${item.id}#roadmap`} data-accent={item.accentColor} aria-current={roadmap.id === item.id ? "page" : undefined} className="catalog-card"><div className="catalog-card-top"><span className="catalog-icon"><Icon size={23} /></span><span className="catalog-category" dir="ltr">{meta.category}</span><ArrowUpLeft className="catalog-arrow" size={19} /></div><h3>{item.title}</h3><div className="catalog-card-bottom"><span>{item.learningMode === "modular" ? `${number(item.steps.filter(step => step.stepNumber > 0).length)} ماژول + پایه‌های وب` : `${number(item.steps.length)} مرحله`}<span className="inline-dot">·</span>{number(item.steps.reduce((total, step) => total + step.topics.length, 0))} مبحث</span><span dir="ltr" className="catalog-tags">{meta.tags.slice(0, 2).join(" / ")}</span></div></Link>;
      })}</div></section>

      <CommunityQuestions />

      <section className="explorer-section section-container" id="roadmap" data-accent={roadmap.accentColor} aria-labelledby="roadmap-title"><div className="explorer-heading"><div><span className="section-eyebrow"><span className="status-dot" />مراحل و مباحث یادگیری</span><h2 id="roadmap-title">{roadmap.title}</h2><p>{roadmap.tagline}</p></div><button className="share-button" onClick={shareRoadmap} aria-label="کپی لینک این مسیر" title="کپی لینک این مسیر"><Copy size={15} />کپی لینک مسیر</button></div><details className="roadmap-about"><summary><span>معرفی مسیر و گردآورنده</span><ChevronDown size={14} /></summary><div><p>{roadmap.description}</p><span className="english-subtitle" dir="ltr">{roadmap.enTitle}</span>{roadmap.contributor.githubUrl ? <a href={roadmap.contributor.githubUrl} target="_blank" rel="noopener noreferrer"><span className="contributor-avatar">{roadmap.contributor.name.slice(0, 1)}</span><span><strong>{roadmap.contributor.name}</strong><small>{roadmap.contributor.role}</small></span><ExternalLink size={13} /></a> : <div className="contributor-info"><span className="contributor-avatar">{roadmap.contributor.name.slice(0, 1)}</span><span><strong>{roadmap.contributor.name}</strong><small>{roadmap.contributor.role}</small></span></div>}</div></details>

        <RoadmapGuide roadmap={roadmap} />
        {roadmap.learningMode === "modular" && <p className="modular-note">از ماژولی شروع کن که به آن نیاز داری. ابزارهای توسعه را می‌توان هم‌زمان یاد گرفت؛ معیار پایان و پیش‌نیاز هر بخش در جزئیات آن آمده است.</p>}

        <div className="explorer-toolbar"><div className="map-view-switch" role="group" aria-label="زاویهٔ نقشه"><button className={depth ? "active" : ""} aria-pressed={depth} onClick={() => setDepth(true)}><Box size={15} />نمای سه‌بعدی</button><button className={!depth ? "active" : ""} aria-pressed={!depth} onClick={() => setDepth(false)}><GitBranch size={15} />نمای تخت</button></div><div className="map-search"><Search size={16} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="جستجوی مبحث یا منبع" aria-label="جستجو در مباحث و منابع این مسیر" />{query && <button aria-label="پاک کردن جستجو" onClick={() => setQuery("")}><X size={14} /></button>}</div><label className="map-filter"><span className="sr-only">فیلتر مراحل</span><select value={filter} onChange={event => setFilter(event.target.value)}><option value="all">همهٔ مراحل</option><option value="core">{roadmap.learningMode === "modular" ? "پایه‌ها و ماژول‌های اصلی" : "مراحل پایهٔ کارآموزی"}</option></select><ChevronDown size={14} /></label></div>

        <div className="map-surface"><div className="map-topline"><span><span className="legend-dot" />{roadmap.learningMode === "modular" ? "روی ماژول یا مبحث بزن تا هدف، پیش‌نیاز، معیار پایان و منابع آن را ببینی." : "روی مرحله یا مبحث بزن تا توضیحات و منابع آن مرحله باز شود."}</span></div>{filteredSteps.length ? <RoadmapTree roadmap={roadmap} steps={filteredSteps} depth={depth} onOpen={(step, topicId) => setSelected({ step, topicId })} /> : <div className="empty-state" role="status"><Search size={30} /><h3>مبحث یا منبعی پیدا نشد.</h3><p>عبارت دیگری امتحان کن یا همهٔ مراحل را نمایش بده.</p><button className="text-button" onClick={() => { setQuery(""); setFilter("all"); }}>نمایش همهٔ مراحل<ArrowLeft size={14} /></button></div>}
        <div className="map-bottomline"><span dir="ltr"><GitBranch size={13} />UNIDEV / {(routeMeta[roadmap.id] || defaultMeta).title.toUpperCase()}</span><span>{number(filteredSteps.length)} {roadmap.learningMode === "modular" ? "بخش" : "مرحله"}<span className="inline-dot">·</span>{roadmap.learningMode === "modular" ? "چیدمان پیشنهادی، قابل انتخاب" : "ترتیب پیشنهادی یادگیری"}</span></div></div>


      </section>

      <section className="projects-section section-container" id="projects" aria-labelledby="projects-title"><div className="projects-heading"><div><span className="section-eyebrow"><Code2 size={15} />تمرین و نمونه‌کار</span><h2 id="projects-title">پروژه‌های پیشنهادی این مسیر</h2></div><p>یک پروژه متناسب با سطح خودت انتخاب کن و مباحث این مسیر را در عمل تمرین کن.</p></div><div className="projects-grid">{roadmap.projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-card-top"><span className="project-level">سطح {project.level}</span><span>پروژهٔ {number(i + 1)}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-stack">{project.techStack.map(tech => <span key={tech} dir="ltr">{tech}</span>)}</div></article>)}</div></section>

      <section className="how-it-works section-container" id="how-it-works" aria-labelledby="guide-title"><div><span className="section-eyebrow"><Sparkles size={15} />راهنمای استفاده از نقشه‌ها</span><h2 id="guide-title">از کجا شروع کنی؟</h2></div><ol><li><span>۰۱</span><div><h3>مسیر را انتخاب کن</h3><p>کارت مسیر موردنظرت را از بخش نقشه‌راه‌ها باز کن.</p></div></li><li><span>۰۲</span><div><h3>{roadmap.learningMode === "modular" ? "نقطهٔ شروع را پیدا کن" : "مرحله‌ها را به‌ترتیب ببین"}</h3><p>{roadmap.learningMode === "modular" ? "معیار پایان ماژول‌ها را ببین و نقطهٔ شروع را انتخاب کن. TypeScript و React را می‌توان هم‌زمان یاد گرفت." : "از بالا به پایین پیش برو. روی هر مرحله یا مبحث بزن تا توضیحات و منابعش باز شود."}</p></div></li><li><span>۰۳</span><div><h3>با یک پروژه تمرین کن</h3><p>بعد از یادگیری مباحث، یکی از پروژه‌های پیشنهادی همان مسیر را بساز.</p></div></li></ol></section>
    </main>
    <SiteFooter />
    {selected && <StepPanel step={selected.step} initialTopicId={selected.topicId} roadmap={roadmap} onClose={() => setSelected(null)} onSelect={step => setSelected({ step })} />}
    {notice && <div className="toast" role="status"><Copy size={17} />{notice}<button aria-label="بستن پیام" onClick={() => setNotice("")}><X size={15} /></button></div>}
  </div>;
}
