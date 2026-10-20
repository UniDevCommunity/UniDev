import { ArrowDownToLine, ArrowUpLeft, ChevronDown } from "lucide-react";
import type { RoadmapData } from "@/data/roadmaps";
import { LearningContent } from "@/components/learning-content";

export function RoadmapGuide({ roadmap }: { roadmap: RoadmapData }) {
  if (!roadmap.guide?.length) return null;

  return <details className="roadmap-guide">
    <summary><span>راهنما و فایل‌های مسیر<span>انتخاب نقطهٔ شروع، معیارهای آمادگی و منابع اصلی</span></span><ChevronDown size={17} /></summary>
    <div className="roadmap-guide-body">
      {roadmap.guide.map(section => <details className="learning-disclosure" key={section.title}><summary>{section.title}<ChevronDown size={14} /></summary><LearningContent section={section} /></details>)}
      {roadmap.references && <section className="roadmap-source-references" aria-labelledby="source-references-title"><h3 id="source-references-title">منابع مرجع در فایل اصلی</h3><p>این سه منبع الهام‌بخش ساختار رودمپ‌اند. منابع آموزشی تکمیلی در جزئیات هر ماژول قرار دارند.</p><ul>{roadmap.references.map(reference => <li key={reference.url}><a href={reference.url} target="_blank" rel="noopener noreferrer"><span dir="auto">{reference.title}</span><ArrowUpLeft size={14} /></a><p>{reference.description}</p></li>)}</ul></section>}
      {roadmap.downloads && <nav className="roadmap-downloads" aria-label="فایل‌های اصلی رودمپ">{roadmap.downloads.map(file => <a className="secondary-button" key={file.url} href={file.url} download><ArrowDownToLine size={15} />{file.title}</a>)}</nav>}
    </div>
  </details>;
}
