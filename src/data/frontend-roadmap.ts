import type { RoadmapData } from "@/data/roadmaps";

// Module content follows the supplied Markdown; PDF-only readiness criteria are in guide.
// Learning resources are supplemental; original inspiration references remain separate.
export const FRONTEND_ROADMAP: RoadmapData = {
  "id": "frontend",
  "title": "توسعهٔ فرانت‌اند",
  "enTitle": "Modular Frontend Roadmap 2026",
  "tagline": "از پایه‌های وب تا ساخت و انتشار محصول؛ ۸ ماژول با هسته، تعمیق و معیار پایان",
  "description": "این رودمپ ماژولار به تو کمک می‌کند بر اساس مهارت‌های فعلی‌ات نقطهٔ شروع را انتخاب کنی. معیار پایان هر ماژول را ببین؛ بخش‌های لازم را یاد بگیر و موضوعات تعمیقی را متناسب با پروژه‌ات انتخاب کن.",
  "accentColor": "violet",
  "contributor": {
    "name": "کامیونیتی UniDev",
    "role": "تنظیم و گردآوری بر اساس فایل‌های رودمپ ماژولار فرانت‌اند",
    "githubUrl": ""
  },
  "learningMode": "modular",
  "steps": [
    {
      "id": "fe-step-0",
      "stepNumber": 0,
      "label": "پیش از شروع",
      "title": "پایه‌های وب",
      "subtitle": "Web Fundamentals",
      "description": "این بخش یک ماژول اجباری با شماره نیست؛ مفاهیم پایه‌ای است که درک بقیه مسیر را آسان‌تر می‌کند. هدف، فهمیدن سازوکار وب است، نه حفظ کردن تعریف‌ها.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-0-1",
          "title": "اینترنت، کلاینت و سرور",
          "enTitle": "Web Fundamentals",
          "note": "اینترنت و ارتباط کلاینت و سرور؛ IP، DNS و CDN"
        },
        {
          "id": "fe-0-2",
          "title": "HTTP، HTTPS و امنیت ارتباط",
          "note": "HTTP و HTTPS؛ متدها، کدهای وضعیت، هدرها، کوکی، CORS و مفهوم TLS"
        },
        {
          "id": "fe-0-3",
          "title": "از URL تا نمایش صفحه",
          "note": "مسیر یک درخواست: از وارد کردن URL تا نمایش صفحه در مرورگر"
        },
        {
          "id": "fe-0-4",
          "title": "رندر مرورگر و DOM / CSSOM",
          "note": "مرورگر و رندر صفحه؛ DOM، CSSOM، reflow و repaint"
        },
        {
          "id": "fe-0-5",
          "title": "API، JSON و روش‌های رندر",
          "note": "API و JSON؛ تفاوت کلی CSR، SSR و SSG"
        },
        {
          "id": "fe-0-6",
          "title": "دامنه، میزبانی و ابزارهای اجرا",
          "note": "دامنه، میزبانی وب، ترمینال و package manager"
        }
      ],
      "resources": [
        {
          "title": "وب چطور کار می‌کند؟",
          "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
          "type": "doc",
          "platform": "MDN",
          "description": "برای شروع: مسیر کلاینت، DNS، سرور و درخواست HTTP را دنبال کن."
        },
        {
          "title": "راهنمای HTTP",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
          "type": "doc",
          "platform": "MDN",
          "description": "مرجع تکمیلی برای متدها، هدرها، کوکی‌ها و CORS."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "outcome": "بتوانی با زبان خودت توضیح بدهی وقتی یک URL را وارد می‌کنی، چه اتفاقی می‌افتد تا صفحه نمایش داده شود.",
      "guidance": [
        {
          "title": "روش یادگیری این بخش",
          "paragraphs": [
            "این بخش یک ماژول اجباری با شماره نیست؛ مفاهیم پایه‌ای است که درک بقیه مسیر را آسان‌تر می‌کند. هدف، فهمیدن سازوکار وب است، نه حفظ کردن تعریف‌ها."
          ]
        }
      ]
    },
    {
      "id": "fe-step-1",
      "stepNumber": 1,
      "label": "ماژول ۱",
      "title": "HTML و CSS",
      "subtitle": "HTML & CSS",
      "description": "ساخت صفحه‌های درست، قابل‌دسترس و واکنش‌گرا؛ و درک CSS به‌اندازه‌ای که بتوانی کد تولیدشده توسط هوش مصنوعی را ارزیابی و اصلاح کنی.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-1-1",
          "title": "ساختار HTML و فرم‌ها",
          "enTitle": "HTML & CSS",
          "note": "ساختار HTML: عنوان‌ها، بخش‌بندی معنایی، فهرست‌ها، لینک‌ها، دکمه‌ها، ورودی‌ها و فرم‌ها"
        },
        {
          "id": "fe-1-2",
          "title": "عناصر بومی HTML",
          "note": "انتخاب عناصر HTML بومی و مناسب به‌جای ساخت اجزای سفارشیِ غیرضروری"
        },
        {
          "id": "fe-1-3",
          "title": "مدل جعبه‌ای، cascade و specificity",
          "note": "مبانی CSS: مدل جعبه‌ای، cascade و specificity"
        },
        {
          "id": "fe-1-4",
          "title": "Flexbox، Grid و positioning",
          "note": "ساخت چیدمان با Flexbox، Grid و positioning"
        },
        {
          "id": "fe-1-5",
          "title": "طراحی واکنش‌گرا",
          "note": "طراحی واکنش‌گرا با media query"
        },
        {
          "id": "fe-1-6",
          "title": "دسترس‌پذیری پایه",
          "note": "دسترس‌پذیری پایه: HTML معنایی، label مناسب و کنتراست رنگ"
        },
        {
          "id": "fe-1-deep-1",
          "title": "تعمیق HTML & CSS",
          "note": "container query، متغیرهای CSS، stacking، overflow و containment",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "ساختار محتوا با HTML",
          "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
          "type": "doc",
          "platform": "MDN",
          "description": "برای شروع: عناصر معنایی، لینک‌ها و ساختار صفحه را در تمرینت به کار ببر."
        },
        {
          "title": "چیدمان با CSS",
          "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout",
          "type": "doc",
          "platform": "MDN",
          "description": "Flexbox، Grid و طراحی واکنش‌گرا؛ فصل مرتبط با تمرین را انتخاب کن."
        },
        {
          "title": "آموزش‌های دسترس‌پذیری وب",
          "url": "https://www.w3.org/WAI/tutorials/",
          "type": "doc",
          "platform": "W3C WAI",
          "description": "برای فرم، برچسب ورودی‌ها، ساختار صفحه و رفتار قابل‌دسترس به آموزش مربوط مراجعه کن."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "پایه‌های وب.",
      "outcome": "بتوانی بدون کمک هوش مصنوعی، با استفاده از DevTools یک مشکل چیدمان را پیدا و برطرف کنی.",
      "guidance": [
        {
          "title": "نقش هوش مصنوعی",
          "paragraphs": [
            "از آن برای توضیح مفاهیم و راهنمایی استفاده کن؛ تلاش کن خودت کد را بنویسی و بفهمی."
          ]
        }
      ],
      "miniProject": "یک صفحه قیمت‌گذاری یا تنظیمات بساز که در موبایل و دسکتاپ به‌درستی نمایش داده شود.",
      "prerequisiteIds": [
        "fe-step-0"
      ]
    },
    {
      "id": "fe-step-2",
      "stepNumber": 2,
      "label": "ماژول ۲",
      "title": "ابزارهای توسعه",
      "subtitle": "Developer Tooling",
      "description": "توانایی کار روی یک پروژه واقعی، بررسی خطاها و استفاده از ابزارهای استاندارد توسعه. این ماژول را می‌توان از همان ابتدای مسیر و هم‌زمان با HTML، CSS و JavaScript یاد گرفت.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-2-1",
          "title": "Git و همکاری در GitHub",
          "enTitle": "Developer Tooling",
          "note": "Git و GitHub: commit، branch، merge، pull request و حل تعارض‌ها (conflict)"
        },
        {
          "id": "fe-2-2",
          "title": "ابزارهای مرورگر (DevTools)",
          "note": "ابزارهای مرورگر (DevTools): بخش‌های Elements، Network، Console، Performance و Application"
        },
        {
          "id": "fe-2-3",
          "title": "اشکال‌زدایی و stack trace",
          "note": "اشکال‌زدایی (debugging): خواندن stack trace و پیدا کردن علت خطا به‌صورت مرحله‌ای"
        },
        {
          "id": "fe-2-4",
          "title": "npm و ابزار ساخت Vite",
          "note": "npm و ابزارهای ساخت پروژه، مانند Vite"
        }
      ],
      "resources": [
        {
          "title": "اولین مخزن، branch و pull request",
          "url": "https://docs.github.com/en/get-started/using-github/hello-world",
          "type": "doc",
          "platform": "GitHub Docs",
          "description": "برای شروع: چرخهٔ ساخت مخزن، commit، branch و pull request را تمرین کن."
        },
        {
          "title": "راهنمای DevTools",
          "url": "https://developer.chrome.com/docs/devtools/",
          "type": "doc",
          "platform": "Chrome for Developers",
          "description": "مرجع ابزارهای Elements، Network، Console، Performance و Application؛ هر پنل را در پروژه آزمایش کن."
        },
        {
          "title": "شروع کار با Vite",
          "url": "https://vite.dev/guide/",
          "type": "doc",
          "platform": "Vite",
          "description": "ساخت و اجرای پروژه و کار با اسکریپت‌های توسعه و build."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "outcome": "بتوانی با branch و pull request روی یک پروژه کار کنی و یک مشکل مربوط به درخواست شبکه را از بخش Network پیدا کنی.",
      "guidance": [
        {
          "title": "روش یادگیری این بخش",
          "paragraphs": [
            "این ماژول را می‌توان از همان ابتدای مسیر و هم‌زمان با HTML، CSS و JavaScript یاد گرفت."
          ]
        }
      ]
    },
    {
      "id": "fe-step-3",
      "stepNumber": 3,
      "label": "ماژول ۳",
      "title": "JavaScript",
      "subtitle": "JavaScript Core",
      "description": "ساخت پایه‌ای محکم برای فهم رفتار برنامه‌ها و کار با فریم‌ورک‌ها. این بخش از مهم‌ترین سرمایه‌گذاری‌های مسیر است؛ چون استفاده از ابزارهای هوش مصنوعی بدون درک JavaScript می‌تواند به کپی‌کردن کدی منجر شود که اشکال‌زدایی و توسعه‌اش دشوار است.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-3-1",
          "title": "نوع داده، scope، closure و ماژول‌ها",
          "enTitle": "JavaScript Core",
          "note": "مقدارها، نوع داده‌ها، scope، closure و ماژول‌ها"
        },
        {
          "id": "fe-3-2",
          "title": "آرایه، آبجکت، Map و Set",
          "note": "آرایه‌ها و آبجکت‌ها و تبدیل‌های رایج آن‌ها؛ map و set"
        },
        {
          "id": "fe-3-3",
          "title": "رویدادها و به‌روزرسانی DOM",
          "note": "رویدادها (events)، event delegation و به‌روزرسانی DOM"
        },
        {
          "id": "fe-3-4",
          "title": "کد غیرهم‌زمان، fetch و مدیریت خطا",
          "note": "Promise، async/await، timer، fetch و مدیریت خطا"
        },
        {
          "id": "fe-3-5",
          "title": "ذخیره‌سازی در مرورگر",
          "note": "ذخیره‌سازی در مرورگر (browser storage)"
        },
        {
          "id": "fe-3-deep-1",
          "title": "تعمیق JavaScript Core",
          "note": "this، prototype، iterator، generator و event loop در سطح عمیق‌تر",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "راهنمای JavaScript",
          "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          "type": "doc",
          "platform": "MDN",
          "description": "برای شروع: نوع داده‌ها، توابع، آبجکت‌ها، Promise و ماژول‌ها را با تمرین مرور کن."
        },
        {
          "title": "کار با Fetch API",
          "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          "type": "doc",
          "platform": "MDN",
          "description": "در پروژهٔ بدون فریم‌ورک، پاسخ HTTP و شکست درخواست را مدیریت کن."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "آشنایی اولیه با HTML از ماژول ۱.",
      "outcome": "بتوانی بدون هوش مصنوعی یک برنامه کوچک بسازی که از API داده بگیرد، و توضیح بدهی چرا ممکن است برای توسعه آن به فریم‌ورک نیاز داشته باشی.",
      "guidance": [
        {
          "title": "نقش هوش مصنوعی",
          "paragraphs": [
            "از آن بخواه خطاها را توضیح دهد یا راهنمایی‌ات کند؛ اصلاح کد را خودت انجام بده."
          ]
        },
        {
          "title": "تست‌نویسی",
          "paragraphs": [
            "در این مرحله تست‌نویسی گسترده لازم نیست. در صورت تمایل، چند تست ساده برای توابع خالص بنویس."
          ]
        }
      ],
      "miniProject": "فرم چندمرحله‌ای با اعتبارسنجی - جدول دارای جست‌وجو و مرتب‌سازی - داشبورد کوچکی که داده را از API دریافت کند - صفحه قیمت‌گذاری یا تنظیمات این پروژه‌ها کمک می‌کنند بفهمی فریم‌ورک‌ها چه مسائلی را حل می‌کنند.",
      "prerequisiteIds": [
        "fe-step-1"
      ]
    },
    {
      "id": "fe-step-4",
      "stepNumber": 4,
      "label": "ماژول ۴",
      "title": "TypeScript",
      "subtitle": "TypeScript",
      "description": "تعریف نوع داده‌ها و مشخص کردن مرزهای سیستم، تا بخشی از خطاها پیش از اجرای برنامه شناسایی شوند.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-4-1",
          "title": "نوع‌های پایه و genericهای ساده",
          "enTitle": "TypeScript",
          "note": "نوع‌های پایه، union، interface و type، و genericهای ساده"
        },
        {
          "id": "fe-4-2",
          "title": "تایپ props و پاسخ API",
          "note": "تعریف نوع برای props کامپوننت‌ها و پاسخ API"
        },
        {
          "id": "fe-4-3",
          "title": "narrowing، unknown و any",
          "note": "narrowing و استفاده از unknown به‌جای any در موقعیت‌های مناسب"
        },
        {
          "id": "fe-4-4",
          "title": "خواندن خطاهای TypeScript",
          "note": "خواندن و رفع خطاهای TypeScript"
        },
        {
          "id": "fe-4-5",
          "title": "اعتبارسنجی داده با Zod",
          "note": "استفاده از Zod برای اعتبارسنجی داده در مرزهای سیستم"
        },
        {
          "id": "fe-4-deep-1",
          "title": "تعمیق TypeScript",
          "note": "utility typeهای پیشرفته و conditional typeها؛ این موارد برای همه پروژه‌های معمول ضروری نیستند.",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "کتاب راهنمای TypeScript",
          "url": "https://www.typescriptlang.org/docs/handbook/intro.html",
          "type": "doc",
          "platform": "TypeScript",
          "description": "برای شروع: نوع‌های پایه، union، narrowing و genericهای ساده؛ بعد سراغ بخش‌های پیشرفته برو."
        },
        {
          "title": "کاربرد پایهٔ Zod",
          "url": "https://zod.dev/basics",
          "type": "doc",
          "platform": "Zod",
          "description": "اعتبارسنجی ورودی و بررسی نتیجهٔ parse و safeParse در مرز API."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "ماژول ۳، JavaScript.",
      "outcome": "بتوانی پاسخ یک API را تایپ کنی، داده‌های ناقص را با Zod مدیریت کنی و از any غیرضروری پرهیز کنی.",
      "guidance": [
        {
          "title": "هم‌زمانی با ماژول‌های دیگر",
          "paragraphs": [
            "می‌توانی این ماژول را هم‌زمان با ماژول React یاد بگیری."
          ]
        }
      ],
      "prerequisiteIds": [
        "fe-step-3"
      ]
    },
    {
      "id": "fe-step-5",
      "stepNumber": 5,
      "label": "ماژول ۵",
      "title": "React",
      "subtitle": "React",
      "description": "فهمیدن اینکه رابط کاربری چگونه با تغییر داده‌ها به‌روزرسانی می‌شود و داده و وضعیت برنامه چگونه بین کامپوننت‌ها جریان پیدا می‌کند.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-5-1",
          "title": "کامپوننت، props، state و rendering",
          "enTitle": "React",
          "note": "کامپوننت‌ها و props، state و rendering"
        },
        {
          "id": "fe-5-2",
          "title": "effects و محدودیت‌های آن",
          "note": "effects و محدودیت‌های استفاده از آن‌ها"
        },
        {
          "id": "fe-5-3",
          "title": "فرم controlled، فهرست و key",
          "note": "فرم‌های controlled، فهرست‌ها و key"
        },
        {
          "id": "fe-5-4",
          "title": "context و ref",
          "note": "context و ref"
        },
        {
          "id": "fe-5-5",
          "title": "composition و error boundary",
          "note": "composition و error boundary"
        },
        {
          "id": "fe-5-6",
          "title": "الگوهای دریافت داده",
          "note": "الگوهای دریافت داده (data fetching)"
        },
        {
          "id": "fe-5-deep-1",
          "title": "تعمیق React",
          "note": "الگوهای پیشرفته composition، بهینه‌سازی render و کامپوننت‌های headless سفارشی",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "آموزش رسمی React",
          "url": "https://react.dev/learn",
          "type": "doc",
          "platform": "React",
          "description": "برای شروع: توصیف UI، تعامل، مدیریت state و escape hatchها را به‌ترتیب نیازت بخوان."
        },
        {
          "title": "تست رفتار کامپوننت‌های React",
          "url": "https://testing-library.com/docs/react-testing-library/intro/",
          "type": "doc",
          "platform": "Testing Library",
          "description": "مرجع تست رفتار قابل‌مشاهدهٔ کاربر و تعامل با رابط کاربری."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "ماژول ۳، JavaScript.",
      "outcome": "بتوانی توضیح بدهی هر state بهتر است در کدام بخش قرار بگیرد: کامپوننت، context، URL یا لایه دریافت داده.",
      "guidance": [
        {
          "title": "نقش هوش مصنوعی",
          "paragraphs": [
            "از آن پیش‌نویس بخواه، سپس راه‌حل‌ها را با هم مقایسه کن و مزایا و محدودیت‌های هرکدام را بسنج."
          ]
        },
        {
          "title": "تست‌نویسی",
          "paragraphs": [
            "از این ماژول تست کامپوننت را جدی‌تر شروع کن. می‌توانی از Vitest و Testing Library استفاده کنی و روی رفتار قابل‌مشاهده کاربر تمرکز داشته باشی، نه جزئیات داخلی پیاده‌سازی. تست‌ها به شناسایی باگ‌ها و بررسی کد تولیدشده با هوش مصنوعی کمک می‌کنند."
          ]
        }
      ],
      "prerequisiteIds": [
        "fe-step-3"
      ]
    },
    {
      "id": "fe-step-6",
      "stepNumber": 6,
      "label": "ماژول ۶",
      "title": "ساخت اپلیکیشن واقعی",
      "subtitle": "Building Real Applications",
      "description": "کنار هم قرار دادن کامپوننت‌ها، داده، API، فرم‌ها و وضعیت‌های رابط کاربری برای ساخت یک محصول قابل‌استفاده.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-6-1",
          "title": "داده و API",
          "enTitle": "Building Real Applications",
          "note": "مصرف REST API؛ کدهای وضعیت، هدرها، caching و pagination؛ ساخت service layer؛ استفاده از Axios یا fetch و TanStack Query؛ تفاوت server state و client state؛ برای نمونه، استفاده از Zustand برای state سمت کلاینت در صورت نیاز"
        },
        {
          "id": "fe-6-2",
          "title": "مسیریابی و احراز هویت",
          "note": "routing و مدیریت وضعیت‌های احراز هویت؛ مفاهیم JWT، OTP و refresh token؛ مدیریت مجوزها (permissions)"
        },
        {
          "id": "fe-6-3",
          "title": "فرم‌ها و مدیریت خطا",
          "note": "React Hook Form و Zod؛ نمایش خطای هر فیلد و مدیریت submit غیرهم‌زمان؛ مدیریت شکست درخواست و امکان بازیابی"
        },
        {
          "id": "fe-6-4",
          "title": "وضعیت‌های رابط کاربری",
          "note": "طراحی حالت‌های loading، empty، error و disabled؛ بررسی رفتار صفحه در موبایل؛ پیاده‌سازی optimistic update، pagination و جست‌وجو"
        },
        {
          "id": "fe-6-5",
          "title": "ابزارهای ساخت رابط کاربری",
          "note": "Tailwind، shadcn و Radix؛ حالت تاریک (dark mode)؛ انیمیشن‌های کوچک و هدفمند (microinteraction)"
        },
        {
          "id": "fe-6-deep-1",
          "title": "تعمیق Building Real Applications",
          "note": "ارتباط بلادرنگ با WebSocket یا SSE، آپلود فایل و ثبت رویدادهای تحلیلی (analytics events)",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "مدیریت server state با TanStack Query",
          "url": "https://tanstack.com/query/latest/docs/framework/react/overview",
          "type": "doc",
          "platform": "TanStack Query",
          "description": "برای بخش داده: دریافت، کش، تغییر داده و هماهنگی وضعیت درخواست‌ها."
        },
        {
          "title": "فرم با React Hook Form",
          "url": "https://react-hook-form.com/get-started",
          "type": "doc",
          "platform": "React Hook Form",
          "description": "برای بخش فرم: ثبت فیلدها، اعتبارسنجی، ارسال و نمایش خطا."
        },
        {
          "title": "شبیه‌سازی API با MSW",
          "url": "https://mswjs.io/docs/",
          "type": "doc",
          "platform": "MSW",
          "description": "برای تست: پاسخ موفق، شکست و وضعیت‌های شبکه را شبیه‌سازی کن."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "ماژول‌های ۴ و ۵.",
      "outcome": "بتوانی یک نیازمندی مبهم را به رابط کاربری قابل‌استفاده تبدیل کنی، بدون اینکه برای تصمیم‌گیری در هر قدم به راه‌حل آماده نیاز داشته باشی.",
      "guidance": [
        {
          "title": "نقش هوش مصنوعی",
          "paragraphs": [
            "از آن برای تهیه پیش‌نویس، پیشنهاد edge caseها و نوشتن تست کمک بگیر؛ سپس بررسی کن که تست‌ها واقعاً رفتارهای مهم را پوشش می‌دهند."
          ]
        },
        {
          "title": "تست‌نویسی",
          "paragraphs": [
            "از MSW برای شبیه‌سازی API در تست‌ها استفاده کن و جریان‌های اصلی فرم را آزمایش کن."
          ]
        }
      ],
      "miniProject": "سه پروژه از سه نوع بساز: - داشبورد داده‌محور - اپلیکیشن فرم‌محور - یک جریان کاری محصول (product workflow) برای هر پروژه یادداشت کوتاهی ثبت کن: مسئله چه بود، چه تصمیم‌هایی گرفتی، چه حالت‌های خاصی را در نظر گرفتی، چطور تست کردی و در آینده چه چیزی را بهتر می‌کنی.",
      "prerequisiteIds": [
        "fe-step-4",
        "fe-step-5"
      ]
    },
    {
      "id": "fe-step-7",
      "stepNumber": 7,
      "label": "ماژول ۷",
      "title": "Next.js و انتشار محصول",
      "subtitle": "Next.js & Production",
      "description": "آماده‌سازی اپلیکیشن برای استفاده واقعی؛ با توجه به سرعت، قابلیت پیدا شدن در موتورهای جست‌وجو و امنیت پایه.",
      "isInternCore": true,
      "topics": [
        {
          "id": "fe-7-1",
          "title": "App Router و مرز سرور و کلاینت",
          "enTitle": "Next.js & Production",
          "note": "App Router و تفاوت Server Components و Client Components"
        },
        {
          "id": "fe-7-2",
          "title": "SSR، SSG، ISR و caching",
          "note": "SSR، SSG، ISR و caching"
        },
        {
          "id": "fe-7-3",
          "title": "SEO و metadata",
          "note": "SEO و metadata"
        },
        {
          "id": "fe-7-4",
          "title": "Core Web Vitals و بهینه‌سازی",
          "note": "کارایی وب: Core Web Vitals، code splitting و بهینه‌سازی تصاویر"
        },
        {
          "id": "fe-7-5",
          "title": "اندازه‌گیری پیش و پس از تغییر",
          "note": "اندازه‌گیری عملکرد پیش و پس از بهینه‌سازی"
        },
        {
          "id": "fe-7-6",
          "title": "امنیت پایه در فرانت‌اند",
          "note": "امنیت پایه: XSS، نگهداری توکن، مفهوم CSRF و ریسک وابستگی‌های نرم‌افزاری"
        },
        {
          "id": "fe-7-7",
          "title": "انتشار و CI ساده",
          "note": "انتشار (deploy) و CI ساده، شامل اجرای lint و test"
        }
      ],
      "resources": [
        {
          "title": "شروع کار با App Router",
          "url": "https://nextjs.org/docs/app/getting-started",
          "type": "doc",
          "platform": "Next.js",
          "description": "برای شروع: مرز سرور و کلاینت، مسیرها، دریافت داده و انتشار را در مستندات نسخهٔ پروژه دنبال کن."
        },
        {
          "title": "آموزش عملکرد وب",
          "url": "https://web.dev/learn/performance",
          "type": "doc",
          "platform": "web.dev",
          "description": "اندازه‌گیری و بررسی هزینهٔ منابع صفحه، تصاویر و JavaScript؛ انتخاب فصل متناسب با نتیجهٔ اندازه‌گیری."
        },
        {
          "title": "شروع تست E2E با Playwright",
          "url": "https://playwright.dev/docs/intro",
          "type": "doc",
          "platform": "Playwright",
          "description": "برای تست: یک مسیر حیاتی کاربر را در مرورگر واقعی اجرا و بررسی کن."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "prerequisites": "ماژول ۶.",
      "outcome": "یکی از پروژه‌های ماژول ۶ را با Next.js پیاده‌سازی و منتشر کرده باشی و نتایج Lighthouse را پیش و پس از بهینه‌سازی مقایسه کنی.",
      "guidance": [
        {
          "title": "نقش هوش مصنوعی",
          "paragraphs": [
            "می‌توانی از ابزارهایی مانند Cursor یا Claude Code در یک روند spec-driven استفاده کنی: کار را به تسک‌های کوچک و قابل‌آزمایش تقسیم کن، قوانین پروژه را مشخص کن و تصمیم‌های معماری را آگاهانه بگیر."
          ]
        },
        {
          "title": "تست‌نویسی",
          "paragraphs": [
            "با Playwright برای مسیرهای حیاتی تست end-to-end (E2E) بنویس."
          ]
        }
      ],
      "prerequisiteIds": [
        "fe-step-6"
      ]
    },
    {
      "id": "fe-step-8",
      "stepNumber": 8,
      "label": "ماژول ۸",
      "title": "انتخاب مسیر تخصصی (اختیاری)",
      "subtitle": "Specialization Tracks",
      "description": "بعد از اینکه توانستی یک رابط کاربری محصولی بسازی و آن را منتشر کنی، می‌توانی یک یا دو حوزه را بر اساس علاقه و نیاز کاری انتخاب کنی. لازم نیست از ابتدای مسیر سراغ این موارد بروی.",
      "isInternCore": false,
      "topics": [
        {
          "id": "fe-8-1",
          "title": "Design System",
          "enTitle": "Specialization Tracks",
          "note": "Design System در نسخهٔ فارسی PDF، معماری کامپوننت‌های مقیاس‌پذیر و headless نیز برای این شاخه مطرح شده است.",
          "isOptional": true
        },
        {
          "id": "fe-8-2",
          "title": "بهینه‌سازی عملکرد وب",
          "note": "بهینه‌سازی عملکرد وب (Web Performance)",
          "isOptional": true
        },
        {
          "id": "fe-8-3",
          "title": "توسعهٔ فول‌استک محصول‌محور",
          "note": "توسعه فول‌استک محصول‌محور، برای ساخت MVP مستقل",
          "isOptional": true
        },
        {
          "id": "fe-8-4",
          "title": "رابط محصولات هوش مصنوعی",
          "note": "رابط کاربری محصولات هوش مصنوعی، مانند streaming و agent UI",
          "isOptional": true
        },
        {
          "id": "fe-8-5",
          "title": "React Native",
          "note": "React Native",
          "isOptional": true
        },
        {
          "id": "fe-8-6",
          "title": "بین‌المللی‌سازی، امنیت و حریم خصوصی",
          "note": "بین‌المللی‌سازی، امنیت و حریم خصوصی در فرانت‌اند",
          "isOptional": true
        }
      ],
      "resources": [
        {
          "title": "آموزش عملکرد وب",
          "url": "https://web.dev/learn/performance",
          "type": "doc",
          "platform": "web.dev",
          "description": "یکی از مسیرهای انتخابی؛ پس از ساخت و انتشار محصول، حوزهٔ عملکرد را عمیق‌تر دنبال کن."
        },
        {
          "title": "شروع React Native",
          "url": "https://reactnative.dev/docs/getting-started",
          "type": "doc",
          "platform": "React Native",
          "description": "مرجع یکی از شاخه‌های انتخابی، برای توسعهٔ رابط موبایل با React."
        }
      ],
      "resourceNote": "منابع آموزشی تکمیلی برای این بخش انتخاب شده‌اند. سه رفرنس الهام‌بخشِ فایل اصلی در بخش «راهنما و فایل‌های مسیر» آمده‌اند؛ لازم نیست همهٔ منابع را کامل بخوانی.",
      "guidance": [
        {
          "title": "روش یادگیری این بخش",
          "paragraphs": [
            "بعد از اینکه توانستی یک رابط کاربری محصولی بسازی و آن را منتشر کنی، می‌توانی یک یا دو حوزه را بر اساس علاقه و نیاز کاری انتخاب کنی. لازم نیست از ابتدای مسیر سراغ این موارد بروی."
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "level": "مبتدی",
      "title": "داشبورد داده‌محور",
      "description": "دریافت داده از API، جدول، جست‌وجو، مرتب‌سازی، صفحه‌بندی و حالت‌های loading، empty و error را پیاده کن.",
      "techStack": [
        "JavaScript",
        "React",
        "TypeScript",
        "REST API"
      ]
    },
    {
      "level": "متوسط",
      "title": "اپلیکیشن فرم‌محور",
      "description": "یک فرم با اعتبارسنجی، label قابل‌دسترس، ارسال غیرهم‌زمان، خطای هر فیلد و بازیابی پس از شکست درخواست بساز.",
      "techStack": [
        "React",
        "React Hook Form",
        "Zod",
        "MSW"
      ]
    },
    {
      "level": "پیشرفته",
      "title": "یک جریان کاری محصول",
      "description": "مسیریابی، وضعیت‌های احراز هویت، مجوزها و API را در یک جریان قابل‌استفاده کنار هم بگذار و مسیرهای حیاتی را تست کن. یکی از پروژه‌ها را با Next.js منتشر و Lighthouse را قبل و بعد مقایسه کن.",
      "techStack": [
        "Next.js",
        "TypeScript",
        "TanStack Query",
        "Playwright"
      ]
    }
  ],
  "guide": [
    {
      "title": "این رودمپ چطور کار می‌کند؟",
      "paragraphs": [
        "این رودمپ برای این طراحی شده که هر فرد بتواند بر اساس مهارت‌های فعلی‌اش مسیر مناسب خودش را پیدا کند؛ نه اینکه همه مجبور باشند یک مسیر ثابت و یکسان را از ابتدا تا انتها طی کنند. ساختار آن از مهارت‌های اصلی فرانت‌اند الهام گرفته و با توجه به نیازهای توسعه محصول در سال ۲۰۲۶ تنظیم شده است.",
        "مسیر از چند ماژول مستقل تشکیل شده است. هر ماژول هدف، موضوعات اصلی، تمرین و معیار مشخصی برای سنجش یادگیری دارد."
      ],
      "items": [
        "از جایی شروع کن که لازم داری: معیار پایان هر ماژول را بررسی کن. اگر می‌توانی آن را به‌تنهایی انجام بدهی، از آن عبور کن؛ اگر نه، همان‌جا نقطه شروع توست.",
        "موضوعات اصلی را از موضوعات تکمیلی جدا کن: ابتدا بخش «هسته» را یاد بگیر. بخش «تعمیق» برای زمانی است که پروژه یا شغل تو به دانش بیشتری نیاز دارد.",
        "لازم نیست همه ماژول‌ها را به یک ترتیب ثابت طی کنی: بعضی از آن‌ها را می‌توان هم‌زمان پیش برد و بعضی را، در صورت تسلط، کنار گذاشت.",
        "پیشرفت را با توانایی انجام کار بسنج، نه تعداد ویدئوها یا ساعت مطالعه."
      ]
    },
    {
      "title": "چند اصطلاح که در این مسیر می‌بینی",
      "items": [
        "هسته: حداقل دانشی که برای کار عملی در آن موضوع لازم است.",
        "تعمیق: مباحث پیشرفته‌تر و اختیاری که بسته به نیاز می‌توانی سراغشان بروی.",
        "پیش‌نیاز: مهارتی که بهتر است پیش از شروع یک ماژول بلد باشی.",
        "معیار پایان: کاری مشخص که نشان می‌دهد موضوع را فهمیده‌ای و می‌توانی از آن استفاده کنی.",
        "AI: ابزارهای هوش مصنوعی که می‌توانند در یادگیری، نوشتن پیش‌نویس و بررسی کد کمک کنند؛ اما جای درک و تصمیم‌گیری تو را نمی‌گیرند."
      ]
    },
    {
      "title": "از وضعیت فعلی خودت شروع کن",
      "paragraphs": [
        "از پایه‌های وب و ماژول ۱ شروع به ارزیابی کن. هرجا نتوانستی معیار پایان را بدون کمک انجام بدهی، همان‌جا نقطه شروع مناسب توست. اگر معیار را به‌راحتی انجام می‌دهی، می‌توانی از آن بخش عبور کنی."
      ],
      "items": [
        "تازه‌کار و بدون تجربه برنامه‌نویسی: پایه‌های وب، سپس ماژول ۱.",
        "برنامه‌نویسی بلدی اما با وب آشنا نیستی: ماژول‌های ۱ و ۲.",
        "با وب و JavaScript آشنایی داری: ماژول ۴ یا ۵، با توجه به شکاف‌های دانشت.",
        "با React کار کرده‌ای و اپلیکیشن ساخته‌ای: ماژول ۶؛ همراه با بررسی تست‌نویسی و دسترس‌پذیری.",
        "فرانت‌اندکار حرفه‌ای هستی: ماژول‌های ۷ و ۸ و بازبینی مهارت‌های عرضی.",
        "این نقطه‌های شروع پیشنهادی‌اند، نه قانون قطعی. معیارهای پایان هر ماژول تصمیم دقیق‌تری به تو می‌دهند."
      ]
    },
    {
      "title": "مهارت‌هایی که در تمام مسیر همراهت هستند",
      "paragraphs": [
        "این موارد به یک ماژول خاص محدود نیستند و باید در پروژه‌های مختلف تمرین شوند."
      ],
      "items": [
        "تست‌نویسی: از React شروع می‌شود، در ساخت اپلیکیشن جدی‌تر می‌شود و در مرحله انتشار به E2E می‌رسد.",
        "دسترس‌پذیری: از HTML و CSS آغاز می‌شود و در هر پروژه ادامه پیدا می‌کند: کار با صفحه‌کلید، label، focus و کنتراست.",
        "استفاده از هوش مصنوعی: ابتدا برای یادگیری؛ سپس برای تهیه پیش‌نویس؛ و در مراحل پیشرفته‌تر برای اجرای تسک‌های دقیق و قابل‌آزمایش.",
        "اشکال‌زدایی: با استفاده از DevTools، TypeScript و لاگ‌ها؛ نه فقط با پرسیدن از هوش مصنوعی."
      ]
    },
    {
      "title": "چطور از هوش مصنوعی درست استفاده کنیم؟",
      "paragraphs": [
        "هوش مصنوعی می‌تواند سرعت توسعه را بالا ببرد، اما نباید جای یادگیری را بگیرد. اگر پروژه‌ها را صرفاً با کپی کردن کد تمام کنی، ممکن است هنگام مصاحبه، بازبینی کد یا رفع خطا نتوانی از تصمیم‌هایت دفاع کنی.",
        "الگوی PDFها: در ماژول‌های ۱ تا ۳ برای توضیح و یادگیری کمک بگیر؛ در ماژول‌های ۴ تا ۶ پیش‌نویس‌ها و tradeoffها را مقایسه کن؛ در ماژول ۷ و بعد، تسک‌های کوچک و قابل‌آزمایش را با مشخصات روشن واگذار کن و تصمیم معماری را خودت بگیر."
      ],
      "items": [
        "آیا با صفحه‌کلید می‌توان با رابط کاربری کار کرد؟",
        "آیا حالت‌های loading، empty و error درست مدیریت شده‌اند؟",
        "آیا چیدمان در صفحه‌های باریک به هم می‌ریزد؟",
        "اگر API خطا بدهد، رفتار برنامه قابل‌قبول است؟",
        "آیا any غیرضروری یا وابستگی اضافه وارد پروژه شده است؟"
      ]
    },
    {
      "title": "تعداد ماژول‌ها و عمق یادگیری را تنظیم کن",
      "items": [
        "ادغام: ماژول‌های TypeScript و React را می‌توان هم‌زمان پیش برد. JavaScript را نیز می‌توان با پروژه‌های بدون فریم‌ورک همراه کرد.",
        "حذف: اگر معیار پایان ماژولی را از قبل داری، لازم نیست آن را دوباره از ابتدا یاد بگیری. اگر Next.js برای نوع پروژه‌ات لازم نیست، بخش مربوط به آن را سبک‌تر کن؛ اما انتشار و تست را نادیده نگیر.",
        "اضافه کردن: اگر به مهارت تازه‌ای نیاز داری، آن را به شکل یک ماژول تعریف کن: هدف، پیش‌نیاز، موضوعات اصلی، تمرین و معیار پایان. برای مثال، می‌توانی ماژولی برای Vue یا مبانی بک‌اند اضافه کنی.",
        "موضوعات «هسته» حداقل لازم برای کار عملی را مشخص می‌کنند. سراغ بخش «تعمیق» برو وقتی که پروژه، شغل یا هدف مشخصی به آن نیاز دارد. لازم نیست همه موضوعات پیشرفته را از ابتدا یاد بگیری."
      ]
    },
    {
      "title": "معیارهای آمادگی برای ورود به کار",
      "paragraphs": [
        "این معیارها برای ارزیابی توانایی عملی‌اند و تضمین استخدام نیستند."
      ],
      "items": [
        "بتوانی یک فرم با اعتبارسنجی Zod، برچسب‌های قابل‌دسترس، ارسال غیرهم‌زمان و بازیابی خطا بسازی.",
        "بتوانی یک نمای داده‌محور با مرتب‌سازی، فیلتر، صفحه‌بندی و حالت loading بسازی.",
        "پاسخ API را تایپ کنی و فیلدهای ناقص را به‌شکل امن مدیریت کنی.",
        "توضیح بدهی چرا هر state در لایهٔ خاصی از معماری قرار گرفته است.",
        "مشکل چیدمان را با DevTools پیدا و برطرف کنی.",
        "برای رفتارهای حیاتی کاربر تست خودکار بنویسی.",
        "یک پروژهٔ کامل را منتشر کنی و دربارهٔ تصمیم‌ها و tradeoffها توضیح بدهی."
      ]
    }
  ],
  "references": [
    {
      "title": "Frontend Roadmap — roadmap.sh",
      "url": "https://roadmap.sh/frontend",
      "type": "doc",
      "platform": "roadmap.sh",
      "description": "رفرنس الهام‌بخش ساختار مسیر در فایل اصلی؛ دورهٔ آموزشی هر ماژول نیست."
    },
    {
      "title": "How to Become a Frontend Developer in 2026",
      "url": "https://www.greatfrontend.com/blog/how-to-become-a-frontend-developer",
      "type": "doc",
      "platform": "GreatFrontEnd",
      "description": "رفرنس الهام‌بخش مسیر یادگیری و پروژه‌های عملی در فایل اصلی."
    },
    {
      "title": "Frontend Developer Roadmap 2026",
      "url": "https://www.greatfrontend.com/blog/frontend-developer-roadmap",
      "type": "doc",
      "platform": "GreatFrontEnd",
      "description": "رفرنس الهام‌بخش مهارت‌ها و معیارهای عملی در فایل اصلی."
    }
  ],
  "downloads": [
    {
      "title": "PDF فارسی",
      "url": "/roadmaps/frontend/roadmap-fa.pdf"
    },
    {
      "title": "PDF انگلیسی",
      "url": "/roadmaps/frontend/roadmap-en.pdf"
    },
    {
      "title": "متن کامل فارسی",
      "url": "/roadmaps/frontend/source-fa.md"
    }
  ]
};
