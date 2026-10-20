"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink, FileText, FlaskConical, Gamepad2, Lightbulb, Play, X } from "lucide-react";
import type { ResourceType, RoadmapData, RoadmapStep } from "@/data/roadmaps";
import { navigateTabs } from "@/lib/tabs";
import { number } from "@/lib/format";
import { LearningContent } from "@/components/learning-content";

const resourceTypes: Record<ResourceType, { label: string; icon: typeof Play }> = {
  "video-fa": { label: "ویدیوی فارسی", icon: Play },
  "video-en": { label: "ویدیوی انگلیسی", icon: Play },
  interactive: { label: "تمرین تعاملی", icon: Gamepad2 },
  doc: { label: "مستندات", icon: FileText },
};

type Props = {
  step: RoadmapStep;
  initialTopicId?: string;
  roadmap: RoadmapData;
  onClose: () => void;
  onSelect: (step: RoadmapStep) => void;
};

export function StepPanel({ step, initialTopicId, roadmap, onClose, onSelect }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [tab, setTab] = useState("topics");
  const index = roadmap.steps.findIndex(item => item.id === step.id);

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  useEffect(() => {
    if (!initialTopicId) return;
    const timeout = window.setTimeout(() => {
      const topic = Array.from(dialog.current?.querySelectorAll<HTMLElement>("[data-topic-id]") || []).find(element => element.dataset.topicId === initialTopicId);
      topic?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      topic?.focus({ preventScroll: true });
    }, 200);
    return () => window.clearTimeout(timeout);
  }, [initialTopicId]);

  function navigate(next: RoadmapStep) {
    setTab("topics");
    onSelect(next);
    dialog.current?.querySelector(".panel-body")?.scrollTo(0, 0);
  }

  return (
    <dialog ref={dialog} className="step-dialog" aria-labelledby="step-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="panel-inner" data-accent={roadmap.accentColor}>
        <header className="panel-top">
          <span className="eyebrow">{roadmap.title}</span>
          <button className="icon-button" onClick={onClose} aria-label="بستن جزئیات مرحله" autoFocus><X size={21} /></button>
        </header>
        <div className="panel-intro">
          <span className="step-kicker">{step.label || `مرحلهٔ ${number(step.stepNumber)} از ${number(roadmap.steps.length)}`} <span> / </span> {roadmap.learningMode === "modular" ? step.isInternCore ? "هستهٔ مسیر" : "انتخابی" : step.isInternCore ? "مباحث پایهٔ کارآموزی" : "مباحث تکمیلی"}</span>
          <h2 id="step-title">{step.title}</h2>
          <p className="english-subtitle" dir="ltr">{step.subtitle}</p>
          <p className="panel-description">{step.description}</p>
        </div>
        <div className="panel-tabs" role="tablist" onKeyDown={navigateTabs} aria-label="جزئیات مرحله">
          <button role="tab" tabIndex={tab === "topics" ? 0 : -1} id="tab-topics" aria-controls="panel-topics" aria-selected={tab === "topics"} onClick={() => setTab("topics")}>مباحث <span>{number(step.topics.length)}</span></button>
          <button role="tab" tabIndex={tab === "resources" ? 0 : -1} id="tab-resources" aria-controls="panel-resources" aria-selected={tab === "resources"} onClick={() => setTab("resources")}>منابع یادگیری <span>{number(step.resources.length)}</span></button>
          {step.miniProject && <button role="tab" tabIndex={tab === "practice" ? 0 : -1} id="tab-practice" aria-controls="panel-practice" aria-selected={tab === "practice"} onClick={() => setTab("practice")}>تمرین عملی</button>}
        </div>
        <div className="panel-body">
          {tab === "topics" && <section role="tabpanel" id="panel-topics" aria-labelledby="tab-topics" className="topic-list">
            {step.prerequisites && <div className="step-prerequisites"><h3>پیش‌نیاز</h3><p>{step.prerequisites}</p><div>{step.prerequisiteIds?.map(id => {
              const prerequisite = roadmap.steps.find(item => item.id === id);
              return prerequisite ? <button key={id} className="text-button" onClick={() => navigate(prerequisite)}>دیدن {prerequisite.label || prerequisite.title}<ArrowLeft size={13} /></button> : null;
            })}</div></div>}
            {step.outcome && <div className="step-outcome"><h3>معیار پایان این بخش</h3><p>{step.outcome}</p></div>}
            {step.topics.map(topic => <article key={topic.id} data-topic-id={topic.id} className="topic-item" tabIndex={-1} aria-labelledby={`topic-title-${topic.id}`}>
              <div className="topic-heading">
                <span className="topic-copy"><span id={`topic-title-${topic.id}`} className="topic-title">{topic.title}</span>{topic.enTitle && <span className="topic-english" dir="ltr">{topic.enTitle}</span>}{topic.isOptional && <span className="optional-tag">اختیاری</span>}</span>
              </div>
              {topic.note && <div className="topic-note"><Lightbulb size={15} /><p>{topic.note}</p></div>}
              {topic.interviewTip && <details className="interview-tip"><summary><span><Lightbulb size={14} />نکتهٔ مصاحبه</span><ChevronDown size={14} /></summary><p>{topic.interviewTip}</p></details>}
            </article>)}
            {step.guidance?.map(section => <details className="learning-disclosure" key={section.title}><summary>{section.title}<ChevronDown size={14} /></summary><LearningContent section={section} /></details>)}

          </section>}
          {tab === "resources" && <section role="tabpanel" id="panel-resources" aria-labelledby="tab-resources" className="resource-list">
            <p className="section-note">برای شروع، یک منبع انتخاب کن. لینک‌ها در صفحهٔ جدید باز می‌شوند.</p>
            {step.resourceNote && <p className="resource-editorial-note">{step.resourceNote}</p>}
            {step.resources.map((resource, i) => {
              const { icon: Icon, label } = resourceTypes[resource.type];
              return <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-item" key={`${resource.url}-${i}`}><div className="resource-meta"><span><Icon size={14} />{label}</span><span dir="auto">{resource.platform}<ExternalLink size={14} /></span></div><h3>{resource.title}</h3><p>{resource.description}</p></a>;
            })}
          </section>}
          {tab === "practice" && step.miniProject && <section role="tabpanel" id="panel-practice" aria-labelledby="tab-practice" className="practice-card"><span className="practice-icon"><FlaskConical size={30} /></span><span className="eyebrow">تمرین پیشنهادی</span><h3>تمرین این مرحله</h3><p>{step.miniProject}</p><div className="practice-hint">از نسخهٔ ساده شروع کن؛ هدف، استفاده از مباحث همین مرحله است.</div></section>}
        </div>
        <footer className="panel-footer">

          <div className="panel-navigation"><button className="secondary-button" disabled={index === 0} onClick={() => navigate(roadmap.steps[index - 1])}><ArrowRight size={16} />مرحلهٔ قبلی</button>{index < roadmap.steps.length - 1 ? <button className="primary-button" onClick={() => navigate(roadmap.steps[index + 1])}>مرحلهٔ بعدی<ArrowLeft size={16} /></button> : <button className="primary-button" onClick={onClose}>بازگشت به نقشه<ArrowLeft size={16} /></button>}</div>
        </footer>
      </div>
    </dialog>
  );
}
