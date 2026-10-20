import { FRONTEND_ROADMAP } from "@/data/frontend-roadmap";

export type ResourceType = "video-fa" | "video-en" | "interactive" | "doc";

export interface LearningSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
  platform: string;
  description: string;
}

export interface SubTopic {
  id: string;
  title: string;
  enTitle?: string;
  isOptional?: boolean;
  note?: string;
  interviewTip?: string;
}

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  isInternCore: boolean;
  milestoneBanner?: {
    title: string;
    role: string;
    description: string;
    badge: string;
  };
  topics: SubTopic[];
  resources: Resource[];
  miniProject?: string;
  label?: string;
  prerequisites?: string;
  prerequisiteIds?: string[];
  outcome?: string;
  guidance?: LearningSection[];
  resourceNote?: string;
}

export interface ProjectIdea {
  level: "مبتدی" | "متوسط" | "پیشرفته";
  title: string;
  description: string;
  techStack: string[];
}

export interface RoadmapData {
  id: string;
  title: string;
  enTitle: string;
  tagline: string;
  description: string;
  accentColor: "emerald" | "violet" | "cyan";
  contributor: {
    name: string;
    role: string;
    githubUrl: string;
  };
  steps: RoadmapStep[];
  projects: ProjectIdea[];
  learningMode?: "modular";
  guide?: LearningSection[];
  references?: Resource[];
  downloads?: { title: string; url: string }[];
}

