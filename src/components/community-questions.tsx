import Link from "next/link";
import { ArrowUpLeft, MessagesSquare } from "lucide-react";
import { community } from "@/data/community";

export function CommunityQuestions() {
  return (
    <section className="community-help section-container" aria-labelledby="community-help-title">
      <div className="community-help-card">
        <span className="community-help-icon" aria-hidden="true"><MessagesSquare size={25} strokeWidth={1.6} /></span>
        <div className="community-help-copy">
          <h2 id="community-help-title">نمی‌دانی از کجا شروع کنی؟ بپرس.</h2>
          <p>برای انتخاب مسیر یا یک سؤال فنی، در تاپیک <span dir="ltr">Questions</span> گروه تلگرام یونی‌دو از کامیونیتی کمک بگیر.</p>
        </div>
        {community.questionsUrl ? (
          <a className="secondary-button questions-link" href={community.questionsUrl} target="_blank" rel="noopener noreferrer">پرسیدن در Questions<ArrowUpLeft size={16} /></a>
        ) : (
          <Link className="secondary-button questions-link" href="/about#questions">راهنمای پرسیدن سؤال<ArrowUpLeft size={16} /></Link>
        )}
      </div>
    </section>
  );
}
