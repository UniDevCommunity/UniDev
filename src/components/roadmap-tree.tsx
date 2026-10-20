"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ArrowDown, ArrowUpLeft, Flag, GitBranch } from "lucide-react";
import type { RoadmapData, RoadmapStep, SubTopic } from "@/data/roadmaps";
import { number } from "@/lib/format";

type Props = {
  roadmap: RoadmapData;
  steps: RoadmapStep[];
  depth: boolean;
  onOpen: (step: RoadmapStep, topicId?: string) => void;
};
type Edge = { id: string; path: string; trunk: boolean };

export function RoadmapTree({ roadmap, steps, depth, onOpen }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        const nodes = new Map(Array.from(element.querySelectorAll<HTMLElement>("[data-node-id]")).map(node => {
          const rect = node.getBoundingClientRect();
          return [node.dataset.nodeId!, { x: rect.left - bounds.left + rect.width / 2, y: rect.top - bounds.top + rect.height / 2, width: rect.width, height: rect.height, parent: node.dataset.parentId }];
        }));
        const next: Edge[] = [];
        const compact = window.matchMedia("(max-width: 560px)").matches;
        const rail = element.clientWidth - 9;
        nodes.forEach((node, id) => {
          if (!node.parent) return;
          const parent = nodes.get(node.parent);
          if (!parent) return;
          const trunk = id.startsWith("stage-") || id === "finish";
          let path: string;
          if (compact) {
            const targetX = node.x + node.width / 2;
            if (trunk) {
              const parentX = parent.x + parent.width / 2;
              path = `M ${parentX} ${parent.y} H ${rail - 7} Q ${rail} ${parent.y} ${rail} ${parent.y + 7} V ${node.y - 7} Q ${rail} ${node.y} ${rail - 7} ${node.y} H ${targetX}`;
            } else {
              path = `M ${rail} ${parent.y} V ${node.y - 7} Q ${rail} ${node.y} ${rail - 7} ${node.y} H ${targetX}`;
            }
          } else if (trunk) {
            const y1 = parent.y + parent.height / 2;
            const y2 = node.y - node.height / 2;
            path = `M ${parent.x} ${y1} C ${parent.x} ${(y1 + y2) / 2}, ${node.x} ${(y1 + y2) / 2}, ${node.x} ${y2}`;
          } else {
            const direction = node.x > parent.x ? 1 : -1;
            const x1 = parent.x + parent.width / 2 * direction;
            const x2 = node.x - node.width / 2 * direction;
            const middle = (x1 + x2) / 2;
            path = `M ${x1} ${parent.y} C ${middle} ${parent.y}, ${middle} ${node.y}, ${x2} ${node.y}`;
          }
          next.push({ id, path, trunk });
        });
        setEdges(next);
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    element.querySelectorAll("[data-node-id]").forEach(node => observer.observe(node));
    measure();
    void document.fonts.ready.then(measure);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [roadmap.id, steps, depth]);

  function tilt(event: PointerEvent<HTMLButtonElement>) {
    if (!depth || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--rx", `${(event.clientY - rect.top - rect.height / 2) / rect.height * -9}deg`);
    event.currentTarget.style.setProperty("--ry", `${(event.clientX - rect.left - rect.width / 2) / rect.width * 9}deg`);
  }
  function resetTilt(event: PointerEvent<HTMLButtonElement>) {
    event.currentTarget.style.removeProperty("--rx");
    event.currentTarget.style.removeProperty("--ry");
  }
  function topicNode(topic: SubTopic, step: RoadmapStep, index: number) {
    return <button
      key={topic.id}
      className={`branch-node ${topic.isOptional ? "is-optional" : ""}`}
      data-node-id={topic.id}
      data-parent-id={`stage-${step.id}`}
      data-topic-id={topic.id}
      style={{ "--node-order": index + 1, "--branch-column": index % 2 === 0 ? 1 : 3, "--branch-row": Math.floor(index / 2) + 1 } as CSSProperties}
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
      onClick={() => onOpen(step, topic.id)}
    >
      <span className="branch-title">{topic.title}{topic.isOptional && <small>اختیاری</small>}</span>
      <ArrowUpLeft className="branch-open" size={14} />
    </button>;
  }

  return <div className={`roadmap-tree ${depth ? "has-depth" : "is-flat"} ${roadmap.learningMode === "modular" ? "modular-tree" : ""}`} ref={container}>
    <svg className="tree-connections" aria-hidden="true">{edges.map(edge => <g key={edge.id}><path className="edge-glow" d={edge.path} /><path className={`tree-edge ${edge.trunk ? "trunk-edge" : ""}`} d={edge.path} /></g>)}</svg>
    <div className="tree-root-wrap"><div className="tree-root glass-node" data-node-id="root"><span className="root-symbol"><GitBranch size={23} /></span><div><span className="node-overline">نقشهٔ مسیر</span><h3>{roadmap.title}</h3></div></div><span className="root-caption"><ArrowDown size={12} />{roadmap.learningMode === "modular" ? "چیدمان پیشنهادی؛ پیش‌نیازها در جزئیات هر ماژول" : "مرحله‌ها را از بالا به پایین دنبال کن"}</span></div>
    <ol className="tree-levels" aria-label="مراحل نقشه راه">
      {steps.map((step, index) => {
        return <li className="tree-level" key={step.id}>
          <div className="stage-column" style={{ gridRow: `1 / span ${Math.ceil(step.topics.length / 2)}` }}><button
            className="stage-node glass-node"
            data-node-id={`stage-${step.id}`}
            data-parent-id={index === 0 ? "root" : `stage-${steps[index - 1].id}`}
            onPointerMove={tilt}
            onPointerLeave={resetTilt}
            onClick={() => onOpen(step)}
            aria-label={`باز کردن ${step.label || `مرحله ${number(step.stepNumber)}`}: ${step.title}`}
          ><span className="stage-topline"><span className="stage-index">{number(step.stepNumber).padStart(2, "۰")}</span><span>{roadmap.learningMode === "modular" ? step.stepNumber === 0 ? "پایه‌های وب" : step.isInternCore ? step.label : "ماژول ۸ · انتخابی" : step.isInternCore ? "کارآموزی" : "تکمیلی"}</span></span><h4>{step.title}</h4><span className="stage-bottomline"><span>{number(step.topics.length)} مبحث</span><span>{number(step.resources.length)} منبع<ArrowUpLeft size={12} /></span></span></button>
          {step.milestoneBanner && <details className="tree-milestone"><summary><Flag size={13} /><span>نکتهٔ ورود به بازار کار</span></summary><div><strong>{step.milestoneBanner.title}</strong><small>{step.milestoneBanner.badge}</small><p>{step.milestoneBanner.description}</p><span dir="ltr">{step.milestoneBanner.role}</span></div></details>}
          </div>
          {step.topics.map((topic, i) => topicNode(topic, step, i))}
        </li>;
      })}
    </ol>
    <div className="tree-finish" data-node-id="finish" data-parent-id={steps.length ? `stage-${steps[steps.length - 1].id}` : "root"}><span><Flag size={18} /></span><strong>مباحث را با یک پروژه تمرین کن.</strong><a href="#projects">دیدن پروژه‌های پیشنهادی<ArrowDown size={13} /></a></div>
  </div>;
}