export const ROADMAPS: RoadmapData[] = [
  {
    id: "django-backend",
    title: "توسعه بک‌اند با Django",
    enTitle: "Django Backend Engineering",
    tagline: "مسیر یادگیری اصولی جنگو از پیش‌نیازهای پایتون تا ساخت APIهای مقیاس‌پذیر و استقرار با Docker",
    description:
      "این نقشه راه برای بچه‌هایی طراحی شده که می‌خوان بدون غرق شدن در داکیومنت‌های خشک، با منابع تعاملی و ویدیویی وارد بازار کار بک‌اند پایتون بشن.",
    accentColor: "emerald",
    contributor: {
      name: "مهرشاد",
      role: "توسعه‌دهنده بک‌اند در UniDev",
      githubUrl: "https://github.com",
    },
    steps: [
      {
        id: "dj-step-1",
        stepNumber: 1,
        title: "پیش‌نیازهای Python و محیط توسعه",
        subtitle: "Python Core & Virtual Environments",
        description:
          "قبل از ورود به جنگو، باید پایه پایتون رو قوی کنی و از همون روز اول یاد بگیری هر پروژه رو توی محیط مجازی (venv) خودش ایزوله کنی.",
        isInternCore: true,
        topics: [
          {
            id: "dj-1-1",
            title: "مبانی پایتون و ساختارهای داده (List, Dict, Set, Tuple)",
            enTitle: "Data Structures",
            interviewTip: "تفاوت سرعت جستجو در Set/Dict (O(1)) نسبت به List (O(n)) از سوالات ثابت مصاحبه است.",
          },
          {
            id: "dj-1-2",
            title: "توابع، برنامه‌نویسی شیءگرا (OOP) و مدیریت خطا",
            enTitle: "OOP & Exceptions",
            interviewTip: "در جنگو تمام Modelها و Viewها کلاس هستند؛ درک ارث‌بری (Inheritance) و متد super() حیاتی است.",
          },
          {
            id: "dj-1-3",
            title: "محیط مجازی (venv) و مدیریت پکیج‌ها با pip",
            enTitle: "Virtualenv & pip",
            note: "از روز اول برای هر پروژه venv بسازید تا پکیج‌های سیستم قاطی نشن.",
          },
        ],
        resources: [
          {
            title: "دوره رایگان پایتون مقدماتی تا پیشرفته (منگارد)",
            url: "https://www.mongard.ir/courses/python-beginner/",
            type: "video-fa",
            platform: "Mongard",
            description: "آموزش روان و فارسی مبانی پایتون، شیءگرایی و محیط مجازی مخصوص ورود به جنگو.",
          },
          {
            title: "پلی‌لیست Python Tutorials از Corey Schafer",
            url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
            type: "video-en",
            platform: "YouTube",
            description: "یکی از بهترین و واضح‌ترین آموزش‌های ویدیویی پایتون در دنیا.",
          },
          {
            title: "تمرین تعاملی پایتون در Kaggle Learn",
            url: "https://www.kaggle.com/learn/python",
            type: "interactive",
            platform: "Kaggle",
            description: "مینی‌دوره تعاملی که مستقیم داخل مرورگر کد می‌زنی و تمرین حل می‌کنی.",
          },
          {
            title: "مستندات رسمی پایتون (صرفاً جهت رفرنس)",
            url: "https://docs.python.org/3/tutorial/",
            type: "doc",
            platform: "Python Docs",
            description: "منبع مرجع (Source of Truth) برای زمانی که می‌خواهی جزئیات دقیق یک تابع را چک کنی.",
          },
        ],
        miniProject: "ساخت یک اسکریپت مدیریت کتابخانه در ترمینال با استفاده از کلاس‌ها و ذخیره اطلاعات در فایل JSON.",
      },
      {
        id: "dj-step-2",
        stepNumber: 2,
        title: "ابزارهای ضروری و مفاهیم پایه وب",
        subtitle: "Git, Linux Basics & HTTP Protocol",
        description:
          "برنامه‌نویس بک‌اند بدون درک دقیق پروتکل HTTP، کدهای وضعیت (Status Codes) و کار با Git نمی‌تونه وارد تیم‌های واقعی بشه.",
        isInternCore: true,
        topics: [
          {
            id: "dj-2-1",
            title: "کنترل نسخه با Git و کار تیمی در GitHub",
            enTitle: "Git & GitHub",
            interviewTip: "تفاوت git merge و git rebase و نحوه حل کردن Conflictها را حتماً تمرین کن.",
          },
          {
            id: "dj-2-2",
            title: "کار با ترمینال و دستورات پایه Linux",
            enTitle: "Linux CLI Basics",
          },
          {
            id: "dj-2-3",
            title: "معماری وب: پروتکل HTTP، Request/Response و Headers",
            enTitle: "HTTP & Web Basics",
            interviewTip: "تفاوت متدهای GET, POST, PUT, PATCH, DELETE و معنی کدهای 200, 201, 400, 401, 403, 404, 500.",
          },
          {
            id: "dj-2-4",
            title: "ساختار داده JSON و مفاهیم REST API",
            enTitle: "JSON & RESTful",
          },
        ],
        resources: [
          {
            title: "بازی تعاملی یادگیری Git و Branching",
            url: "https://learngitbranching.js.org/",
            type: "interactive",
            platform: "LearnGitBranching",
            description: "فوق‌العاده جذاب! کل مفاهیم برنچ، مرج و ری‌بیس گیت رو توی ۲ ساعت به صورت بصری و بازی‌محور یاد بگیر.",
          },
          {
            title: "دوره رایگان آموزش گیت و گیت‌هاب (جادی / مکتب‌خونه)",
            url: "https://www.youtube.com/results?search_query=jadi+git+tutorial",
            type: "video-fa",
            platform: "YouTube فارسی",
            description: "آموزش شیرین و کاربردی گیت به زبان فارسی.",
          },
          {
            title: "راهنمای تصویری پروتکل HTTP در MDN",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            type: "doc",
            platform: "MDN Web Docs",
            description: "بهترین رفرنس وب برای درک چرخه Request و Response.",
          },
        ],
        miniProject: "ساخت یک مخزن گیت‌هاب، ایجاد دو برنچ مختلف، شبیه‌سازی Conflict و حل کردن آن + ارسال اولین Pull Request.",
      },
      {
        id: "dj-step-3",
        stepNumber: 3,
        title: "مبانی فریم‌ورک Django",
        subtitle: "Django Architecture, Views & Routing",
        description:
          "آشنایی با ساختار پروژه در جنگو و چرخه حرکت درخواست کاربر از URL تا View و دیتابیس.",
        isInternCore: true,
        topics: [
          {
            id: "dj-3-1",
            title: "ساختار Project در برابر App در جنگو",
            enTitle: "Project vs App",
          },
          {
            id: "dj-3-2",
            title: "معماری MVT (Model-View-Template)",
            enTitle: "MVT Pattern",
          },
          {
            id: "dj-3-3",
            title: "مسیریابی URL Routing و نوشتن Views",
            enTitle: "URLs & Views",
            interviewTip: "تفاوت Function-Based Views (FBV) و Class-Based Views (CBV) و مزایای هرکدام.",
          },
          {
            id: "dj-3-4",
            title: "مدیریت فایل‌های Static و Media",
            enTitle: "Static & Media",
          },
          {
            id: "dj-3-5",
            title: "آشنایی با Templates و Forms سنتی جنگو",
            enTitle: "Templates & Forms",
            isOptional: true,
            note: "در حد آشنایی اولیه کافیست! در بازار کار امروز شرکت‌ها فرانت‌اند جدا (React/Next) دارند و تمرکز اصلی شما باید روی بخش ۶ (DRF) باشد.",
          },
        ],
        resources: [
          {
            title: "پلی‌لیست مدرن Django در کانال BugBytes",
            url: "https://www.youtube.com/@bugbytes3923",
            type: "video-en",
            platform: "YouTube (BugBytes)",
            description: "آموزش‌های فوق‌العاده تمیز، مدرن و کاربردی جنگو بدون حاشیه.",
          },
          {
            title: "دوره جامع آموزش جنگو به زبان فارسی",
            url: "https://www.mongard.ir/courses/django-beginner/",
            type: "video-fa",
            platform: "Mongard",
            description: "شروع گام‌به‌گام جنگو به زبان فارسی از نصب تا ساخت اولین اپ.",
          },
          {
            title: "آموزش گام‌به‌گام جنگو در MDN",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django",
            type: "doc",
            platform: "MDN",
            description: "آموزش متنی-پروژه‌محور بسیار روان‌تر از داکیومنت رسمی.",
          },
        ],
        miniProject: "ساخت پنل ادمین سفارشی‌شده برای یک وبلاگ ساده با قابلیت دسته‌بندی پست‌ها و آپلود تصویر.",
      },
      {
        id: "dj-step-4",
        stepNumber: 4,
        title: "پایگاه داده، SQL و قدرت Django ORM",
        subtitle: "PostgreSQL, Models, Migrations & QuerySets",
        description:
          "قلب تپنده بک‌اند دیتابیس است. در این مرحله یاد می‌گیری چطور بدون نوشتن SQL خام با ORM جنگو کوئری بزنی و در عین حال SQL بلد باشی.",
        isInternCore: true,
        topics: [
          {
            id: "dj-4-1",
            title: "طراحی Models و مدیریت تغییرات با Migrations",
            enTitle: "Models & Migrations",
          },
          {
            id: "dj-4-2",
            title: "عملیات CRUD و تسلط بر QuerySet API",
            enTitle: "CRUD & QuerySets",
            interviewTip: "چرا QuerySetها در جنگو Lazy هستند؟ (تا زمانی که دیتا واقعاً مصرف نشود کوئری به دیتابیس نمی‌رود).",
          },
          {
            id: "dj-4-3",
            title: "روابط بین جداول (ForeignKey, OneToOne, ManyToMany)",
            enTitle: "Database Relations",
          },
          {
            id: "dj-4-4",
            title: "زبان SQL و کار با دیتابیس استاندارد PostgreSQL",
            enTitle: "SQL & PostgreSQL",
          },
        ],
        resources: [
          {
            title: "یادگیری تعاملی SQL از صفر (SQLBolt)",
            url: "https://sqlbolt.com/",
            type: "interactive",
            platform: "SQLBolt",
            description: "بهترین سایت تعاملی برای یادگیری کوئری‌های SQL و Joinها در چند ساعت با حل تمرین زنده.",
          },
          {
            title: "پلی‌لیست عمیق Django ORM در کانال BugBytes",
            url: "https://www.youtube.com/playlist?list=PL-2EBeDYMIbTLulc9FSoAXhbmXpLq2l5t",
            type: "video-en",
            platform: "YouTube (BugBytes)",
            description: "بررسی کامل کوئری‌ها، Aggregation، Annotation و روابط دیتابیس در جنگو.",
          },
          {
            title: "مرجع مدل‌ها و QuerySet در مستندات جنگو",
            url: "https://docs.djangoproject.com/en/stable/topics/db/models/",
            type: "doc",
            platform: "Django Docs",
            description: "رفرنس کامل انواع فیلدها و متدهای ORM.",
          },
        ],
        miniProject: "طراحی اسکیمای دیتابیس یک فروشگاه اینترنتی (کاربر، محصول، دسته‌بندی، سبد خرید و سفارش) و نوشتن ۱۰ کوئری تحلیلی روی آن.",
      },
      {
        id: "dj-step-5",
        stepNumber: 5,
        title: "مدیریت کاربران، احراز هویت و اصول امنیت وب",
        subtitle: "Authentication, Permissions & OWASP Security",
        description:
          "امنیت شوخی‌بردار نیست! در این مرحله مکانیزم‌های لاگین، سطح دسترسی کاربران و جلوگیری از حملات رایج وب را یاد می‌گیری.",
        isInternCore: true,
        topics: [
          {
            id: "dj-5-1",
            title: "سفارشی‌سازی مدل User (AbstractUser / AbstractBaseUser)",
            enTitle: "Custom User Model",
            interviewTip: "چرا همیشه توصیه می‌شود در ابتدای پروژه جنگو مدل User را سفارشی (Custom) کنیم؟",
          },
          {
            id: "dj-5-2",
            title: "ثبت‌نام، ورود و مدیریت سشن‌ها و کوکی‌ها",
            enTitle: "Session & Auth",
          },
          {
            id: "dj-5-3",
            title: "سیستم Permissions و گروه‌بندی دسترسی‌ها (RBAC)",
            enTitle: "Permissions & Groups",
          },
          {
            id: "dj-5-4",
            title: "اصول امنیت وب: جلوگیری از XSS، CSRF و SQL Injection",
            enTitle: "Web Security Basics",
            interviewTip: "توکن CSRF چیست و جنگو چطور به صورت پیش‌فرض جلوی SQL Injection را می‌گیرد؟",
          },
        ],
        resources: [
          {
            title: "آزمایشگاه تعاملی امنیت وب (PortSwigger Web Security Academy)",
            url: "https://portswigger.net/web-security",
            type: "interactive",
            platform: "PortSwigger",
            description: "بهترین پلتفرم رایگان و عملی دنیا برای فهمیدن و تست واقعی آسیب‌پذیری‌های SQLi، XSS و CSRF.",
          },
          {
            title: "آموزش Custom User Model و احراز هویت در جنگو",
            url: "https://www.youtube.com/results?search_query=django+custom+user+model+bugbytes",
            type: "video-en",
            platform: "YouTube",
            description: "پیاده‌سازی استاندارد لاگین با ایمیل یا شماره موبایل در جنگو.",
          },
          {
            title: "مستندات امنیت در Django",
            url: "https://docs.djangoproject.com/en/stable/topics/security/",
            type: "doc",
            platform: "Django Docs",
            description: "چک‌لیست امنیتی داخلی جنگو برای محافظت از وب‌اپلیکیشن.",
          },
        ],
      },
      {
        id: "dj-step-6",
        stepNumber: 6,
        title: "ساخت API حرفه‌ای با Django REST Framework",
        subtitle: "DRF, JWT, Serializers & Swagger Docs",
        description:
          "مهم‌ترین بخش برای بازار کار! ۹۵٪ شرکت‌ها از جنگو برای نوشتن REST API با DRF استفاده می‌کنند تا به فرانت‌اند یا اپلیکیشن موبایل سرویس بدهند.",
        isInternCore: true,
        milestoneBanner: {
          badge: "🎯 ایستگاه اول بازار کار",
          title: "آماده ورود به دوره کارآموزی و پوزیشن Junior!",
          role: "Junior / Intern Django Backend Developer",
          description:
            "نیاز نیست قبل از اپلای کردن تا تهِ مرحله ۸ رو کامل حفظ باشی! با تسلط تا پایان همین مرحله ۶ (DRF) و قرار دادن ۲ پروژه عملی توی گیت‌هاب، کاملاً آماده ارسال رزومه برای کارآموزی هستی.",
        },
        topics: [
          {
            id: "dj-6-1",
            title: "مفاهیم Serializer و ModelSerializer (اعتبارسنجی داده‌ها)",
            enTitle: "Serializers",
            interviewTip: "تفاوت متدهای validate_<field> و validate() در سریالایزرهای DRF چیست؟",
          },
          {
            id: "dj-6-2",
            title: "نوشتن APIView، Generic Views و ViewSets",
            enTitle: "Generic Views & ViewSets",
          },
          {
            id: "dj-6-3",
            title: "احراز هویت مدرن با توکن JWT (پکیج SimpleJWT)",
            enTitle: "JWT Authentication",
            interviewTip: "تفاوت Access Token و Refresh Token چیست و چرا Access Token عمر کوتاهی دارد؟",
          },
          {
            id: "dj-6-4",
            title: "صفحه‌بندی (Pagination)، فیلترینگ و جستجو در API",
            enTitle: "Pagination & Filtering",
          },
          {
            id: "dj-6-5",
            title: "مستندسازی خودکار API با Swagger / OpenAPI (drf-spectacular)",
            enTitle: "Swagger & Postman",
            note: "وقتی API شما خروجی Swagger داشته باشه، بچه‌های فرانت‌اند عاشق کار کردن باهاتون می‌شن!",
          },
        ],
        resources: [
          {
            title: "پلی‌لیست کامل آموزش Django REST Framework (کانال BugBytes)",
            url: "https://www.youtube.com/playlist?list=PL-2EBeDYMIbTLulc9FSoAXhbmXpLq2l5t",
            type: "video-en",
            platform: "YouTube (BugBytes)",
            description: "آموزش صفر تا صد DRF با استانداردهای روز بازار کار.",
          },
          {
            title: "دوره فارسی آموزش Django REST Framework (منگارد)",
            url: "https://www.mongard.ir/courses/django-rest-framework/",
            type: "video-fa",
            platform: "Mongard",
            description: "آموزش جامع ساخت REST API، JWT و پرمیشن‌ها در DRF به زبان فارسی.",
          },
          {
            title: "مستندات رسمی و Quickstart فریم‌ورک DRF",
            url: "https://www.django-rest-framework.org/tutorial/quickstart/",
            type: "doc",
            platform: "DRF Official",
            description: "یکی از خوش‌خوان‌ترین داکیومنت‌ها برای مراجعه سریع به ساختار ViewSetها.",
          },
        ],
        miniProject: "ساخت API کامل یک سیستم رزرو نوبت یا فروشگاه آنلاین با احراز هویت JWT، فیلتر محصولات و مستندات Swagger.",
      },
      {
        id: "dj-step-7",
        stepNumber: 7,
        title: "تست‌نویسی، بهینه‌سازی کوئری و پردازش پس‌زمینه",
        subtitle: "Redis, Celery, N+1 Query Optimization & Testing",
        description:
          "تفاوت یک کدنویس معمولی با یک مهندس نرم‌افزار در این مرحله مشخص می‌شود: کدی بنویس که زیر بار ترافیک کند نشود و تست داشته باشد.",
        isInternCore: false,
        topics: [
          {
            id: "dj-7-1",
            title: "حل مشکل N+1 Query با select_related و prefetch_related",
            enTitle: "Query Optimization",
            interviewTip: "مهم‌ترین سوال مصاحبه جنگو! تفاوت دقیق select_related (برای ForeignKey با SQL JOIN) و prefetch_related (برای ManyToMany با کوئری جدا).",
          },
          {
            id: "dj-7-2",
            title: "کش کردن داده‌ها با Redis برای افزایش سرعت",
            enTitle: "Caching & Redis",
          },
          {
            id: "dj-7-3",
            title: "صف وظایف و کارهای پس‌زمینه با Celery (ارسال ایمیل/پیامک)",
            enTitle: "Celery & Async Tasks",
          },
          {
            id: "dj-7-4",
            title: "نوشتن Unit Test و تست API با Pytest / APITestCase",
            enTitle: "Unit & API Testing",
          },
          {
            id: "dj-7-5",
            title: "کار با Middlewareها، Signals و اصول Clean Code / SOLID",
            enTitle: "Signals & Clean Code",
            isOptional: true,
          },
        ],
        resources: [
          {
            title: "آموزش Celery، Redis و بهینه‌سازی در جنگو (BugBytes)",
            url: "https://www.youtube.com/@bugbytes3923/videos",
            type: "video-en",
            platform: "YouTube",
            description: "ویدیوهای عملی برای اتصال Redis و Celery به جنگو با Docker.",
          },
          {
            title: "آموزش‌های کاربردی Django در Real Python",
            url: "https://realpython.com/tutorials/django/",
            type: "doc",
            platform: "Real Python",
            description: "مقالات پروژه‌محور عالی درباره تست‌نویسی و بهینه‌سازی در جنگو.",
          },
        ],
      },
      {
        id: "dj-step-8",
        stepNumber: 8,
        title: "کانتینرسازی با Docker و استقرار در محیط Production",
        subtitle: "Docker Compose, Gunicorn, Nginx & CI/CD",
        description:
          "خروج پروژه از لپ‌تاپ شخصی و بالا آوردن آن روی سرور واقعی با استانداردهای امنیتی و کانتینری.",
        isInternCore: false,
        topics: [
          {
            id: "dj-8-1",
            title: "جداسازی تنظیمات Development و Production و متغیرهای محیطی (.env)",
            enTitle: "Production Settings",
          },
          {
            id: "dj-8-2",
            title: "نوشتن Dockerfile و بالا آوردن کل استک با Docker Compose",
            enTitle: "Docker & Docker Compose",
            interviewTip: "چطور جنگو، PostgreSQL، Redis و Celery را هم‌زمان در یک فایل docker-compose.yml بالا می‌آورید؟",
          },
          {
            id: "dj-8-3",
            title: "تنظیم وب‌سرور Nginx و اپلیکیشن‌سرور Gunicorn",
            enTitle: "Gunicorn & Nginx",
          },
        ],
        resources: [
          {
            title: "آموزش Docker برای برنامه‌نویسان پایتون و جنگو",
            url: "https://www.youtube.com/results?search_query=dockerize+django+postgres+nginx",
            type: "video-en",
            platform: "YouTube",
            description: "راهنمای عملی داکرایز کردن پروژه جنگو به همراه دیتابیس و Nginx.",
          },
          {
            title: "چک‌لیست رسمی Deployment در مستندات جنگو",
            url: "https://docs.djangoproject.com/en/stable/howto/deployment/",
            type: "doc",
            platform: "Django Docs",
            description: "نکات حیاتی امنیتی (مثل DEBUG=False و ALLOWED_HOSTS) قبل از پابلیش.",
          },
        ],
      },
    ],
    projects: [
      {
        level: "مبتدی",
        title: "پلتفرم وبلاگ و مدیریت تسک تیمی (Task Tracker API)",
        description:
          "ساخت REST API برای مدیریت تسک‌های دانشجویان با قابلیت دسته‌بندی، تعیین ددلاین، کامنت‌گذاری و احراز هویت کاربران.",
        techStack: ["Python", "Django", "SQLite/PostgreSQL", "DRF"],
      },
      {
        level: "متوسط",
        title: "سیستم رزرو نوبت آنلاین یا بک‌اند فروشگاه اینترنتی",
        description:
          "پروژه کامل شامل سبد خرید، مدیریت موجودی انبار (جلوگیری از Race Condition)، فیلتر پیشرفته محصولات، احراز هویت JWT و مستندات کامل Swagger.",
        techStack: ["Django", "DRF", "PostgreSQL", "SimpleJWT", "Swagger"],
      },
      {
        level: "پیشرفته",
        title: "سرویس API مقیاس‌پذیر با کش، پردازش پس‌زمینه و Docker",
        description:
          "بهینه‌سازی کوئری‌ها (حذف N+1)، کش کردن صفحات پرترافیک با Redis، ارسال ایمیل و گزارش‌های سنگین با Celery، پوشش تست بالای ۷۰٪ و استقرار با Docker Compose.",
        techStack: ["DRF", "Redis", "Celery", "Pytest", "Docker Compose", "Nginx"],
      },
    ],
  },
  {
    id: "data-science",
    title: "علم داده و هوش مصنوعی",
    enTitle: "Data Science, Analytics & ML Engineering",
    tagline: "مسیر پروژه‌محور و بدون حاشیه از تحلیل داده با پایتون و SQL تا یادگیری ماشین با رویکرد Just-in-Time Math",
    description:
      "در این نقشه راه، به جای ماه‌ها غرق شدن در تئوری‌های خشک، بلافاصله بعد از پایتون وارد کار با دیتای واقعی می‌شید و ریاضیات و آمار رو به صورت موازی و کاربردی در دل پروژه‌ها یاد می‌گیرید.",
    accentColor: "violet",
    contributor: {
      name: "تیم دیتا UniDev",
      role: "گروه هوش مصنوعی و داده",
      githubUrl: "https://github.com",
    },
    steps: [
      {
        id: "ds-step-1",
        stepNumber: 1,
        title: "پایتون کاربردی برای دیتا و ابزارهای محیط کار",
        subtitle: "Python for Data, Virtualenv & Jupyter/Colab",
        description:
          "برای ورود به دنیای دیتا نیازی به ماه‌ها درگیر شدن با مباحث سنگین مهندسی نرم‌افزار نیست؛ تمرکز اصلی روی ساختار داده‌ها، توابع و راه‌اندازی نوت‌بوک‌های تعاملی است.",
        isInternCore: true,
        topics: [
          {
            id: "ds-1-1",
            title: "مبانی پایتون، حلقه‌ها، توابع و List Comprehension",
            enTitle: "Python Fundamentals",
            interviewTip: "نوشتن کدهای خلاصه و بهینه با List/Dict Comprehension و توابع Lambda در پردازش دیتا بسیار پرکاربرد است.",
          },
          {
            id: "ds-1-2",
            title: "ساختارهای داده پایتون (List, Dict, Set, Tuple)",
            enTitle: "Data Structures",
          },
          {
            id: "ds-1-3",
            title: "مدیریت محیط مجازی (venv / Conda) و Git پایه",
            enTitle: "Virtual Environments & Git",
            note: "از همین قدم اول کار با venv و Git را یاد بگیرید تا کتابخانه‌های سنگین دیتا با هم تداخل پیدا نکنند.",
          },
          {
            id: "ds-1-4",
            title: "تسلط بر محیط Jupyter Notebook و Google Colab (استفاده از GPU رایگان)",
            enTitle: "Jupyter & Google Colab",
          },
          {
            id: "ds-1-5",
            title: "برنامه‌نویسی شیءگرا (OOP) در پایتون",
            enTitle: "OOP Basics",
            isOptional: true,
            note: "اختیاری برای شروع: در حد فهمیدن نحوه ساخت کلاس برای درک ساختار کتابخانه‌هایی مثل Scikit-learn و PyTorch کافی است.",
          },
        ],
        resources: [
          {
            title: "مینی‌دوره تعاملی پایتون در Kaggle Learn",
            url: "https://www.kaggle.com/learn/python",
            type: "interactive",
            platform: "Kaggle Learn",
            description: "بهترین نقطه شروع! بدون نیاز به نصب هیچ برنامه‌ای، پایتون مخصوص دیتا ساینس رو توی مرورگر تمرین کن.",
          },
          {
            title: "بازی تعاملی یادگیری Git",
            url: "https://learngitbranching.js.org/",
            type: "interactive",
            platform: "LearnGitBranching",
            description: "یادگیری سریع مفاهیم گیت به صورت کاملاً تصویری.",
          },
          {
            title: "آموزش کار با Google Colab و Jupyter به زبان فارسی",
            url: "https://www.youtube.com/results?search_query=google+colab+persian+tutorial",
            type: "video-fa",
            platform: "YouTube فارسی",
            description: "آشنایی با محیط کولب و نحوه اجرای کدهای پایتون روی سرورهای رایگان گوگل.",
          },
        ],
        miniProject: "تحلیل یک فایل CSV ساده در Google Colab فقط با استفاده از دیکشنری‌ها و لیست‌های استاندارد پایتون.",
      },
      {
        id: "ds-step-2",
        stepNumber: 2,
        title: "کار با داده، پاک‌سازی و تسلط بر SQL",
        subtitle: "NumPy, Pandas, Data Cleaning & SQL",
        description:
          "بلافاصله بعد از پایتون وارد دیتای واقعی شو! ۸۰٪ زمان یک متخصص داده صرف استخراج داده با SQL و تمیزکاری آن با Pandas می‌شود.",
        isInternCore: true,
        topics: [
          {
            id: "ds-2-1",
            title: "محاسبات برداری و ماتریسی سریع با کتابخانه NumPy",
            enTitle: "NumPy Arrays",
            interviewTip: "چرا عملیات Vectorization در NumPy ده‌ها برابر سریع‌تر از حلقه for معمولی پایتون است؟",
          },
          {
            id: "ds-2-2",
            title: "پردازش و تحلیل داده‌های جدولی با Pandas (DataFrames)",
            enTitle: "Pandas Mastery",
          },
          {
            id: "ds-2-3",
            title: "پاک‌سازی داده (Data Cleaning): مدیریت داده‌های گمشده (Missing Values) و پرت (Outliers)",
            enTitle: "Data Cleaning & Wrangling",
            interviewTip: "در چه شرایطی ستون دارای Missing Value را حذف می‌کنیم و کی آن را با میانگین یا میانه (Median) پر می‌کنیم؟",
          },
          {
            id: "ds-2-4",
            title: "تسلط کامل بر SQL برای تحلیل داده (JOINs, Group By, Window Functions)",
            enTitle: "Analytical SQL",
            interviewTip: "توابع پنجره‌ای (Window Functions مثل ROW_NUMBER, RANK, LAG) در ۱۰۰٪ مصاحبه‌های دیتا پرسیده می‌شوند!",
          },
        ],
        resources: [
          {
            title: "مینی‌دوره تعاملی Pandas در کگل",
            url: "https://www.kaggle.com/learn/pandas",
            type: "interactive",
            platform: "Kaggle Learn",
            description: "آموزش عملی فیلتر کردن، گروه‌بندی و تمیزکاری دیتافریم‌ها با دیتاست‌های واقعی.",
          },
          {
            title: "مینی‌دوره Data Cleaning در کگل",
            url: "https://www.kaggle.com/learn/data-cleaning",
            type: "interactive",
            platform: "Kaggle Learn",
            description: "تکنیک‌های عملی برخورد با داده‌های ناقص و ناسازگار.",
          },
          {
            title: "آموزش تعاملی SQL در SQLBolt + کگل SQL",
            url: "https://sqlbolt.com/",
            type: "interactive",
            platform: "SQLBolt",
            description: "یادگیری سریع و تعاملی کوئری‌نویسی SQL از پایه تا پیشرفته.",
          },
          {
            title: "تمرین‌های تحلیل داده و پایتون در کوئرا (Quera)",
            url: "https://quera.org/",
            type: "interactive",
            platform: "Quera (فارسی)",
            description: "حل سوالات واقعی مسابقات و مصاحبه‌های شرکت‌های ایرانی با داوری خودکار.",
          },
        ],
        miniProject: "دانلود یک دیتاست واقعی و کثیف (مثل اطلاعات مسکن تهران یا فیلم‌های IMDb)، پاک‌سازی کامل آن با Pandas و استخراج ۱۰ گزارش آماری.",
      },
      {
        id: "ds-step-3",
        stepNumber: 3,
        title: "تحلیل اکتشافی (EDA)، بصری‌سازی و آمار کاربردی",
        subtitle: "Visualization, Storytelling & Just-in-Time Statistics",
        description:
          "یادگیری موازی آمار در کنار نمودارها! به جای حفظ کردن فرمول‌های خشک، آمار توصیفی و آزمون فرض رو هم‌زمان با کشیدن نمودار روی دیتای واقعی یاد بگیر.",
        isInternCore: true,
        milestoneBanner: {
          badge: "🎯 ایستگاه اول بازار کار (مسیر تحلیل داده)",
          title: "آماده ورود به بازار کار به عنوان Data Analyst!",
          role: "Junior Data Analyst / BI Specialist",
          description:
            "اگر علاقه‌ای به الگوریتم‌های سنگین یادگیری ماشین نداری، با تسلط کامل تا پایان همین مرحله ۳ (Python + SQL قوی + Pandas + EDA و آمار) در کنار یک ابزار داشبوردسازی (مثل PowerBI یا Metabase)، همین الان می‌تونی برای موقعیت‌های شغلی «تحلیلگر داده (Data Analyst)» رزومه بفرستی!",
        },
        topics: [
          {
            id: "ds-3-1",
            title: "تحلیل اکتشافی داده (EDA) و کشف الگوهای پنهان",
            enTitle: "Exploratory Data Analysis",
          },
          {
            id: "ds-3-2",
            title: "رسم نمودارهای تحلیلی با Matplotlib، Seaborn و Plotly",
            enTitle: "Data Visualization",
          },
          {
            id: "ds-3-3",
            title: "آمار توصیفی در عمل (میانگین، میانه، واریانس، چولگی و توزیع نرمال)",
            enTitle: "Descriptive Statistics",
            interviewTip: "چرا برای تحلیل درآمد افراد جامعه یا قیمت خانه، «میانه (Median)» معیار بهتری نسبت به «میانگین (Mean)» است؟",
          },
          {
            id: "ds-3-4",
            title: "آمار استنباطی، احتمال پایه و آزمون فرض (Hypothesis Testing & A/B Testing)",
            enTitle: "A/B Testing & P-Value",
            interviewTip: "مفهوم P-Value چیست و شرکت‌هایی مثل اسنپ یا دیجی‌کالا چطور با A/B Test تصمیم می‌گیرند یک فیچر جدید را نگه دارند؟",
          },
          {
            id: "ds-3-5",
            title: "روایت‌گری داده (Data Storytelling) و درک شاخص‌های کسب‌وکار (KPIs)",
            enTitle: "Data Storytelling",
          },
        ],
        resources: [
          {
            title: "کانال یوتیوب StatQuest with Josh Starmer (فوق‌العاده!)",
            url: "https://www.youtube.com/@statquest",
            type: "video-en",
            platform: "YouTube (StatQuest)",
            description: "بهترین کانال دنیا برای فهمیدن مفاهیم آمار، احتمال و P-value به ساده‌ترین و تصویری‌ترین زبان ممکن بدون پیچیدگی.",
          },
          {
            title: "دوره رایگان آمار و احتمال در Khan Academy",
            url: "https://www.khanacademy.org/math/statistics-probability",
            type: "interactive",
            platform: "Khan Academy",
            description: "آموزش گام‌به‌گام و بسیار روان مفاهیم پایه آمار همراه با تمرین‌های تعاملی.",
          },
          {
            title: "مینی‌دوره Data Visualization در Kaggle",
            url: "https://www.kaggle.com/learn/data-visualization",
            type: "interactive",
            platform: "Kaggle Learn",
            description: "آموزش عملی کتابخانه Seaborn و انتخاب نمودار مناسب برای هر نوع داده.",
          },
        ],
        miniProject: "پروژه کامل EDA و تحلیل آماری روی دیتاست مشتریان یک فروشگاه اینترنتی + ارائه نتایج در یک نوت‌بوک تمیز همراه با نمودار.",
      },
      {
        id: "ds-step-4",
        stepNumber: 4,
        title: "ریاضیات شهودی ماشین لرنینگ (Just-in-Time Math)",
        subtitle: "Intuitive Linear Algebra, Calculus & Optimization",
        description:
          "حالا که با دیتا کار کردی و می‌خوای وارد ماشین لرنینگ بشی، وقتشه شهودِ پشت جبر خطی و مشتق رو یاد بگیری تا بفهمی مدل‌ها چطور آموزش می‌بینند.",
        isInternCore: true,
        topics: [
          {
            id: "ds-4-1",
            title: "شهود جبر خطی: بردارها، ماتریس‌ها، ضرب نقطه‌ای و مقادیر ویژه (Eigenvalues)",
            enTitle: "Linear Algebra Intuition",
            interviewTip: "کاربرد مقادیر ویژه و بردارهای ویژه در الگوریتم کاهش ابعاد PCA چیست؟",
          },
          {
            id: "ds-4-2",
            title: "مفهوم مشتق، گرادیان و الگوریتم بهینه‌سازی Gradient Descent",
            enTitle: "Calculus & Gradient Descent",
            interviewTip: "نقش Learning Rate در الگوریتم گرادیان کاهشی چیست و اگر خیلی بزرگ یا خیلی کوچک باشد چه اتفاقی می‌افتد؟",
          },
        ],
        resources: [
          {
            title: "پلی‌لیست انیمیشنی Essence of Linear Algebra از 3Blue1Brown",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            type: "video-en",
            platform: "YouTube (3Blue1Brown)",
            description: "شاهکار انیمیشنی! جبر خطی و ماتریس‌ها رو طوری بصری می‌فهمی که هیچ‌وقت سر کلاس دانشگاه ندیدی.",
          },
          {
            title: "پلی‌لیست انیمیشنی Essence of Calculus از 3Blue1Brown",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
            type: "video-en",
            platform: "YouTube (3Blue1Brown)",
            description: "درک عمیق و شهودی مفهوم مشتق و نرخ تغییرات بدون درگیر شدن با محاسبات خسته‌کننده.",
          },
        ],
      },
      {
        id: "ds-step-5",
        stepNumber: 5,
        title: "یادگیری ماشین کلاسیک و مهندسی ویژگی",
        subtitle: "Scikit-Learn, XGBoost, Feature Engineering & Evaluation",
        description:
          "هسته اصلی شغل Data Scientist! ساخت مدل‌های پیش‌بینی روی داده‌های جدولی، جلوگیری از خطاهای مرگبار مثل نشت داده و تسلط بر الگوریتم‌های Boosting.",
        isInternCore: true,
        milestoneBanner: {
          badge: "🚀 ایستگاه دوم بازار کار (مسیر علم داده)",
          title: "آماده ورود به کارآموزی Data Science و Machine Learning!",
          role: "Data Science Intern / Junior ML Developer",
          description:
            "با تسلط بر این مرحله و زدن ۲ پروژه End-to-End روی دیتاست‌های واقعی (همراه با گیت‌هاب مرتب)، می‌تونی برای موقعیت‌های کارآموزی و جونیور Data Scientist اقدام کنی!",
        },
        topics: [
          {
            id: "ds-5-1",
            title: "یادگیری نظارت‌شده (Supervised): رگرسیون خطی/لجستیک، درخت تصمیم و Random Forest",
            enTitle: "Supervised Learning",
          },
          {
            id: "ds-5-2",
            title: "پادشاهان داده‌های جدولی: الگوریتم‌های XGBoost، LightGBM و CatBoost",
            enTitle: "Gradient Boosting Models",
            interviewTip: "تفاوت Bagging (مثل Random Forest) و Boosting (مثل XGBoost) چیست و چرا XGBoost در مسابقات کگل و صنعت انقدر محبوب است؟",
          },
          {
            id: "ds-5-3",
            title: "یادگیری بدون نظارت (Unsupervised): خوشه‌بندی K-Means و کاهش ابعاد PCA",
            enTitle: "Clustering & PCA",
          },
          {
            id: "ds-5-4",
            title: "مهندسی ویژگی (Feature Engineering) و کدگذاری متغیرها",
            enTitle: "Feature Engineering",
          },
          {
            id: "ds-5-5",
            title: "ارزیابی مدل (Precision, Recall, F1, ROC-AUC) و اعتبارسنجی Cross-Validation",
            enTitle: "Model Evaluation",
            interviewTip: "در سیستم تشخیص سرطان یا کشف تقلب بانکی، Precision مهم‌تر است یا Recall؟ چرا Accuracy معیار فریبنده‌ای است؟",
          },
          {
            id: "ds-5-6",
            title: "مدیریت بیش‌برازش (Overfitting)، نشت داده (Data Leakage) و عدم توازن کلاس‌ها (Class Imbalance)",
            enTitle: "Data Leakage & Imbalance",
            interviewTip: "چرا نرمال‌سازی (Scaling) داده قبل از تقسیم Train/Test باعث Data Leakage می‌شود؟",
          },
        ],
        resources: [
          {
            title: "دوره معروف Machine Learning Specialization از Andrew Ng",
            url: "https://www.coursera.org/specializations/machine-learning-introduction",
            type: "video-en",
            platform: "Coursera / YouTube",
            description: "معتبرترین دوره شروع یادگیری ماشین در دنیا با تدریس فوق‌العاده اندرو ان‌جی.",
          },
          {
            title: "پلی‌لیست Machine Learning در کانال StatQuest",
            url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
            type: "video-en",
            platform: "YouTube (StatQuest)",
            description: "توضیح گام‌به‌گام و تصویری تک‌تک الگوریتم‌ها از درخت تصمیم تا XGBoost و ROC-AUC.",
          },
          {
            title: "مینی‌دوره‌های Intro to ML و Intermediate ML در کگل",
            url: "https://www.kaggle.com/learn/intro-to-machine-learning",
            type: "interactive",
            platform: "Kaggle Learn",
            description: "کدنویسی عملی با Scikit-learn و XGBoost همراه با آموزش جلوگیری از Data Leakage.",
          },
        ],
        miniProject: "پروژه پیش‌بینی ریزش مشتریان (Customer Churn) یا تخمین قیمت مسکن با XGBoost و مقایسه دقیق معیارهای F1 و ROC-AUC.",
      },
      {
        id: "ds-step-6",
        stepNumber: 6,
        title: "استقرار مدل و تبدیل پروژه به محصول (Model Deployment)",
        subtitle: "FastAPI, Streamlit & End-to-End Portfolio",
        description:
          "مدلی که فقط داخل فایل Jupyter Notebook روی سیستم خودت کار کنه برای شرکت‌ها ارزش تجاری نداره! یاد بگیر مدلت رو به یک وب‌اپ یا API زنده تبدیل کنی.",
        isInternCore: false,
        topics: [
          {
            id: "ds-6-1",
            title: "ذخیره و بازیابی مدل‌های آموزش‌دیده (Pickle / Joblib)",
            enTitle: "Model Serialization",
          },
          {
            id: "ds-6-2",
            title: "ساخت رابط کاربری تعاملی و دمو برای مدل با Streamlit",
            enTitle: "Streamlit Dashboards",
            note: "با Streamlit می‌تونی در ۵۰ خط کد پایتون، یک وب‌سایت تعاملی برای تست زنده مدلت بسازی و لینکش رو بذاری توی رزومه!",
          },
          {
            id: "ds-6-3",
            title: "ساخت سرویس API سریع برای مدل با FastAPI",
            enTitle: "FastAPI Model Serving",
          },
          {
            id: "ds-6-4",
            title: "چیدمان پورتفولیو حرفه‌ای در GitHub (مستندسازی README و نتایج)",
            enTitle: "GitHub Portfolio",
          },
        ],
        resources: [
          {
            title: "مستندات و گالری پروژه‌های Streamlit",
            url: "https://streamlit.io/",
            type: "interactive",
            platform: "Streamlit",
            description: "سریع‌ترین ابزار تبدیل اسکریپت‌های دیتا ساینس به وب‌اپلیکیشن‌های قابل اشتراک‌گذاری.",
          },
          {
            title: "آموزش دیپلوی مدل ماشین لرنینگ با FastAPI",
            url: "https://www.youtube.com/results?search_query=deploy+machine+learning+model+fastapi",
            type: "video-en",
            platform: "YouTube",
            description: "آموزش ساخت REST API برای مدل‌های Scikit-learn با FastAPI.",
          },
        ],
      },
      {
        id: "ds-step-7",
        stepNumber: 7,
        title: "شاخه‌های پیشرفته هوش مصنوعی (انتخابی بر اساس علاقه)",
        subtitle: "Deep Learning, NLP, Generative AI & LLMs",
        description:
          "این مرحله برای ورود به شاخه AI / ML Engineer است. نیازی به یادگیری همه موارد نیست؛ بر اساس فیلد مورد علاقه‌ت یک مسیر رو انتخاب کن.",
        isInternCore: false,
        topics: [
          {
            id: "ds-7-1",
            title: "یادگیری عمیق (Deep Learning) و شبکه‌های عصبی با PyTorch",
            enTitle: "Deep Learning & PyTorch",
            isOptional: true,
          },
          {
            id: "ds-7-2",
            title: "پردازش زبان طبیعی (NLP) و معماری ترنسفورمرها",
            enTitle: "NLP & Transformers",
            isOptional: true,
          },
          {
            id: "ds-7-3",
            title: "مهندسی هوش مصنوعی مولد، LLMها و سیستم‌های RAG",
            enTitle: "LLMs & RAG Systems",
            isOptional: true,
            note: "ترندترین حوزه فعلی بازار کار برای ساخت دستیارهای هوشمند روی اسناد و متون.",
          },
          {
            id: "ds-7-4",
            title: "تحلیل سری‌های زمانی (Time Series) یا سیستم‌های پیشنهاددهنده (Recommender Systems)",
            enTitle: "Time Series & RecSys",
            isOptional: true,
          },
        ],
        resources: [
          {
            title: "دوره عملی Deep Learning برای کدنویس‌ها (fast.ai)",
            url: "https://course.fast.ai/",
            type: "video-en",
            platform: "fast.ai",
            description: "بهترین دوره پروژه‌محور و Top-Down یادگیری عمیق با PyTorch.",
          },
          {
            title: "دوره رایگان NLP و LLM در Hugging Face",
            url: "https://huggingface.co/learn/nlp-course/",
            type: "interactive",
            platform: "Hugging Face",
            description: "مرجع اصلی یادگیری کار با مدل‌های زبانی و ترنسفورمرها.",
          },
        ],
      },
    ],
    projects: [
      {
        level: "مبتدی",
        title: "داشبورد تحلیلی و EDA بازار کار برنامه‌نویسی ایران",
        description:
          "جمع‌آوری و پاک‌سازی داده‌های آگهی‌های شغلی با Pandas، تحلیل آماری حقوق‌ها و مهارت‌های پرتکرار و نمایش نمودارهای تعاملی در Streamlit.",
        techStack: ["Python", "Pandas", "Seaborn", "Streamlit"],
      },
      {
        level: "متوسط",
        title: "سیستم هوشمند پیش‌بینی ریزش مشتری (Churn Prediction) با XGBoost",
        description:
          "مهندسی ویژگی، رفع مشکل عدم توازن کلاس‌ها (SMOTE)، آموزش مدل‌های XGBoost و LightGBM، بررسی دقیق Data Leakage و ساخت صفحه تست زنده.",
        techStack: ["Scikit-Learn", "XGBoost", "Pandas", "FastAPI"],
      },
      {
        level: "پیشرفته",
        title: "دستیار هوشمند پرسش و پاسخ از جزوات دانشگاهی (سیستم RAG)",
        description:
          "استخراج متن از فایل‌های PDF کتاب‌های درسی، ذخیره‌سازی برداری (Vector DB) و ساخت سیستم پاسخگویی هوشمند با استفاده از API مدل‌های زبانی.",
        techStack: ["Python", "LangChain / RAG", "Vector DB", "FastAPI"],
      },
    ],
  },
  {
    id: "linux-devops-core",
    title: "لینوکس، سیستم‌عامل و Docker برای برنامه‌نویس‌ها",
    enTitle: "Linux, OS Internals & Docker Essentials",
    tagline: "تبدیل مفاهیم تئوری سیستم‌عامل دانشگاه به مهارت‌های عملی کار با ترمینال، لینوکس و کانتینرسازی پروژه‌ها",
    description:
      "به جای ۱۱ شاخه تئوری و پراکنده، این نقشه راه دقیقاً همون بخش‌هایی از سیستم‌عامل، لینوکس و داکر رو پوشش می‌ده که هر برنامه‌نویس بک‌اند، هوش مصنوعی و علاقه‌مند به DevOps توی بازار کار بهش نیاز داره.",
    accentColor: "cyan",
    contributor: {
      name: "حسین",
      role: "لید کامیونیتی UniDev",
      githubUrl: "https://github.com",
    },
    steps: [
      {
        id: "lx-step-1",
        stepNumber: 1,
        title: "مفاهیم درس سیستم‌عامل در دنیای واقعی",
        subtitle: "Processes, Threads, Memory & Concurrency in Practice",
        description:
          "ترجمه مستقیم مباحث کلاس سیستم‌عامل دانشگاه به سوالات مصاحبه فنی و چالش‌های واقعی سرور.",
        isInternCore: true,
        topics: [
          {
            id: "lx-1-1",
            title: "تفاوت Process و Thread در عمل و نحوه مدیریت منابع",
            enTitle: "Process vs Thread",
            interviewTip: "چرا ارتباط بین تردها سریع‌تر از پروسس‌هاست و کرش کردن یک ترد چه تاثیری روی کل پروسس می‌گذارد؟",
          },
          {
            id: "lx-1-2",
            title: "مفهوم Race Condition و Deadlock (از سیستم‌عامل تا تراکنش‌های دیتابیس)",
            enTitle: "Concurrency & Deadlocks",
            interviewTip: "اگر دو کاربر در یک لحظه روی خرید آخرین موجودی یک کالا کلیک کنند، چطور جلوی Race Condition را می‌گیرید؟",
          },
          {
            id: "lx-1-3",
            title: "مدیریت حافظه (RAM، Stack vs Heap و مفهوم Swap)",
            enTitle: "Memory Management",
          },
        ],
        resources: [
          {
            title: "دوره رایگان لینوکس و مفاهیم سیستم‌عامل (جادی - LPIC-1)",
            url: "https://www.youtube.com/playlist?list=PL-tKrPVkKKE0k_1812_c2-tT3V7G2M8sA",
            type: "video-fa",
            platform: "YouTube (جادی)",
            description: "بهترین و جذاب‌ترین دوره فارسی برای درک عمیق لینوکس و نحوه کارکرد سیستم‌عامل.",
          },
        ],
      },
      {
        id: "lx-step-2",
        stepNumber: 2,
        title: "تسلط بر ترمینال لینوکس و اسکریپت‌نویسی Bash",
        subtitle: "Linux CLI, Permissions, SSH & Process Monitoring",
        description:
          "هر سروری که در آینده کدهات رو روش دیپلوی می‌کنی لینوکسیه! ترس از صفحه سیاه ترمینال رو بریز دور.",
        isInternCore: true,
        topics: [
          {
            id: "lx-2-1",
            title: "فایل‌سیستم لینوکس، دستورات پایه و لوله‌کشی دستورات (Pipes & Redirection)",
            enTitle: "File System & Pipes",
          },
          {
            id: "lx-2-2",
            title: "مدیریت کاربران و سطح دسترسی فایل‌ها (chmod / chown)",
            enTitle: "Permissions (755 / 644)",
            interviewTip: "معنی دقیق دستور chmod 600 روی فایل کلید خصوصی SSH چیست؟",
          },
          {
            id: "lx-2-3",
            title: "اتصال امن به سرور با SSH و مدیریت کلیدهای عمومی/خصوصی",
            enTitle: "SSH & Keys",
          },
          {
            id: "lx-2-4",
            title: "مانیتورینگ منابع سرور و سرویس‌ها (htop, btop, systemd, journalctl)",
            enTitle: "Systemd & Monitoring",
          },
        ],
        resources: [
          {
            title: "سایت تعاملی Linux Journey",
            url: "https://linuxjourney.com/",
            type: "interactive",
            platform: "Linux Journey",
            description: "یادگیری مرحله‌به‌مرحله و بسیار خلاصه و تعاملی دستورات لینوکس.",
          },
          {
            title: "بازی هکری OverTheWire: Bandit برای تمرین لینوکس و SSH",
            url: "https://overthewire.org/wargames/bandit/",
            type: "interactive",
            platform: "OverTheWire",
            description: "فوق‌العاده اعتیادآور! با وصل شدن به سرور واقعی از طریق SSH و حل معماها به مرحله بعد می‌ری.",
          },
        ],
        miniProject: "نوشتن یک اسکریپت Bash که به صورت خودکار از دیتابیس پروژه بکاپ بگیرد و فایل‌های قدیمی‌تر از ۷ روز را پاک کند.",
      },
      {
        id: "lx-step-3",
        stepNumber: 3,
        title: "کانتینرسازی با Docker و Docker Compose",
        subtitle: "Containers vs VMs, Dockerfile & Multi-Container Apps",
        description:
          "پایانِ بهانه‌ی «ولی روی سیستم من کار می‌کرد!»؛ بسته‌بندی پروژه به همراه تمام پیش‌نیازها در یک کانتینر استاندارد.",
        isInternCore: true,
        milestoneBanner: {
          badge: "⚡ مهارت طلایی رزومه",
          title: "تسلط بر لینوکس + Docker = یک سر و گردن بالاتر از بقیه کارآموزها!",
          role: "Cloud-Ready Developer",
          description:
            "داشتن یک فایل Dockerfile و docker-compose.yml تمیز در پروژه‌های گیت‌هابت، به مصاحبه‌کننده نشون می‌ده که تو فرهنگ مهندسی نرم‌افزار مدرن رو بلدی.",
        },
        topics: [
          {
            id: "lx-3-1",
            title: "تفاوت معماری ماشین مجازی (VM) و کانتینر (Container)",
            enTitle: "Containers vs VMs",
            interviewTip: "چرا کانتینرهای داکر در چند ثانیه بالا می‌آیند و کرنل سیستم‌عامل میزبان را به اشتراک می‌گذارند؟",
          },
          {
            id: "lx-3-2",
            title: "نوشتن Dockerfile بهینه و مدیریت Imageها و Volumeها",
            enTitle: "Dockerfile & Volumes",
          },
          {
            id: "lx-3-3",
            title: "اجرای هم‌زمان بک‌اند، فرانت‌اند و دیتابیس با Docker Compose",
            enTitle: "Docker Compose",
          },
        ],
        resources: [
          {
            title: "آزمایشگاه رایگان Play with Docker در مرورگر",
            url: "https://labs.play-with-docker.com/",
            type: "interactive",
            platform: "Play with Docker",
            description: "محیط لینوکس و داکر آنلاین و رایگان برای تست دستورات داکر بدون نصب روی سیستم.",
          },
          {
            title: "دوره ویدیویی آموزش Docker از صفر (TechWorld with Nana)",
            url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
            type: "video-en",
            platform: "YouTube (Nana)",
            description: "بهترین آموزش تصویری و انیمیشنی داکر برای درک کامل کانتینرها.",
          },
        ],
      },
    ],
    projects: [
      {
        level: "مبتدی",
        title: "شخصی‌سازی محیط توسعه لینوکس (Dotfiles & Terminal Setup)",
        description:
          "راه‌اندازی Zsh، Tmux و ابزارهای مدرن ترمینال و ذخیره کانفیگ‌ها در یک مخزن Dotfiles روی گیت‌هاب.",
        techStack: ["Linux", "Bash", "Zsh", "Git"],
      },
      {
        level: "متوسط",
        title: "داکرایز کردن کامل یک پروژه وب + دیتابیس",
        description:
          "نوشتن Dockerfile چندمرحله‌ای (Multi-stage) و بالا آوردن اپلیکیشن به همراه PostgreSQL و Nginx با یک دستور docker compose up.",
        techStack: ["Docker", "Docker Compose", "Nginx", "Linux"],
      },
    ],
  },
  FRONTEND_ROADMAP,
];
