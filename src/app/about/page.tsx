import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, BriefcaseBusiness, Code2, GitBranch, MessagesSquare, Presentation, Send, UserRound, UsersRound } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { community } from "@/data/community";

export const metadata: Metadata = {
  title: "دربارهٔ یونی‌دو | کامیونیتی یادگیری برنامه‌نویسی",
  description: "یونی‌دو، کامیونیتی دانشجوهای کامپیوتر برای نزدیک‌تر شدن به بازار کار؛ با اشتراک دانش، همکاری در پروژه‌های متن‌باز و مسیرهای یادگیری عملی.",
};

export default function AboutPage() {
  return (
    <div className="public-site about-page" data-accent="emerald">
      <a className="skip-link" href="#about-content">رفتن به معرفی کامیونیتی</a>
      <div className="ambient-glow glow-emerald" aria-hidden="true" />
      <div className="ambient-glow glow-violet" aria-hidden="true" />
      <SiteHeader activePage="about" />
      <main id="about-content" className="about-content section-container">
        <section className="about-hero" aria-labelledby="about-title">
          <div>
            <span className="section-eyebrow"><UsersRound size={16} />دربارهٔ کامیونیتی یونی‌دو</span>
            <h1 id="about-title">از آموخته‌های دانشگاه،<br /><span>تا تجربهٔ کار واقعی.</span></h1>
            <p>یونی‌دو جایی برای دانشجوهای کامپیوتر است که می‌خواهند آموخته‌هایشان را به مهارت تبدیل کنند. کنار هم یاد می‌گیریم، تجربه‌هایمان را به اشتراک می‌گذاریم و برای ورود به دنیای حرفه‌ای آماده می‌شویم.</p>
            <div className="about-hero-actions">
              {community.communityUrl && <a className="primary-button" href={community.communityUrl} target="_blank" rel="noopener noreferrer"><Send size={16} />پیوستن به کامیونیتی<ArrowUpLeft size={16} /></a>}
              <Link className="text-button" href="/#roadmaps">دیدن نقشه‌راه‌ها<ArrowLeft size={15} /></Link>
            </div>
          </div>
          <div className="about-brand-art" aria-hidden="true">
            <span className="about-brand-orbit" />
            <div className="about-logo-frame"><Image src="/brand/unidev.jpg" alt="" width={280} height={280} sizes="(max-width: 560px) 180px, 260px" priority /></div>
            <span className="about-brand-label" dir="ltr">UniDev Community</span>
          </div>
        </section>

        <section className="about-story" aria-labelledby="purpose-title">
          <div><span className="section-eyebrow"><GitBranch size={16} />دلیل کنار هم بودن</span><h2 id="purpose-title">چرا یونی‌دو راه افتاد؟</h2></div>
          <div className="about-story-copy">
            {community.purpose.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="community-values" aria-labelledby="values-title">
          <h2 id="values-title" className="sr-only">چه هدف‌هایی را با هم دنبال می‌کنیم؟</h2>
          <article><Presentation size={22} /><h3>اشتراک دانش و تجربه</h3><p>با جلسه‌های اشتراک دانش، دربارهٔ چیزهایی که یاد گرفته‌ایم گفت‌وگو کنیم و از تجربهٔ حل مسئله‌های هم ایده بگیریم.</p></article>
          <article><Code2 size={22} /><h3>همکاری روی پروژه‌های متن‌باز</h3><p>با مشارکت در پروژه‌های متن‌باز، نوشتن و خواندن کد، بازبینی کار هم و همکاری در یک تیم را تمرین کنیم.</p></article>
          <article><BriefcaseBusiness size={22} /><h3>آمادگی برای فضای حرفه‌ای</h3><p>به کمک مسیرهای یادگیری و تجربهٔ عملی، نمونه‌کار بسازیم و برای کارآموزی و پیوستن به شرکت‌ها آماده‌تر شویم.</p></article>
        </section>

        <section id="questions" className="about-questions" aria-labelledby="questions-title">
          <div className="about-questions-heading"><span className="section-eyebrow"><MessagesSquare size={16} />تاپیک Questions در تلگرام</span><h2 id="questions-title">نمی‌دانی از کجا شروع کنی؟ بپرس.</h2><p>لازم نیست قبل از پرسیدن، مسیرت را کامل مشخص کرده باشی. هدفت و چیزهایی که تا اینجا بلدی را بگو؛ اگر سؤال فنی داری، توضیح بده چه چیزی را امتحان کرده‌ای و کجا به مشکل خورده‌ای.</p></div>
          <ol className="question-guide"><li><span>۰۱</span><div><h3>به گروه یونی‌دو بپیوند</h3><p>اگر هنوز عضو نیستی، از لینک کامیونیتی وارد گروه تلگرام شو.</p></div></li><li><span>۰۲</span><div><h3>تاپیک Questions را باز کن</h3><p>سؤال‌های مربوط به یادگیری و مسائل فنی را در این تاپیک مطرح کن.</p></div></li><li><span>۰۳</span><div><h3>سؤالت را با کمی زمینه بنویس</h3><p>هدفت، تجربه‌ات و بخشی که در آن گیر کرده‌ای را توضیح بده تا گفت‌وگو از همان‌جا شروع شود.</p></div></li></ol>
          <div className="question-actions">
            {community.questionsUrl && <a className="primary-button questions-link" href={community.questionsUrl} target="_blank" rel="noopener noreferrer">رفتن به تاپیک Questions<ArrowUpLeft size={16} /></a>}
            {community.communityUrl && <a className="secondary-button community-join" href={community.communityUrl} target="_blank" rel="noopener noreferrer">پیوستن به گروه تلگرام<Send size={15} /></a>}
          </div>
        </section>

        <section id="contact" className="founder-section" aria-labelledby="founder-title">
          <div><span className="section-eyebrow"><UserRound size={16} />راه ارتباط</span><h2 id="founder-title">ارتباط با مؤسس یونی‌دو</h2><p>برای پیشنهاد دربارهٔ کامیونیتی، هماهنگی همکاری یا موضوعی که لازم است مستقیم با مؤسس مطرح شود، از راه ارتباطی زیر استفاده کن.</p><p className="founder-question-note">سؤال‌های یادگیری و برنامه‌نویسی را در <a href="#questions">تاپیک Questions</a> مطرح کن تا بقیه هم بتوانند در گفت‌وگو شرکت کنند.</p></div>
          <div className="founder-card"><span className="founder-avatar" aria-hidden="true"><UserRound size={27} /></span><div><h3>{community.founder.name || "مؤسس یونی‌دو"}</h3><span className="founder-handle" dir="ltr">{community.founder.handle}</span></div>{community.founder.contactUrl && <a className="secondary-button owner-contact" href={community.founder.contactUrl} target="_blank" rel="noopener noreferrer">گفت‌وگو در تلگرام<ArrowUpLeft size={16} /></a>}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
