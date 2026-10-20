import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROADMAPS } from "@/data/roadmaps";
import { PublicRoadmaps } from "@/components/public-roadmaps";

export function generateStaticParams() {
  return ROADMAPS.map(roadmap => ({ id: roadmap.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const roadmap = ROADMAPS.find(item => item.id === params.id);
  return {
    title: roadmap ? `${roadmap.title} | UniDev Roadmaps` : "مسیر پیدا نشد | UniDev",
    description: roadmap?.tagline,
  };
}

export default function RoadmapPage({ params }: { params: { id: string } }) {
  if (!ROADMAPS.some(roadmap => roadmap.id === params.id)) notFound();
  return <PublicRoadmaps initialRoadmapId={params.id} />;
}
