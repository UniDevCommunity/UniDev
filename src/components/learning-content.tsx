import type { LearningSection } from "@/data/roadmaps";

export function LearningContent({ section }: { section: LearningSection }) {
  return <div className="learning-content">
    {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
  </div>;
}
