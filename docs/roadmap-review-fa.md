# ممیزی دقیق منابع و محتوای چهار رودمپ UniDev

تاریخ بررسی: **۲۰ اکتبر ۲۰۲۶**. این نسخه جایگزین گزارش خلاصهٔ قبلی است. منابع تازه‌اضافه‌شدهٔ فرانت‌اند هم با همان معیار منابع قبلی بررسی شده‌اند.

مبنای داوری عمق: **دانشجو برای ساخت پروژهٔ قابل توضیح و آماده‌شدن برای کارآموزی**. «برای شروع لازم نیست» یعنی می‌تواند به تعمیق یا یک شاخهٔ تخصصی برود؛ به معنی بی‌فایده بودن آن موضوع برای همهٔ افراد نیست. این سند پیشنهاد و شواهد بررسی است؛ داده‌ها و لینک‌های نمایش‌داده‌شده در سایت در این نوبت تغییر نکرده‌اند.

## ۱. دامنه و روش بررسی

- **۴ رودمپ، ۲۷ بخش و ۱۲۸ گرهٔ مبحث**؛ هر گره در این گزارش تصمیم مستقل دارد.
- **۶۹ جایگاه منبع آموزشی + ۳ رفرنس اصلی فرانت‌اند = ۷۲ جایگاه، با ۶۶ URL متفاوت**؛ تکرار یک URL با ادعاهای متفاوت، جدا بررسی شده است.
- **۳ لینک گردآورنده و ۳ فایل اصلی قابل دریافت** نیز جدا بررسی شده‌اند.
- علاوه بر HTTP، متن و فهرست صفحه با مفهوم همان مرحله مقایسه شده است؛ بنابراین صفحهٔ سالم اما عمومی یا کم‌پوشش هم مشخص شده است.
- در اجرای مستقیمِ ۶۶ URL: **۴۶ پاسخ ۲۰۰، سه پاسخ ۴۰۴، یک پاسخ ۴۰۳ و ۱۶ نتیجهٔ نامشخص شبکه**. این اعداد تعداد URL یکتا هستند، نه تعداد کارت‌های تکراری.
- HTTP ۲۰۰ به معنی فعال‌بودن سرویس، اجرای تمرین یا کافی‌بودن محتوا نیست. **Play with Docker نمونهٔ روشن همین خطاست**. بعضی پاسخ‌های ۲۰۰ فقط پوستهٔ JavaScript بودند.
- برای صفحات پویا و یوتیوب از بازیابی وب، عنوان ناشر و در مواردی فهرست رسمی سازنده هم استفاده شد. **تمام ویدئوها تماشا و تمام تمرین‌های خارجی اجرا نشده‌اند**؛ مواردی که فقط عنوان/فهرست یا وضعیت نامشخص دارند، با تأیید محتوای کامل اشتباه نشده‌اند. بازیابی وب ممکن است نمایهٔ قدیمی‌تر باشد؛ آن را تاریخ انتشار یا تأیید پخش امروز حساب نکرده‌ام.

دادهٔ قابل پیگیریِ هر URL، شناسهٔ هر مبحث و تصمیم متناظر در [roadmap-content-audit.json](roadmap-content-audit.json) است. دو فایل قدیمی `resource-link-audit.json` و `frontend-resource-link-audit.json` صرفاً ثبت بررسی HTTP قبلی‌اند؛ برای داوری محتوایی، این نسخه و فایل جدید ملاک‌اند.

راهنمای خواندن: [موارد فوری](#urgent)، [تمام منابع](#resources)، [تمام مباحث و کمبودها](#topics)، [اشتباه‌های علمی و ادعاها](#claims)، [پروژه‌ها و معیارهای پایان](#projects)، [قالب مشترک و ترتیب اصلاح](#standard).

<a id="urgent"></a>
## ۲. مواردی که باید زودتر اصلاح شوند

| محل دقیق | مشکل | تصمیم پیشنهادی |
| --- | --- | --- |
| `dj-step-1-r1` | [Python منگارد](https://www.mongard.ir/courses/python-beginner/) پاسخ ۴۰۴ می‌دهد. | URL واقعی دوره تأیید شود؛ تا آن زمان منبع قابل اتکا نیست. |
| `dj-step-3-r2` | [Django منگارد](https://www.mongard.ir/courses/django-beginner/) پاسخ ۴۰۴ می‌دهد. | تأیید URL فعلی یا منبع شروع جایگزین مشخص. |
| `dj-step-6-r2` | [DRF منگارد](https://www.mongard.ir/courses/django-rest-framework/) پاسخ ۴۰۴ می‌دهد. | تأیید دورهٔ واقعی؛ نه حدس زدن URL جدید. |
| `lx-step-3-r1` | [Play with Docker](https://labs.play-with-docker.com/) ۲۰۰ است ولی طبق اعلان ناشر، سرویس از **۱ مارس ۲۰۲۶** در دسترس نخواهد بود. این مورد در گزارش قبلی جا افتاده بود. | به‌عنوان آزمایشگاه فعال معرفی نشود؛ کارگاه پشتیبانی‌شده جایگزین شود. |
| `dj-step-4-r2` و `dj-step-6-r1` | [یک playlist](https://www.youtube.com/playlist?list=PL-2EBeDYMIbTLulc9FSoAXhbmXpLq2l5t) هم «ORM عمیق» و هم «DRF کامل» نام گرفته؛ عنوان بازیابی‌شده DRF است. | کارت ORM نیاز به جایگزین دارد؛ پوشش کامل DRF هم هنوز اثبات نشده است. |
| `dj-step-2-r2`، `dj-step-5-r2`، `dj-step-8-r1`، `ds-step-1-r3`، `ds-step-6-r2` | پنج URL، نتیجهٔ جستجوی یوتیوب‌اند، نه منبع انتخاب‌شده. | یک ویدئو/playlist مشخص با مدرس، نسخه و فصل مرتبط انتخاب شود. |
| `ds-step-2-r3` | عنوان SQLBolt + Kaggle SQL و SQL پیشرفته، فقط [SQLBolt](https://sqlbolt.com/) را باز می‌کند؛ فهرستش Window Functions ندارد. | SQL پایه حفظ شود؛ window منبع و تمرین جدا داشته باشد. |
| `ds-step-5-r3` | عنوان Intro + Intermediate، فقط [Intro to ML](https://www.kaggle.com/learn/intro-to-machine-learning) را باز می‌کند. | دو مقصد جدا؛ XGBoost/leakage از این URL به‌تنهایی نتیجه نشود. |
| `fe-step-3-r1` | [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) مرجع زبان است؛ DOM/events/storageِ همین ماژول به منابع Web API نیاز دارند. | منبع زبان حفظ و درس مرورگر تکمیل شود. |
| `fe-step-8` | شش تخصص دارد، اما فقط performance و React Native منبع آموزشی اختصاصی دارند. | برای چهار شاخهٔ دیگر منبع/هدف مستقل انتخاب شود؛ همه به هسته تبدیل نشوند. |

**برچسب «نامرتبط» را برای همهٔ این‌ها یکسان به کار نمی‌برم:** SQLBolt برای SQL پایه خوب است، اما برای ادعای Window کافی نیست؛ صفحهٔ استقرار Django مرتبط است، اما URL مستقیم checklist نیست؛ خطای شبکهٔ یوتیوب هم به معنی حذف ویدئو نیست.

<a id="resources"></a>
## ۳. ممیزی تمام منابع، با محل دقیق و اقدام پیشنهادی

شناسهٔ `...-r1` یعنی اولین کارت منابع آن بخش در آرایهٔ فعلی. وضعیت GET و قضاوت محتوایی دو ستون جدا هستند. لینک‌های پیشنهادی، مرجع‌های مستقیمِ متنیِ بررسی‌شده‌اند؛ الزاماً معادل یک دورهٔ ویدیویی فارسی یا پوشش کامل همهٔ سرفصل‌ها نیستند. URLهای دارای `stable`، `current` یا `latest` باید با نسخهٔ تمرین تطبیق داده شوند؛ در این بررسی بعضی لینک‌های `stable` جنگو به `/en/6.1/` هدایت شدند، درحالی‌که نسخهٔ Django تمرین‌های رودمپ مشخص نشده است.

### توسعه بک‌اند با Django

#### dj-step-1 — پیش‌نیازهای Python و محیط توسعه

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-1-r1` [دوره رایگان پایتون مقدماتی تا پیشرفته (منگارد)](https://www.mongard.ir/courses/python-beginner/) | ۴۰۴ | **خراب — ۴۰۴** — آدرس دوره باز نمی‌شود؛ عنوان «رایگان، مقدماتی تا پیشرفته، OOP و venv» از این مقصد قابل تأیید نیست.  | URL فعلی همان دوره را از ناشر تأیید کن؛ تا آن زمان این کارت قابل اتکا نیست. Python Tutorial جایگزین متنی است، نه ویدیوی فارسی. [منبع پیشنهادی 1](https://docs.python.org/3/tutorial/) |
| `dj-step-1-r2` [پلی‌لیست Python Tutorials از Corey Schafer](https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU) | GET نامشخص؛ اطلاعات وب | **مرتبط؛ بازبینی ویدئو نامشخص** — عنوان Python Tutorials در بازیابی وب تأیید شد؛ پخش، ترتیب درس‌ها و پوشش دقیق OOP/خطا/venv در این بررسی تأیید نشد.  | درس‌های دقیق موردنیاز و نسخهٔ Python را بنویس؛ ادعای «یکی از بهترین‌های دنیا» را به توضیح پوشش تبدیل کن.  |
| `dj-step-1-r3` [تمرین تعاملی پایتون در Kaggle Learn](https://www.kaggle.com/learn/python) | ۲۰۰؛ پوستهٔ JS | **مناسب برای مبانی؛ ناکافی برای تمام مرحله** — GET پوستهٔ JS بود، اما فهرست رسمی بازیابی‌شدهٔ دورهٔ Python شامل syntax، function، condition، list، loop، string/dict و import است؛ OOP، exception و venv فصل صریح این فهرست نیستند. [شاهد ناشر](https://www.kaggle.com/learn/python/hello-python) | برای مبانی نگه دار؛ منبع فصل‌های کلاس، خطا و محیط توسعه را جدا کن. اجرای تمرین‌ها و نیاز به ورود دستی تأیید شوند؛ دیدن فهرست به معنی اجرای همهٔ تمرین‌ها نیست. [منبع پیشنهادی 1](https://docs.python.org/3/tutorial/) |
| `dj-step-1-r4` [مستندات رسمی پایتون (صرفاً جهت رفرنس)](https://docs.python.org/3/tutorial/) | ۲۰۰؛ متن خوانده شد | **مناسب؛ برچسب و مخاطب نیاز به اصلاح دارد** — این URL خودِ Tutorial است، نه فقط مرجع توابع؛ فصل‌های داده، خطا، کلاس و محیط مجازی دارد. ناشر آن را برای افراد دارای آشنایی با برنامه‌نویسی معرفی کرده است.  | به «آموزش رسمی Python، فصل‌های منتخب» تغییر عنوان بده؛ برای تازه‌کار مطلق، همراه تمرین باشد، نه تنها نقطهٔ شروع. [منبع پیشنهادی 1](https://docs.python.org/3/tutorial/) |

#### dj-step-2 — ابزارهای ضروری و مفاهیم پایه وب

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-2-r1` [بازی تعاملی یادگیری Git و Branching](https://learngitbranching.js.org/) | ۲۰۰؛ پوستهٔ JS | **مرتبط؛ محدود به Git branching** — ساختار تعاملی Git را هدف گرفته است؛ جای آموزش نصب Git، گردش کار remote و Pull Request یا Linux/HTTP را نمی‌گیرد. صفحهٔ GET پوستهٔ JS است.  | تمرین branch/merge را مشخص کن؛ وعدهٔ یادگیری «کل Git در دو ساعت» حذف شود. برای گردش کار تیمی GitHub راهنمای جدا بده. [منبع پیشنهادی 1](https://docs.github.com/en/get-started/using-github/hello-world) |
| `dj-step-2-r2` [دوره رایگان آموزش گیت و گیت‌هاب (جادی / مکتب‌خونه)](https://www.youtube.com/results?search_query=jadi+git+tutorial) | GET نامشخص | **منبع انتخاب‌نشده — جستجو** — URL نتیجهٔ جستجوی YouTube است. از آن نمی‌توان فهمید دقیقاً کدام درس، مدرس یا ناشر انتخاب شده؛ نتیجه هم ممکن است تغییر کند.  | با یک ویدئو یا پلی‌لیست دقیق و مدرس مشخص جایگزین کن؛ این URL را به‌عنوان دوره منتشر نکن.  |
| `dj-step-2-r3` [راهنمای تصویری پروتکل HTTP در MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP) | ۲۰۰؛ متن خوانده شد | **مناسب به‌عنوان مرجع** — مرجع HTTP است و به متدها، کدها و header مرتبط است؛ درس Git، Linux، JSON و اصول REST را کامل پوشش نمی‌دهد. «راهنمای تصویری» عنوان دقیقی برای کل این درگاه نیست.  | فصل‌های overview، methods، status و headers را انتخاب و نقش «مرجع» را مشخص کن؛ برای Git و ترمینال منابع مستقل لازم است.  |

#### dj-step-3 — مبانی فریم‌ورک Django

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-3-r1` [پلی‌لیست مدرن Django در کانال BugBytes](https://www.youtube.com/@bugbytes3923) | GET نامشخص | **عمومی؛ عنوان با نوع مقصد نمی‌خواند** — URL کانال BugBytes است، نه یک playlist مشخص. «مدرن بودن» و پوشش همین پنج مبحث از صفحهٔ کانال اثبات نمی‌شود.  | پلی‌لیست واقعی مبانی Django و فصل‌ها را مشخص کن؛ تا آن زمان فقط به‌عنوان کانال تکمیلی معرفی شود.  |
| `dj-step-3-r2` [دوره جامع آموزش جنگو به زبان فارسی](https://www.mongard.ir/courses/django-beginner/) | ۴۰۴ | **خراب — ۴۰۴** — آدرس Django Beginner باز نمی‌شود؛ شروع تا اولین app قابل استفاده نیست.  | دورهٔ فعلی ناشر را تأیید کن یا آموزش پروژه‌محور متنیِ موجود MDN را منبع شروع قرار بده. [منبع پیشنهادی 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django) |
| `dj-step-3-r3` [آموزش گام‌به‌گام جنگو در MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django) | ۲۰۰؛ متن خوانده شد | **مناسب؛ دامنه از این مرحله بزرگ‌تر است** — آموزش پروژه‌محور Django دارد؛ به Python و آشنایی وب نیاز دارد و فقط Views/Routing نیست. شامل models، admin، forms و deployment هم می‌شود.  | درس‌های مربوط به اسکلت پروژه و views را برای مرحلهٔ ۳ مشخص کن؛ بقیه را در مراحل بعد ارجاع بده. توضیح مقایسه‌ایِ بی‌سند «روان‌تر از مستندات رسمی» حذف شود.  |

#### dj-step-4 — پایگاه داده، SQL و قدرت Django ORM

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-4-r1` [یادگیری تعاملی SQL از صفر (SQLBolt)](https://sqlbolt.com/) | ۲۰۰؛ متن خوانده شد | **مناسب برای SQL پایه؛ ناکافی برای PostgreSQL و ORM** — SELECT، JOIN، aggregation و تغییر جداول را در فهرست دارد؛ آموزش پیکربندی PostgreSQL، تراکنش‌های Django یا QuerySet نیست.  | برای SQL پایه نگه دار؛ دو خروجی SQL و ORM را جدا تعریف کن و مرجع queryهای Django بده. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/stable/topics/db/queries/) |
| `dj-step-4-r2` [پلی‌لیست عمیق Django ORM در کانال BugBytes](https://www.youtube.com/playlist?list=PL-2EBeDYMIbTLulc9FSoAXhbmXpLq2l5t) | GET نامشخص؛ اطلاعات وب | **ناهمخوانی مشخص عنوان و مقصد** — همین URL در مرحلهٔ ۶ برای DRF تکرار شده؛ عنوان بازیابی‌شدهٔ ناشر Django REST Framework است. پوشش «عمیق و کامل ORM، aggregation و annotation» اثبات نشده است.  | این کارت را از نقش آموزش اصلی ORM خارج کن؛ یک منبع واقعی ORM یا فصل‌های query و QuerySet جایگزین شود. پخش زندهٔ playlist هنوز تأیید نشده است. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/stable/topics/db/queries/) [منبع پیشنهادی 2](https://docs.djangoproject.com/en/stable/ref/models/querysets/) |
| `dj-step-4-r3` [مرجع مدل‌ها و QuerySet در مستندات جنگو](https://docs.djangoproject.com/en/stable/topics/db/models/) | ۲۰۰؛ متن خوانده شد | **مرتبط اما محدودتر از عنوان** — صفحهٔ Models شامل فیلد، رابطه و ساختار مدل است؛ مرجع کامل متدهای QuerySet در صفحهٔ دیگری قرار دارد.  | عنوان کارت را «مدل‌ها و روابط» کن؛ query guide و QuerySet API به‌صورت جدا و با فصل لازم معرفی شوند. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/stable/topics/db/queries/) [منبع پیشنهادی 2](https://docs.djangoproject.com/en/stable/ref/models/querysets/) |

#### dj-step-5 — مدیریت کاربران، احراز هویت و اصول امنیت وب

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-5-r1` [آزمایشگاه تعاملی امنیت وب (PortSwigger Web Security Academy)](https://portswigger.net/web-security) | ۲۰۰؛ متن خوانده شد | **معتبر و مرتبط؛ بیش از نیاز شروع** — Academy آموزش و lab امنیت وب دارد، اما مسیر بزرگ امنیت و تست نفوذ است؛ کاربر لازم نیست همهٔ موضوعات آن را برای ساخت login تمام کند.  | فقط چند درس مقدماتی XSS، CSRF و SQL injection مرتبط با پروژه انتخاب کن؛ بخش عمیق به تعمیق برود. [منبع پیشنهادی 1](https://portswigger.net/web-security/learning-paths) |
| `dj-step-5-r2` [آموزش Custom User Model و احراز هویت در جنگو](https://www.youtube.com/results?search_query=django+custom+user+model+bugbytes) | GET نامشخص | **منبع انتخاب‌نشده — جستجو** — جستجوی custom user model، آموزش مشخص ورود با ایمیل یا شماره موبایل را تضمین نمی‌کند.  | یک درس مشخص انتخاب کن؛ مرجع مستقیم custom user برای پیاده‌سازی بر پایهٔ AbstractUser اضافه شود. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/5.2/topics/auth/customizing/) |
| `dj-step-5-r3` [مستندات امنیت در Django](https://docs.djangoproject.com/en/stable/topics/security/) | ۲۰۰؛ متن خوانده شد | **مناسب برای امنیت؛ کمبود منابع auth پابرجاست** — صفحهٔ Security حفاظت‌های Django را توضیح می‌دهد؛ آموزش کامل custom user، session و permissions نیست.  | نگه دار؛ فصل‌های auth/session/permission را جدا بده و مرزهای حفاظت پیش‌فرض را توضیح بده. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/5.2/topics/auth/customizing/) |

#### dj-step-6 — ساخت API حرفه‌ای با Django REST Framework

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-6-r1` [پلی‌لیست کامل آموزش Django REST Framework (کانال BugBytes)](https://www.youtube.com/playlist?list=PL-2EBeDYMIbTLulc9FSoAXhbmXpLq2l5t) | GET نامشخص؛ اطلاعات وب | **مرتبط در سطح عنوان؛ کامل‌بودن تأیید نشده** — عنوان بازیابی‌شده DRF با این مرحله می‌خواند و استفادهٔ آن اینجا از مرحلهٔ ORM منطقی‌تر است؛ اما فهرست، نسخه و پوشش JWT یا drf-spectacular بررسی کامل نشده است.  | عنوان «صفر تا صد با استاندارد روز» را حذف کن؛ سرفصل و نسخهٔ قابل تأیید ثبت شود. لینک تکراریِ مرحلهٔ ORM اصلاح شود.  |
| `dj-step-6-r2` [دوره فارسی آموزش Django REST Framework (منگارد)](https://www.mongard.ir/courses/django-rest-framework/) | ۴۰۴ | **خراب — ۴۰۴** — URL دورهٔ Django REST Framework منگارد ۴۰۴ است.  | آدرس واقعی دوره را تأیید کن؛ Quickstart موجود فقط راه شروع متنی است و جای ویدئوی فارسی را به‌طور هم‌ارز نمی‌گیرد. [منبع پیشنهادی 1](https://www.django-rest-framework.org/tutorial/quickstart/) |
| `dj-step-6-r3` [مستندات رسمی و Quickstart فریم‌ورک DRF](https://www.django-rest-framework.org/tutorial/quickstart/) | GET نامشخص؛ اطلاعات وب | **مناسب برای شروع؛ ناکافی برای دامنهٔ مرحله** — Quickstart نمونهٔ serializer، ViewSet، router، pagination و permission ابتدایی دارد؛ آموزش جامع JWT، custom validation، filtering و OpenAPI نیست.  | برای شروع نگه دار و به فصل‌های مستقیم permissions و authentication متصل کن؛ SimpleJWT و drf-spectacular منابع مخصوص خودشان می‌خواهند. [منبع پیشنهادی 1](https://www.django-rest-framework.org/api-guide/permissions/) [منبع پیشنهادی 2](https://www.django-rest-framework.org/api-guide/authentication/) |

#### dj-step-7 — تست‌نویسی، بهینه‌سازی کوئری و پردازش پس‌زمینه

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-7-r1` [آموزش Celery، Redis و بهینه‌سازی در جنگو (BugBytes)](https://www.youtube.com/@bugbytes3923/videos) | GET نامشخص | **عمومی؛ پوشش معلوم نیست** — صفحهٔ Videos کانال است؛ منبع مستقیم Celery/Redis/Docker یا N+1 محسوب نمی‌شود.  | به درس‌های مشخصِ هر زیرواحد تقسیم کن. تست و query optimization از task queue جدا شوند.  |
| `dj-step-7-r2` [آموزش‌های کاربردی Django در Real Python](https://realpython.com/tutorials/django/) | ۲۰۰؛ متن خوانده شد | **مرتبط؛ فهرست مقاله، نه مستندات کامل** — مجموعهٔ مقالات و حتی podcastهای Django است؛ یک curriculum مرتب برای پنج موضوع این مرحله نیست و همهٔ محتوا الزاماً دسترسی یکسان ندارد.  | عنوان نوع را «آموزش متنی/مجموعه مقاله» کن؛ مقالهٔ مشخص با تاریخ و دسترسی معلوم انتخاب شود. برای N+1 مرجع مستقیم بده. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/stable/ref/models/querysets/) |

#### dj-step-8 — کانتینرسازی با Docker و استقرار در محیط Production

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `dj-step-8-r1` [آموزش Docker برای برنامه‌نویسان پایتون و جنگو](https://www.youtube.com/results?search_query=dockerize+django+postgres+nginx) | GET نامشخص | **منبع انتخاب‌نشده — جستجو** — URL جستجوی dockerize Django است؛ ترکیب نسخه‌ها و اینکه کدام ویدئو امن و قابل اجراست معلوم نیست.  | یک آموزش نسخه‌دار انتخاب کن؛ Docker را ابتدا با مسیر رسمی تمرین کن و بعد روی پروژهٔ Django اجرا کن. [منبع پیشنهادی 1](https://docs.docker.com/get-started/tutorials/run-an-app/) |
| `dj-step-8-r2` [چک‌لیست رسمی Deployment در مستندات جنگو](https://docs.djangoproject.com/en/stable/howto/deployment/) | ۲۰۰؛ متن خوانده شد | **مرتبط؛ مقصد دقیقِ عنوان نیست** — این URL How to deploy Django است، نه خود Deployment checklist. صفحهٔ اصلی به checklist لینک می‌دهد؛ بنابراین منبع نامرتبط نیست، ولی عنوان دقیق نیست.  | URL را به checklist/ تغییر بده؛ توضیح بده این منبع آموزش کامل Docker Compose یا Nginx نیست. [منبع پیشنهادی 1](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/) |
### علم داده و هوش مصنوعی

#### ds-step-1 — پایتون کاربردی برای دیتا و ابزارهای محیط کار

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-1-r1` [مینی‌دوره تعاملی پایتون در Kaggle Learn](https://www.kaggle.com/learn/python) | ۲۰۰؛ پوستهٔ JS | **مناسب برای مبانی؛ ناکافی برای تمام مرحله** — GET پوستهٔ JS بود، اما فهرست رسمی بازیابی‌شدهٔ دورهٔ Python شامل syntax، function، condition، list، loop، string/dict و import است؛ OOP، exception و venv فصل صریح این فهرست نیستند. [شاهد ناشر](https://www.kaggle.com/learn/python/hello-python) | برای مبانی نگه دار؛ منبع فصل‌های کلاس، خطا و محیط توسعه را جدا کن. اجرای تمرین‌ها و نیاز به ورود دستی تأیید شوند؛ دیدن فهرست به معنی اجرای همهٔ تمرین‌ها نیست. [منبع پیشنهادی 1](https://docs.python.org/3/tutorial/) |
| `ds-step-1-r2` [بازی تعاملی یادگیری Git](https://learngitbranching.js.org/) | ۲۰۰؛ پوستهٔ JS | **مرتبط؛ فقط بخش Git** — Git branching به نیاز کنترل نسخه می‌خورد؛ آموزش Conda، venv یا کار با notebook نیست.  | تمرین commit/branch منتخب و منبع محیط مجازی را جدا کن؛ بازی در مرورگر نیاز به اجرای JS دارد.  |
| `ds-step-1-r3` [آموزش کار با Google Colab و Jupyter به زبان فارسی](https://www.youtube.com/results?search_query=google+colab+persian+tutorial) | GET نامشخص | **منبع انتخاب‌نشده — جستجو** — عبارت جستجو، آموزش مشخص Colab یا Jupyter را انتخاب نکرده است.  | یک درس یا راهنمای رسمی مشخص برای اجرای notebook، ذخیره و نصب کتابخانه انتخاب کن؛ GPU را پیش‌نیاز شروع قرار نده.  |

#### ds-step-2 — کار با داده، پاک‌سازی و تسلط بر SQL

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-2-r1` [مینی‌دوره تعاملی Pandas در کگل](https://www.kaggle.com/learn/pandas) | ۲۰۰؛ پوستهٔ JS | **مرتبط با Pandas؛ پوشش فعلی درس‌ها تأیید نشد** — GET فقط عنوان دوره را نشان داد. این کارت، منبع مستقل NumPy یا SQL نیست.  | تمرین‌های منتخب course را دستی بررسی کن؛ راهنمای رسمی Pandas برای خواندن فایل، انتخاب، گروه‌بندی و merge افزوده شود. [منبع پیشنهادی 1](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) |
| `ds-step-2-r2` [مینی‌دوره Data Cleaning در کگل](https://www.kaggle.com/learn/data-cleaning) | ۲۰۰؛ پوستهٔ JS | **مرتبط با پاک‌سازی؛ کفایت همهٔ موارد معلوم نیست** — فقط پوستهٔ صفحه قابل خواندن بود. پوشش outlierها، تصمیم آماری حذف داده و pipeline بدون نشت داده از این مشاهده تأیید نشده است.  | فهرست درس‌ها را مشخص کن؛ تمیزکاری dtype/missing/duplicate از تصمیم مدل‌سازی جدا شود. قواعد leakage را از مرجع مرتبط بخوان. [منبع پیشنهادی 1](https://scikit-learn.org/stable/common_pitfalls.html) |
| `ds-step-2-r3` [آموزش تعاملی SQL در SQLBolt + کگل SQL](https://sqlbolt.com/) | ۲۰۰؛ متن خوانده شد | **پوشش ناقص و عنوان ناسازگار** — URL فقط SQLBolt است؛ کارت هم Kaggle SQL و هم سطح پیشرفته را وعده می‌دهد. فهرست SQLBolt درس مشخص Window Functions ندارد.  | عنوان را به SQL پایه محدود کن؛ window function منبع و تمرین مستقل داشته باشد. SQLBolt را حذف نکن؛ برای پایه مناسب است. [منبع پیشنهادی 1](https://www.postgresql.org/docs/current/tutorial-window.html) |
| `ds-step-2-r4` [تمرین‌های تحلیل داده و پایتون در کوئرا (Quera)](https://quera.org/) | ۲۰۰؛ متن خوانده شد | **مقصد عمومی؛ تمرین انتخاب نشده** — quera.org صفحهٔ اصلی خدمات، یادگیری و استخدام است؛ تمرین تحلیل دادهٔ مشخص با داوری را باز نمی‌کند.  | URL تمرین یا مجموعهٔ مشخص با پیش‌نیاز و هدف بده؛ این صفحه به‌تنهایی نباید کارت «حل سؤال» باشد.  |

#### ds-step-3 — تحلیل اکتشافی (EDA)، بصری‌سازی و آمار کاربردی

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-3-r1` [کانال یوتیوب StatQuest with Josh Starmer (فوق‌العاده!)](https://www.youtube.com/@statquest) | GET نامشخص | **کانال عمومی؛ قابل دقیق‌تر شدن** — صفحهٔ کانال، درس آمار منتخب نیست. فهرست رسمی مدرس درس‌های توزیع، آزمون فرض، p-value و confidence interval را جدا فهرست کرده است.  | به فهرست رسمی و سپس ۲ تا ۴ درس مرتبط ارجاع بده؛ کل کانال الزام نیست و آموزش تمام KPI/EDA هم نیست. [منبع پیشنهادی 1](https://statquest.org/video_index.html) |
| `ds-step-3-r2` [دوره رایگان آمار و احتمال در Khan Academy](https://www.khanacademy.org/math/statistics-probability) | ۲۰۰؛ پوستهٔ JS | **مرتبط با آمار؛ جزئیات دسترسی نامشخص** — عنوان/پوستهٔ Khan Academy باز شد ولی اجرای درس و تمرین در این بررسی قابل خواندن نبود. کل مسیر آمار احتمال از نیاز همین پروژه بزرگ‌تر است.  | واحدهای توصیف داده، احتمال پایه، نمونه‌گیری و استنباط را انتخاب کن؛ اجرای تمرین، ورود و زبان دستی بررسی شوند.  |
| `ds-step-3-r3` [مینی‌دوره Data Visualization در Kaggle](https://www.kaggle.com/learn/data-visualization) | ۲۰۰؛ پوستهٔ JS | **مرتبط با مصورسازی؛ پوشش جزئی تأیید نشده** — نام دورهٔ Data Visualization قابل بازیابی بود؛ از پوسته نمی‌توان آموزش هر سه Matplotlib، Seaborn و Plotly یا A/B Testing را نتیجه گرفت.  | برای یک ابزار نمودار و انتخاب نمودار مناسب استفاده شود؛ Plotly الزام مشترک نباشد و منابع آمار جدا بمانند.  |

#### ds-step-4 — ریاضیات شهودی ماشین لرنینگ (Just-in-Time Math)

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-4-r1` [پلی‌لیست انیمیشنی Essence of Linear Algebra از 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) | GET نامشخص؛ اطلاعات وب | **عنوان مرتبط تأیید شد؛ پخش کامل بازبینی نشده** — عنوان Essence of linear algebra در بازیابی خود YouTube با موضوع این مرحله می‌خواند. پخش تک‌تک ویدئوها و تمرین عملی یا کفایت آن برای کل مرحله تأیید نشده است.  | درس‌های بردار، ضرب و تبدیل خطی انتخاب شوند؛ eigenvalue را برای مسیر PCA به تعمیق منتقل کن. فهرست رسمی سازنده برای تطبیق درس‌ها موجود است. [منبع پیشنهادی 1](https://www.3blue1brown.com/topics/linear-algebra) |
| `ds-step-4-r2` [پلی‌لیست انیمیشنی Essence of Calculus از 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) | GET نامشخص؛ اطلاعات وب | **عنوان مرتبط تأیید شد؛ پخش کامل بازبینی نشده** — عنوان Essence of calculus در بازیابی خود YouTube با موضوع این مرحله می‌خواند. پخش تک‌تک ویدئوها و تمرین عملی یا کفایت آن برای کل مرحله تأیید نشده است.  | مشتق و شهود زنجیره را انتخاب کن؛ الگوریتم descent یک تمرین جدا لازم دارد. وضعیت playlist در یوتیوب بازبینی دستی شود. [منبع پیشنهادی 1](https://www.3blue1brown.com/topics/calculus) |

#### ds-step-5 — یادگیری ماشین کلاسیک و مهندسی ویژگی

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-5-r1` [دوره معروف Machine Learning Specialization از Andrew Ng](https://www.coursera.org/specializations/machine-learning-introduction) | ۲۰۰؛ متن خوانده شد | **مناسب؛ معرفی پلتفرم و دامنه نیاز به اصلاح** — صفحهٔ Coursera یک specialization سه‌دوره‌ای است؛ URL یوتیوب نیست. عنوان دوره درست است، ولی کل برنامه بزرگ‌تر از یک مرحله و دسترسی کامل/گواهی لزوماً رایگان نیست.  | platform را Coursera بنویس؛ دوره/فصل منتخب و شرایط دسترسی مشخص شود. آن را پوشش خودکار تمام مدل‌های جدول، معیارها یا PCA ندان.  |
| `ds-step-5-r2` [پلی‌لیست Machine Learning در کانال StatQuest](https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF) | GET نامشخص؛ اطلاعات وب | **مرتبط؛ انتساب playlist تأیید شد** — همین شناسه از فهرست رسمی StatQuest به‌عنوان Machine Learning لینک شده است؛ پخش تک‌تک ویدئوها و نسخهٔ کدها تأیید نشده است. [شاهد ناشر](https://statquest.org/video_index.html) | برای شهود مدل‌ها و evaluation نگه دار؛ ویدئوهای baseline، cross-validation و confusion matrix انتخاب شوند و تمرین کدنویسی جدا باشد. [منبع پیشنهادی 1](https://statquest.org/video_index.html) |
| `ds-step-5-r3` [مینی‌دوره‌های Intro to ML و Intermediate ML در کگل](https://www.kaggle.com/learn/intro-to-machine-learning) | ۲۰۰؛ پوستهٔ JS | **عنوان و پوشش بیش از مقصد** — URL فقط Intro to ML است. فهرست بازیابی‌شدهٔ دورهٔ مقدماتی شامل اعتبارسنجی و random forest است؛ کارت، Intermediate، XGBoost و جلوگیری از leakage را هم یکجا وعده می‌دهد. [شاهد ناشر](https://www.kaggle.com/learn/intro-to-machine-learning?s=09) | دو دوره کارت مستقل داشته باشند؛ برای leakage و pipeline مرجع مشخص بده. مقصد فعلی را دورهٔ پیشرفته معرفی نکن. [منبع پیشنهادی 1](https://scikit-learn.org/stable/common_pitfalls.html) |

#### ds-step-6 — استقرار مدل و تبدیل پروژه به محصول (Model Deployment)

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-6-r1` [مستندات و گالری پروژه‌های Streamlit](https://streamlit.io/) | ۲۰۰؛ متن خوانده شد | **مرتبط با محصول؛ مقصد و نوع منبع دقیق نیست** — streamlit.io صفحهٔ محصول و نمایش قابلیت‌هاست، نه راهنمای مرحله‌ای یا محیط تمرین تعاملیِ مشخص.  | برای یادگیری به Get started مستندات لینک بده؛ عنوان نوع «آموزش متنی/مستندات» باشد. [منبع پیشنهادی 1](https://docs.streamlit.io/get-started) |
| `ds-step-6-r2` [آموزش دیپلوی مدل ماشین لرنینگ با FastAPI](https://www.youtube.com/results?search_query=deploy+machine+learning+model+fastapi) | GET نامشخص | **منبع انتخاب‌نشده — جستجو** — جستجوی YouTube نه آموزش مشخص FastAPI را تضمین می‌کند نه استقرار مدل و قرارداد ورودی را.  | به tutorial رسمی برای پایه وصل کن و تمرین بارگذاری مدل و اعتبارسنجی ورودی را جدا بنویس؛ deployment واقعی خروجی جداست. [منبع پیشنهادی 1](https://fastapi.tiangolo.com/tutorial/) [منبع پیشنهادی 2](https://scikit-learn.org/stable/model_persistence.html) |

#### ds-step-7 — شاخه‌های پیشرفته هوش مصنوعی (انتخابی بر اساس علاقه)

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `ds-step-7-r1` [دوره عملی Deep Learning برای کدنویس‌ها (fast.ai)](https://course.fast.ai/) | ۲۰۰؛ متن خوانده شد | **مناسب برای شاخهٔ DL؛ پیش‌نیاز و نسخه لازم است** — صفحه دورهٔ Practical Deep Learning for Coders 2022 را معرفی می‌کند؛ تجربهٔ کدنویسی می‌خواهد و fastai را بر پایهٔ PyTorch به کار می‌برد. جدید نبودن سال، به‌تنهایی بی‌ارزش بودن مفاهیم نیست.  | برای شاخهٔ انتخابی DL نگه دار؛ نسخهٔ اجرا و کتابخانه‌ها و تمرین مشخص لازم است. آن را آموزش پایهٔ مستقل تمام PyTorch، RAG و سری زمانی معرفی نکن.  |
| `ds-step-7-r2` [دوره رایگان NLP و LLM در Hugging Face](https://huggingface.co/learn/nlp-course/) | ۲۰۰؛ متن خوانده شد | **مرتبط؛ آدرس قدیمی با تغییر مسیر سالم** — nlp-course به LLM Course فصل ۱ هدایت می‌شود. ناشر Python خوب و ترجیحاً دورهٔ مقدماتی DL را پیش‌نیاز می‌داند؛ موضوعات آن جای یک منبع کامل سری زمانی یا سیستم RAG محصولی نیست.  | URL canonical، نقش «دورهٔ متنی همراه کد» و فصل‌های انتخابی مشخص شود؛ برای RAG، retrieval/evaluation و منبع مستقل لازم است. [منبع پیشنهادی 1](https://huggingface.co/learn/llm-course/chapter1/1) |
### لینوکس، سیستم‌عامل و Docker برای برنامه‌نویس‌ها

#### lx-step-1 — مفاهیم درس سیستم‌عامل در دنیای واقعی

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `lx-step-1-r1` [دوره رایگان لینوکس و مفاهیم سیستم‌عامل (جادی - LPIC-1)](https://www.youtube.com/playlist?list=PL-tKrPVkKKE0k_1812_c2-tT3V7G2M8sA) | GET نامشخص | **وضعیت playlist نامشخص؛ تناسب جزئی** — منبع با عنوان LPIC-1 مدیریت لینوکس معرفی شده، اما مرحله دربارهٔ thread، race، deadlock و stack/heap است؛ این هم‌ترازی از عنوان یا فهرست LPIC اثبات نمی‌شود.  | درس‌های واقعی playlist را تأیید کن؛ برای مفاهیم OS، فصل منتخب OSTEP مناسب‌تر است. LPIC را به محیط و ترمینال منتقل کن. [منبع پیشنهادی 1](https://pages.cs.wisc.edu/~remzi/OSTEP/) [منبع پیشنهادی 2](https://linux1st.com/) |

#### lx-step-2 — تسلط بر ترمینال لینوکس و اسکریپت‌نویسی Bash

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `lx-step-2-r1` [سایت تعاملی Linux Journey](https://linuxjourney.com/) | ۴۰۳ در GET؛ صفحهٔ جانشین با وب خوانده شد | **تغییر مسیر سالم؛ دسترسی مستقیم محدود** — linuxjourney.com به LabEx می‌رود. GET این محیط ۴۰۳ شد، ولی صفحهٔ رسمی جانشین با ابزار وب خوانده شد. درس‌های command line، permissions و processes دارد.  | لینک canonical را ثبت کن و فصل‌های منتخب بده؛ ۴۰۳ را با حذف منبع اشتباه نگیر. این منبع Bash scripting کامل نیست. [منبع پیشنهادی 1](https://labex.io/linuxjourney) |
| `lx-step-2-r2` [بازی هکری OverTheWire: Bandit برای تمرین لینوکس و SSH](https://overthewire.org/wargames/bandit/) | ۲۰۰؛ متن خوانده شد | **مناسب برای تمرین SSH/CLI؛ همهٔ مرحله را پوشش نمی‌دهد** — Bandit بازی مرحله‌ای برای تازه‌کار با اتصال SSH است. آموزش systemd/journalctl یا اسکریپت کامل از این صفحه نتیجه نمی‌شود.  | سطح‌های ابتدایی و نیاز به SSH client را بنویس؛ «تعاملی» به معنی ترمینال آماده در مرورگر نیست. نگه دار به‌عنوان تمرین انتخابی.  |

#### lx-step-3 — کانتینرسازی با Docker و Docker Compose

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `lx-step-3-r1` [آزمایشگاه رایگان Play with Docker در مرورگر](https://labs.play-with-docker.com/) | ۲۰۰؛ متن خوانده شد | **بازنشسته — ۲۰۰ گمراه‌کننده است** — ناشر اعلام کرده Play with Docker از ۱ مارس ۲۰۲۶ در دسترس نخواهد بود. صفحه باز می‌شود، ولی معرفی آزمایشگاه فعال قابل اتکا نیست. [شاهد ناشر](https://labs.play-with-docker.com/) | این کارت به‌عنوان آزمایشگاه فعال حذف/جایگزین شود؛ Docker Docs کارگاه محلی دارد و نباید بدون تأیید آن را آزمایشگاه مرورگری نامید. [منبع پیشنهادی 1](https://docs.docker.com/get-started/tutorials/run-an-app/) |
| `lx-step-3-r2` [دوره ویدیویی آموزش Docker از صفر (TechWorld with Nana)](https://www.youtube.com/watch?v=3c-iBn73dDE) | GET نامشخص | **ارتباط عنوانی؛ وضعیت و پوشش ویدئو نامشخص** — URL ویدئوی مشخص است، اما درخواست وب ۴۲۹ و درخواست مستقیم خطای شبکه داشت. نسخه، مدرس، سرفصل و اجرای Compose از این بررسی تأیید نشد.  | منبع را صرفاً به‌دلیل خطای شبکه خراب اعلام نکن؛ metadata/chapters را دستی تأیید کن. تا آن زمان کارگاه رسمی راه شروع قابل اتکاتر است. [منبع پیشنهادی 1](https://docs.docker.com/get-started/tutorials/run-an-app/) |
### توسعهٔ فرانت‌اند

#### fe-step-0 — پایه‌های وب

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-0-r1` [وب چطور کار می‌کند؟](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) | ۲۰۰؛ متن خوانده شد | **مناسب برای مدل ذهنی شبکه؛ پوشش رندر ناقص** — How the web works دربارهٔ client/server، DNS و HTTP است؛ خود صفحه می‌گوید رندر مرورگر در مقالهٔ دیگری توضیح داده شده است.  | برای شبکه نگه دار؛ How browsers load websites را برای DOM/CSSOM و نمایش صفحه اضافه کن. [منبع پیشنهادی 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) |
| `fe-step-0-r2` [راهنمای HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | ۲۰۰؛ متن خوانده شد | **مناسب به‌عنوان مرجع HTTP** — درگاه HTTP برای هدر، cookie، CORS و status مرتبط است؛ کل TLS، CDN، rendering و package manager این ماژول را آموزش نمی‌دهد.  | فصل‌های پایه را مشخص کن؛ آشنایی مفهومی کافی است و خواندن کل مرجع پیش از HTML لازم نیست.  |

#### fe-step-1 — HTML و CSS

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-1-r1` [ساختار محتوا با HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) | ۲۰۰؛ متن خوانده شد | **مناسب؛ فرم نیاز به منبع صریح دارد** — Structuring content آموزش معنایی HTML و بخش‌بندی است؛ اعتبارسنجی فرم، label، خطای ورودی و رفتار صفحه‌کلید باید با درس فرم تکمیل شود.  | نگه دار؛ برای فرمِ تمرین، WAI Forms و تمرین label/focus اضافه کن. [منبع پیشنهادی 1](https://www.w3.org/WAI/tutorials/forms/) |
| `fe-step-1-r2` [چیدمان با CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout) | ۲۰۰؛ متن خوانده شد | **مرتبط با layout؛ کل CSS پایه نیست** — CSS layout، Flex/Grid/positioning و responsive را هدف دارد؛ مبانی cascade، specificity و مدل جعبه‌ای همه از همین URL به‌عنوان درس واحد نتیجه نمی‌شوند.  | Styling basics قبل/کنار layout قرار بگیرد؛ مرحله نباید مستقیماً از HTML به Grid بپرد. [منبع پیشنهادی 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) |
| `fe-step-1-r3` [آموزش‌های دسترس‌پذیری وب](https://www.w3.org/WAI/tutorials/) | ۲۰۰؛ متن خوانده شد | **مناسب و مستقیم برای a11y** — WAI Tutorials آموزش‌های ساختار، فرم، تصویر و دیگر موضوعات دسترس‌پذیری را دارد؛ جای تمرین عملی focus/keyboard یا آزمون کاربر را نمی‌گیرد.  | صفحهٔ forms و ساختار معنایی را برای تمرین مشخص کن؛ همهٔ WCAG یا ARIA پیشرفته الزام شروع نیست. [منبع پیشنهادی 1](https://www.w3.org/WAI/tutorials/forms/) |

#### fe-step-2 — ابزارهای توسعه

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-2-r1` [اولین مخزن، branch و pull request](https://docs.github.com/en/get-started/using-github/hello-world) | ۲۰۰؛ متن خوانده شد | **مناسب برای گردش کار ابتدایی؛ conflict ناقص** — Hello World ساخت مخزن، branch، commit، PR و merge در GitHub را دارد؛ آموزش کامل CLI و حل conflict محلی نیست.  | نگه دار؛ یک تمرین conflict مستقل و راهنمای فرمان‌های Git به آن متصل کن.  |
| `fe-step-2-r2` [راهنمای DevTools](https://developer.chrome.com/docs/devtools/) | ۲۰۰؛ متن خوانده شد | **مرتبط؛ درگاه ابزارهاست** — صفحهٔ اصلی DevTools راه‌های ورود به Elements، Network، debugging و performance را نشان می‌دهد، نه یک درس مرتب با خروجی مشخص.  | برای مشکل layout روی Elements و برای خطای درخواست روی Network لینک دقیق بده؛ Performance عمیق را به انتشار منتقل کن.  |
| `fe-step-2-r3` [شروع کار با Vite](https://vite.dev/guide/) | ۲۰۰؛ متن خوانده شد | **مناسب برای راه‌اندازی؛ npm کامل نیست** — Vite guide ساخت پروژه و فرمان‌ها را دارد و نیاز نسخهٔ Node را مشخص می‌کند؛ آموزش همهٔ package management یا خطایابی stack trace نیست.  | یک template ساده و نسخهٔ سازگار Node انتخاب کن؛ package.json، scripts و lockfile در تمرین توضیح داده شوند.  |

#### fe-step-3 — JavaScript

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-3-r1` [راهنمای JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | ۲۰۰؛ متن خوانده شد | **منبع زبان مناسب؛ پوشش browser API ناقص** — JavaScript Guide دربارهٔ زبان، توابع، scope، collection، Promise و module است؛ DOM، event delegation و Web Storage در APIهای وب توضیح داده می‌شوند.  | نگه دار و درس Dynamic scripting و Web Storage را برای بخش‌های مرورگر اضافه کن؛ رفرنس زبان را آموزش کامل مرورگر نام نده. [منبع پیشنهادی 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) [منبع پیشنهادی 2](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) |
| `fe-step-3-r2` [کار با Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | ۲۰۰؛ متن خوانده شد | **مناسب و مستقیم برای fetch** — ساخت درخواست، پاسخ و لغو درخواست را توضیح می‌دهد؛ فرم چندمرحله‌ای، DOM و state تماماً در این مقاله نیستند.  | در تمرین response.ok، خطای شبکه/HTTP، loading و retry را بررسی کن؛ برای DOM از منبع مستقل استفاده شود. [منبع پیشنهادی 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) |

#### fe-step-4 — TypeScript

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-4-r1` [کتاب راهنمای TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) | ۲۰۰؛ متن خوانده شد | **مناسب؛ نقطهٔ ورودی کتاب راهنماست** — صفحهٔ intro هدف و ساختار Handbook را توضیح و به فصل‌ها هدایت می‌کند؛ برای تک‌تک نوع‌ها باید فصل منتخب تعیین شود.  | Everyday types، narrowing و generics ساده انتخاب شوند؛ بخش props کنار React و typeهای پیشرفته اختیاری باشد.  |
| `fe-step-4-r2` [کاربرد پایهٔ Zod](https://zod.dev/basics) | ۲۰۰؛ متن خوانده شد | **مناسب برای runtime validation** — Basic usage تعریف schema، parse/safeParse، خطا و infer را پوشش می‌دهد؛ خود TypeScript را آموزش نمی‌دهد و الزاماً بهترین انتخاب برای هر پروژه نیست.  | برای نمونهٔ اعتبارسنجی API نگه دار؛ هدف «اعتبارسنجی مرز» باشد، نه اجبار به یک کتابخانه در تمام پروژه‌ها.  |

#### fe-step-5 — React

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-5-r1` [آموزش رسمی React](https://react.dev/learn) | ۲۰۰؛ متن خوانده شد | **مناسب؛ Quick Start کل ماژول نیست** — مقصد اولیه Quick Start است؛ برای effects، context، refs، data fetching و معماری state باید فصل‌های بعدی Learn انتخاب شوند.  | به Managing State و You Might Not Need an Effect لینک مستقیم بده؛ برای URL/server state به ماژول اپلیکیشن ارجاع بده. [منبع پیشنهادی 1](https://react.dev/learn/managing-state) [منبع پیشنهادی 2](https://react.dev/learn/you-might-not-need-an-effect) |
| `fe-step-5-r2` [تست رفتار کامپوننت‌های React](https://testing-library.com/docs/react-testing-library/intro/) | ۲۰۰؛ متن خوانده شد | **مرتبط؛ معرفی library است** — صفحهٔ معرفی Testing Library است؛ راه‌اندازی Vitest، ساخت اولین تست، mocking و آزمون async را به‌تنهایی آموزش نمی‌دهد.  | Vitest Getting Started و یک تست رفتاری فرم با query قابل‌دسترس اضافه شود. [منبع پیشنهادی 1](https://vitest.dev/guide/) |

#### fe-step-6 — ساخت اپلیکیشن واقعی

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-6-r1` [مدیریت server state با TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) | ۲۰۰؛ متن خوانده شد | **مناسب برای server state؛ تمام معماری اپ نیست** — Overview انگیزه و نمونهٔ آغاز TanStack Query را دارد؛ routing، auth، Zustand، Axios و تمام مدیریت فرم را پوشش نمی‌دهد.  | Query برای دادهٔ سرور نگه دار؛ fetch یا Axios یکی انتخاب شود. برای router و mutation/optimistic موضوعات جدا مشخص شوند. [منبع پیشنهادی 1](https://reactrouter.com/start/declarative/routing) |
| `fe-step-6-r2` [فرم با React Hook Form](https://react-hook-form.com/get-started) | ۲۰۰؛ متن خوانده شد | **مناسب و مرتبط با فرم** — Get Started ثبت فیلد، validation، errors، controlled input و schema validation را دارد؛ قرارداد API و auth باید جدا تمرین شود.  | برای فرم انتخاب مناسبی است؛ submit async، خطای سرور، retry و keyboard را در معیار پایان بنویس.  |
| `fe-step-6-r3` [شبیه‌سازی API با MSW](https://mswjs.io/docs/) | ۲۰۰؛ متن خوانده شد | **مناسب برای mocking؛ معرفی کافی نیست** — صفحهٔ Introduction است. MSW پاسخ API را شبیه‌سازی می‌کند؛ assertion، test runner، پوشش تست و راه‌اندازی کامل خودشکار نیست.  | راهنمای integration با runner و handlerهای موفق/خطا اضافه شود؛ کنار Testing Library/Vitest بیاید. [منبع پیشنهادی 1](https://vitest.dev/guide/) |

#### fe-step-7 — Next.js و انتشار محصول

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-7-r1` [شروع کار با App Router](https://nextjs.org/docs/app/getting-started) | ۲۰۰؛ متن خوانده شد | **مناسب؛ به نسخه و فصل‌ها وابسته است** — Getting Started درگاه آموزش App Router است؛ شیوهٔ caching و server/client boundary باید از مستندات نسخهٔ پروژه خوانده شود. فرض یک رفتار ثابت برای همهٔ Nextها درست نیست.  | نسخهٔ تمرین را ثبت و فصل‌های routing، data fetching، caching، metadata و deployment را انتخاب کن؛ امنیت و CI منابع جدا می‌خواهند.  |
| `fe-step-7-r2` [آموزش عملکرد وب](https://web.dev/learn/performance) | ۲۰۰؛ متن خوانده شد | **مناسب برای مبانی performance؛ سنجش کامل نیست** — دوره critical path، منابع، تصاویر، فونت و code splitting دارد؛ یک امتیاز Lighthouse یا خواندن این فهرست، تجربهٔ کاربران واقعی یا SEO/security را ثابت نمی‌کند.  | برای هر بهینه‌سازی baseline و شرایط اندازه‌گیری ثبت کن؛ معیار نتیجه، بهبود اندازه‌پذیر باشد نه نمرهٔ تضمینی.  |
| `fe-step-7-r3` [شروع تست E2E با Playwright](https://playwright.dev/docs/intro) | ۲۰۰؛ متن خوانده شد | **مناسب برای نصب؛ نوشتن تست ناقص** — مقصد Installation است: نصب و اجرای مثال را پوشش می‌دهد؛ طراحی تست حیاتی، locator و assertion در Writing tests آمده‌اند.  | لینک آموزش Writing tests را کنار آن بگذار و جریان حیاتی مشخص بده؛ صرف سبزشدن مثال نصب معیار پایان نباشد. [منبع پیشنهادی 1](https://playwright.dev/docs/writing-tests) |

#### fe-step-8 — انتخاب مسیر تخصصی (اختیاری)

| شناسه و منبع فعلی | وضعیت دسترسی | حکم و دامنهٔ واقعی | اقدام مشخص |
| --- | --- | --- | --- |
| `fe-step-8-r1` [آموزش عملکرد وب](https://web.dev/learn/performance) | ۲۰۰؛ متن خوانده شد | **مرتبط با یکی از شش شاخه؛ پوشش جمعی ندارد** — Learn Performance به شاخهٔ عملکرد می‌خورد؛ منبع Design System، Fullstack، AI UI، i18n و privacy نیست. تکرار URL از ماژول ۷ ایراد فنی نیست.  | برای عملکرد فصل عمیق‌تر/اندازه‌گیری انتخاب شود؛ چهار شاخهٔ بدون مرجع به منبع اختصاصی نیاز دارند.  |
| `fe-step-8-r2` [شروع React Native](https://reactnative.dev/docs/getting-started) | ۲۰۰؛ متن خوانده شد | **مناسب برای آشنایی React Native؛ setup جداست** — صفحه خود اعلام می‌کند دستور شروع و راه‌اندازی به بخش دیگری منتقل شده است؛ فعلاً مقدمه و نمونهٔ Snack دارد.  | برای ارزیابی علاقه نگه دار؛ اگر هدف اجرای پروژه است به راه‌اندازی محیط و اولین app هدایت کن، نه فقط عنوان getting-started قدیمی.  |

#### سه رفرنس الهام‌بخش فایل اصلی

| شناسه و منبع | وضعیت | ارزیابی | اقدام |
| --- | --- | --- | --- |
| `frontend-reference-1` [Frontend Roadmap — roadmap.sh](https://roadmap.sh/frontend) | ۲۰۰؛ متن خوانده شد | **مناسب به‌عنوان الهام ساختاری** — roadmap.sh یک نقشهٔ مهارت است؛ به معنی گذراندن تمام ابزارها، یک دورهٔ خطی یا اثبات تقاضای همهٔ مشاغل نیست. | در منابع مرجع بماند؛ برای هر گره منبع آموزش/تمرین مستقل لازم است. |
| `frontend-reference-2` [How to Become a Frontend Developer in 2026](https://www.greatfrontend.com/blog/how-to-become-a-frontend-developer) | ۲۰۰؛ متن خوانده شد | **مناسب به‌عنوان دیدگاه ناشر؛ دوره نیست** — مقالهٔ مسیر شغلی و پروژه‌هاست؛ زمان‌بندی و تعبیر job-ready تحلیل نویسنده است، نه تضمین استخدام برای دانشجوی این کامیونیتی. | به‌عنوان منبع تدوین حفظ شود؛ از تبدیل پیشنهادهای زمانی/شغلی به قانون سایت پرهیز کن. |
| `frontend-reference-3` [Frontend Developer Roadmap 2026](https://www.greatfrontend.com/blog/frontend-developer-roadmap) | ۲۰۰؛ متن خوانده شد | **مناسب به‌عنوان نقشهٔ مهارت؛ هم‌پوشان** — مقالهٔ مهارت‌ها با مقالهٔ قبلی هم‌پوشانی دارد؛ دو مرجع مستقل آموزشی برای هر مرحله محسوب نمی‌شوند. | برای provenance نگه دار؛ روی تعداد این سه لینک، امتیاز پوشش آموزشی نساز. |

### لینک‌های گردآورنده و فایل‌ها

| محل | لینک فعلی | نتیجه |
| --- | --- | --- |
| گردآورندهٔ Django | [github.com](https://github.com) | صفحهٔ اصلی GitHub است؛ نه پروفایل مهرشاد. از ساختار URL این ناهمخوانی مشخص است؛ به‌عنوان حساب تأییدشدهٔ آن فرد قابل استفاده نیست. |
| گردآورندهٔ علم داده | [github.com](https://github.com) | باز هم ریشهٔ GitHub است؛ برای صاحب نام این مسیر پروفایل واقعی تعیین نشده است. |
| گردآورندهٔ لینوکس | [github.com](https://github.com) | ریشهٔ GitHub؛ همین مشکل. راه درست، دریافت آیدی واقعی یا نمایش نام بدون لینک عمومی گمراه‌کننده است. |
| فایل اصلی فارسی فرانت‌اند | `/roadmaps/frontend/roadmap-fa.pdf` | فایل محلی موجود است؛ با PDF ورودی بایت‌به‌بایت مقایسه شد. این ارزیابیِ فایل است، نه ادعای دوبارهٔ تست HTTP در نوبت فعلی. |
| فایل اصلی انگلیسی فرانت‌اند | `/roadmaps/frontend/roadmap-en.pdf` | موجود و با ورودی اصلی یکسان است. |
| Markdown فرانت‌اند | `/roadmaps/frontend/source-fa.md` | موجود و با متن اصلی یکسان است؛ پرسش‌های خطاب به ویراستار در فایل اصلی حفظ شده‌اند. |

فرانت‌اند برای گردآورنده URL شخصی ندارد؛ نداشتن لینک بهتر از انتساب یک پروفایل حدسی است. در این نوبت دسترسی شبکه‌ایِ صفحهٔ اصلی GitHub مجدداً آزمایش نشده؛ مشکل این سه لینک، **انتساب نادرست/نامشخص** است، نه ادعای خرابی GitHub.

### مواردی که هنوز بازبینی دستی خارجی می‌خواهند

- پخش کامل، ترتیب و سازگاری کد/نسخهٔ ویدئوهای Corey Schafer، BugBytes، 3Blue1Brown، StatQuest، LPIC جادی و ویدئوی Docker. در بعضی موارد عنوان یا انتساب از ناشر تأیید شده، نه تمام محتوای اجراشدنی.
- در playlist معرفی‌شده برای LPIC و ویدئوی Docker، metadata کافی هم از این محیط بازیابی نشد؛ آن‌ها را حذف‌شده اعلام نکرده‌ام. برای Docker، ابزار وب پاسخ ۴۲۹ هم داد.
- اجرای تمرین‌های Kaggle و Khan Academy، ورود احتمالی، ذخیرهٔ خروجی و وضعیت محیط تمرین. فهرست رسمی Python و Intro to ML بازیابی شد؛ فهرست و اجرای کامل بقیه از پوستهٔ JS اثبات نمی‌شود.
- برای هر ویدئو/دوره: منبع منتخب باید به فصل‌های همین مرحله محدود، نسخهٔ نمونه ثبت و حداقل یک تمرین مربوط واقعاً اجرا شود. این کار از صرف دیدن عنوان دقیق‌تر است و در این گزارش ادعا نشده که برای همه انجام شده است.

<a id="topics"></a>
## ۴. ممیزی تک‌تک ۱۲۸ مبحث و کمبود هر مرحله

ستون «فعلی» از خود داده‌هاست: اگر موضوع از قبل اختیاری بوده، مشخص است. «تصمیم پیشنهادی» قضاوت آموزشی برای مخاطب تعریف‌شده است، نه تغییر اجراشده در سایت. «منبع کم دارد» با «مفهوم لازم نیست» فرق دارد.

### توسعه بک‌اند با Django

#### dj-step-1 — پیش‌نیازهای Python و محیط توسعه

**مسئلهٔ مرحله:** توابع، OOP و مدیریت خطا در یک شاخه فشرده‌اند؛ پروژهٔ JSON پیش‌نیاز صریح فایل/ماژول ندارد.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-1-1` مبانی پایتون و ساختارهای داده (List, Dict, Set, Tuple) | اختیاری علامت نخورده | **هسته؛ اصلاح نکته** — list/dict/set/tuple با انتخاب ساختار و تمرین بمانند؛ O(1) برای hash lookup حالت متوسط است، نه تضمین همیشگی یا سؤال ثابت همهٔ مصاحبه‌ها. |
| `dj-1-2` توابع، برنامه‌نویسی شیءگرا (OOP) و مدیریت خطا | اختیاری علامت نخورده | **تفکیک؛ اصلاح علمی** — توابع و خطا قبل از کلاس؛ OOP در حد کلاس و ارث‌بری. ادعای «تمام Viewها کلاس‌اند» غلط است؛ View تابعی هم داریم. متاکلاس و OOP عمیق لازم نیست. |
| `dj-1-3` محیط مجازی (venv) و مدیریت پکیج‌ها با pip | اختیاری علامت نخورده | **هسته** — یک روش venv+pip کافی است؛ نصب، فعال‌سازی و ثبت وابستگی را تمرین کن. چندین package manager و جزئیات packaging پیشرفته در شروع لازم نیست. |

**کمبود یا جابه‌جایی لازم:** import، خواندن/نوشتن فایل، JSON و رفع خطای ساده را قبل از مینی‌پروژه اضافه کن.

**معیار پایان پیشنهادی:** یک CLI کوچک با دو تابع/کلاس ساده بساز، ورودی نامعتبر را مدیریت و داده را در JSON ذخیره و بازیابی کن.

#### dj-step-2 — ابزارهای ضروری و مفاهیم پایه وب

**مسئلهٔ مرحله:** ابزار Git و Linux و مبانی شبکه چهار هدف جدا هستند؛ منابع فعلی بخش ترمینال را مستقیم تأمین نمی‌کنند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-2-1` کنترل نسخه با Git و کار تیمی در GitHub | اختیاری علامت نخورده | **هسته؛ محدود کردن عمق** — commit، branch، merge، remote و PR لازم‌اند؛ حل conflict تمرین شود. تسلط مقایسه‌ای عمیق rebase/merge پیش از اولین پروژه مانع شروع نباشد. |
| `dj-2-2` کار با ترمینال و دستورات پایه Linux | اختیاری علامت نخورده | **هسته** — cd/ls، مسیر فایل، اجرای فرمان و متغیر محیطی کافی است؛ به مسیر مشترک لینوکس لینک بده، تکرار کامل دورهٔ لینوکس لازم نیست. |
| `dj-2-3` معماری وب: پروتکل HTTP، Request/Response و Headers | اختیاری علامت نخورده | **هسته** — چرخهٔ request/response و status/header را روی یک درخواست ببین؛ حفظ همهٔ کدها، HTTP/2 internals یا TLS عمیق لازم نیست. |
| `dj-2-4` ساختار داده JSON و مفاهیم REST API | اختیاری علامت نخورده | **هسته** — خواندن و نوشتن JSON، resource و verb و idempotency مقدماتی؛ REST را به معنی هر JSON API معرفی نکن. مثال درخواست و پاسخ لازم است. |

**کمبود یا جابه‌جایی لازم:** یک تمرین CLI و یک مشاهدهٔ HTTP در کنار PR لازم است.

**معیار پایان پیشنهادی:** یک branch و PR بساز و conflict ساده را حل کن؛ request و response واقعی را با status و JSON توضیح بده.

#### dj-step-3 — مبانی فریم‌ورک Django

**مسئلهٔ مرحله:** تمرین admin و آپلود عکس به model و migration نیاز دارد که تازه مرحلهٔ بعد می‌آیند؛ admin در موضوعات هم صریح نیست.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-3-1` ساختار Project در برابر App در جنگو | اختیاری علامت نخورده | **هسته** — Project/App و ساخت اولین URL کافی است؛ چندلایه‌سازی پیچیدهٔ پروژه و معماری سازمانی به بعد از پروژه منتقل شود. |
| `dj-3-2` معماری MVT (Model-View-Template) | اختیاری علامت نخورده | **ساده‌سازی** — MVT با یک چرخهٔ واقعی توضیح داده شود؛ حفظ اسم الگوها یا مقایسهٔ مفصل MVC/MVT خروجی عملی ندارد. |
| `dj-3-3` مسیریابی URL Routing و نوشتن Views | اختیاری علامت نخورده | **هسته؛ تدریجی** — ابتدا یک View تابعی، سپس generic/class-based در صورت نیاز. یادگیری همهٔ mixinها و همهٔ سبک‌ها در یک قدم لازم نیست. |
| `dj-3-4` مدیریت فایل‌های Static و Media | اختیاری علامت نخورده | **هسته؛ تقسیم عمق** — تفاوت static و فایل بارگذاری‌شده روشن شود؛ storage ابری و پیکربندی production به بخش انتشار برود. آپلود به اعتبارسنجی و محدودیت فایل نیاز دارد. |
| `dj-3-5` آشنایی با Templates و Forms سنتی جنگو | اختیاری | **حفظ اختیاری با اصلاح دامنه** — برای مسیر API، template کامل می‌تواند اختیاری بماند؛ اما اعتبارسنجی داده و Form/ModelForm مرتبط را صرفاً به بهانهٔ «همه React دارند» بی‌ارزش معرفی نکن. |

**کمبود یا جابه‌جایی لازم:** یک model حداقلی قبل از admin، فعال‌کردن admin و مسیر static/media یا انتقال این تمرین به مرحلهٔ ۴.

**معیار پایان پیشنهادی:** یک app با URL و View قابل اجرا بساز؛ سپس با model آماده از مرحلهٔ ۴ آن را در admin ثبت کن.

#### dj-step-4 — پایگاه داده، SQL و قدرت Django ORM

**مسئلهٔ مرحله:** SQL، schema و ORM یکی شده‌اند؛ عنوان منابع مدل‌ها را با مرجع کامل QuerySet قاطی کرده است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-4-1` طراحی Models و مدیریت تغییرات با Migrations | اختیاری علامت نخورده | **هسته** — مدل، migration و تغییر schema روی پروژه تمرین شود؛ migration پیشرفته یا چندپایگاه‌داده‌ای در شروع لازم نیست. |
| `dj-4-2` عملیات CRUD و تسلط بر QuerySet API | اختیاری علامت نخورده | **هسته** — CRUD، filter/order/limit و ارزیابی QuerySet لازم‌اند؛ عنوان «تسلط بر کل QuerySet API» بیش از نیاز شروع است. lazy بودن را با شمارش query ببین. |
| `dj-4-3` روابط بین جداول (ForeignKey, OneToOne, ManyToMany) | اختیاری علامت نخورده | **هسته** — FK و OneToOne و M2M با نمونهٔ واقعی بمانند؛ همراه constraints و رفتار حذف. relationship پیچیده قبل از یک مدل ساده لازم نیست. |
| `dj-4-4` زبان SQL و کار با دیتابیس استاندارد PostgreSQL | اختیاری علامت نخورده | **تفکیک** — SQL پایه و راه‌اندازی PostgreSQL دو خروجی جدا هستند؛ SELECT/JOIN/aggregation ابتدا، تراکنش و ایندکس به نیاز پروژه. اجرای SQL و ORM با هم مقایسه شوند. |

**کمبود یا جابه‌جایی لازم:** constraint، transaction ساده و منبع مستقل SQL/PostgreSQL متناسب با پروژه؛ منبع query/QuerySet صحیح.

**معیار پایان پیشنهادی:** مدل مرتبط و migration بساز؛ یک JOIN/aggregate در SQL و معادل سادهٔ ORM را اجرا و اعتبار داده را با constraint حفظ کن.

#### dj-step-5 — مدیریت کاربران، احراز هویت و اصول امنیت وب

**مسئلهٔ مرحله:** شروع هم‌زمان AbstractBaseUser و امنیت آکادمی کامل می‌تواند بیش از نیاز باشد؛ تست مالکیت داده پنهان است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-5-1` سفارشی‌سازی مدل User (AbstractUser / AbstractBaseUser) | اختیاری علامت نخورده | **ساده‌سازی** — شروع با AbstractUser و تنظیم از ابتدای پروژه؛ AbstractBaseUser برای نیاز سفارشی واقعی و فهم manager/auth backend اختیاری شود. «همیشه هر دو را بلد باش» لازم نیست. |
| `dj-5-2` ثبت‌نام، ورود و مدیریت سشن‌ها و کوکی‌ها | اختیاری علامت نخورده | **هسته** — login/logout و session/cookie، ذخیرهٔ رمز با API درست و رفتار expiry لازم‌اند؛ مکانیزم session را با JWT قاطی نکن. |
| `dj-5-3` سیستم Permissions و گروه‌بندی دسترسی‌ها (RBAC) | اختیاری علامت نخورده | **هسته؛ تکمیل** — گروه/مجوز لازم است؛ کنترل مالکیت شیء و فیلتر queryset در API هم افزوده شود. پنهان کردن دکمه در UI جای authorization نیست. |
| `dj-5-4` اصول امنیت وب: جلوگیری از XSS، CSRF و SQL Injection | اختیاری علامت نخورده | **هسته؛ محدود کردن عمق** — علت XSS/CSRF/SQLi و رفتار صحیح framework لازم است؛ دورهٔ کامل pentest لازم نیست. ORM همهٔ استفاده‌های SQL خام یا خروجی unsafe را خودکار ایمن نمی‌کند. |

**کمبود یا جابه‌جایی لازم:** password API، تست دسترسی کاربران متفاوت و امنیت session/cookie؛ reset password براساس نیاز پروژه.

**معیار پایان پیشنهادی:** کاربر ثبت‌نام و ورود کند؛ رمز خام ذخیره نشود؛ کاربر دیگر به دادهٔ خصوصی دسترسی نگیرد و تست آن وجود داشته باشد.

#### dj-step-6 — ساخت API حرفه‌ای با Django REST Framework

**مسئلهٔ مرحله:** همهٔ سبک‌های View و JWT/OpenAPI را یکجا پیش‌شرط کرده؛ بنر آمادگی شغلی پیش از ورود تست‌ها زود است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-6-1` مفاهیم Serializer و ModelSerializer (اعتبارسنجی داده‌ها) | اختیاری علامت نخورده | **هسته** — Serializer و validation با ورودی صحیح/غلط؛ ابتدا یک الگوی ساده، سپس ModelSerializer. تست field-level و object-level لازم است. |
| `dj-6-2` نوشتن APIView، Generic Views و ViewSets | اختیاری علامت نخورده | **ساده‌سازی** — Generic view یا ViewSet را مسیر اصلی انتخاب کن؛ APIView به‌عنوان پایه توضیح داده شود. تسلط هم‌زمان بر تمام abstractionها قبل از CRUD لازم نیست. |
| `dj-6-3` احراز هویت مدرن با توکن JWT (پکیج SimpleJWT) | اختیاری علامت نخورده | **گزینهٔ معماری؛ عمق تکمیلی** — مفهوم authentication هسته است، JWT تنها گزینه نیست. session برای بعضی وب‌اپ‌ها مناسب است؛ SimpleJWT و refresh/rotation زمانی که معماری به آن نیاز دارد. |
| `dj-6-4` صفحه‌بندی (Pagination)، فیلترینگ و جستجو در API | اختیاری علامت نخورده | **هسته** — pagination و filter ساده برای API داده‌محور مناسب‌اند؛ جستجوی پیچیده و tuning موتور جداگانه در شروع لازم نیست. |
| `dj-6-5` مستندسازی خودکار API با Swagger / OpenAPI (drf-spectacular) | اختیاری علامت نخورده | **تکمیلی پس از API ساده** — نمونهٔ درخواست/پاسخ و قرارداد API ضروری‌اند؛ سفارشی‌سازی گستردهٔ Swagger/drf-spectacular پیش از ساخت endpoint لازم نیست. OpenAPI سبک بعد از اولین API اضافه شود. |

**کمبود یا جابه‌جایی لازم:** permission سطح شیء، validation، status/error contract و تست endpoint؛ منابع مستقیم JWT/OpenAPI در صورت انتخاب.

**معیار پایان پیشنهادی:** CRUD با ورودی معتبر/نامعتبر، pagination و محدودیت مالکیت بساز؛ مسیر مجاز و غیرمجاز در تست اثبات شود.

#### dj-step-7 — تست‌نویسی، بهینه‌سازی کوئری و پردازش پس‌زمینه

**مسئلهٔ مرحله:** باید به تست پایه، عملکرد query و task پس‌زمینه تقسیم شود؛ فقط آخری واقعاً تعمیق مستقل است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-7-1` حل مشکل N+1 Query با select_related و prefetch_related | اختیاری علامت نخورده | **جابه‌جایی نزدیک ORM؛ اصلاح نکته** — مسئلهٔ N+1 در حد مشاهده و رفع یک نمونه مناسب است. select_related برای روابط تک‌مقداری با join است؛ prefetch فقط مخصوص M2M نیست و روابط دیگر را هم پوشش می‌دهد. |
| `dj-7-2` کش کردن داده‌ها با Redis برای افزایش سرعت | اختیاری علامت نخورده | **تعمیق** — Redis/cache را بعد از مشاهدهٔ کندی و تعیین TTL/invalidation بیاور؛ برای اولین CRUD الزام نیست. کش بدون دلیل، پیچیدگی اضافه می‌کند. |
| `dj-7-3` صف وظایف و کارهای پس‌زمینه با Celery (ارسال ایمیل/پیامک) | اختیاری علامت نخورده | **تعمیق مستقل** — Celery و broker/retry مسئولیت عملیاتی جدیدند؛ بعد از task کند واقعی، نه شرط شروع کارآموزی. برای یک CRUD ساده لازم نیست. |
| `dj-7-4` نوشتن Unit Test و تست API با Pytest / APITestCase | اختیاری علامت نخورده | **انتقال به هستهٔ زودتر** — تست مدل، validation، permission و API باید هنگام ساخت همان قابلیت شروع شود. همهٔ test frameworkها لازم نیست؛ یک روش انتخاب شود. |
| `dj-7-5` کار با Middlewareها، Signals و اصول Clean Code / SOLID | اختیاری | **حفظ اختیاری؛ تفکیک** — الان هم اختیاری است. middleware، signals و SOLID یک مهارت واحد نیستند؛ signals ضمنی و تئوری همهٔ اصول قبل از نیاز پروژه الزام نشود. |

**کمبود یا جابه‌جایی لازم:** baseline تعداد query/زمان، تست رفتاری و failure/retry برای task در صورت افزودن Celery.

**معیار پایان پیشنهادی:** N+1 یک endpoint را با شمارش query نشان بده و رفع کن؛ task queue فقط در پروژهٔ نیازمند و با رفتار شکست مشخص اضافه شود.

#### dj-step-8 — کانتینرسازی با Docker و استقرار در محیط Production

**مسئلهٔ مرحله:** Docker+Redis+Celery+Nginx برای هر پروژه شرط نشده باشد؛ یک مسیر deploy روشن کافی است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `dj-8-1` جداسازی تنظیمات Development و Production و متغیرهای محیطی (.env) | اختیاری علامت نخورده | **هستهٔ انتشار** — config محیط، DEBUG، secret و logging لازم‌اند؛ .env ابزار محلی است، نه کل استراتژی نگهداری راز در production. |
| `dj-8-2` نوشتن Dockerfile و بالا آوردن کل استک با Docker Compose | اختیاری علامت نخورده | **یک مسیر انتشار؛ ساده‌سازی** — Docker برای این مسیر ارزش دارد ولی تنها راه deploy نیست؛ ابتدا app+database. Redis/Celery را فقط اگر در پروژه استفاده شده‌اند وارد Compose کن. |
| `dj-8-3` تنظیم وب‌سرور Nginx و اپلیکیشن‌سرور Gunicorn | اختیاری علامت نخورده | **انتخاب پیاده‌سازی؛ تعمیق** — فهم app server و reverse proxy خوب است؛ Nginx+Gunicorn را تنها ترکیب صحیح یا پیش‌نیاز تمام کارآموزها معرفی نکن. یک مسیر انتشار قابل اجرا کافی است. |

**کمبود یا جابه‌جایی لازم:** HTTPS، static/media ماندگار، اجرای migration، log و پشتیبان‌گیری/بازیابی سادهٔ داده در مسیر انتخابی.

**معیار پایان پیشنهادی:** پروژه با config محیط و DEBUG خاموش اجرا شود؛ restart داده را پاک نکند؛ خطای سرویس از log قابل پیدا کردن باشد.

### علم داده و هوش مصنوعی

#### ds-step-1 — پایتون کاربردی برای دیتا و ابزارهای محیط کار

**مسئلهٔ مرحله:** ابزارهای محیط، Git و GPU کنار مبانی زبان جمع شده‌اند؛ GPU برای شروع تمرین‌ها لازم نیست.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-1-1` مبانی پایتون، حلقه‌ها، توابع و List Comprehension | اختیاری علامت نخورده | **هسته؛ تدریجی** — حلقه و تابع و خوانایی قبل از comprehension؛ lambda و کوتاه‌نویسی معیار کیفیت کد نیستند. یک تحلیل کوچک مهم‌تر از حفظ ترفند است. |
| `ds-1-2` ساختارهای داده پایتون (List, Dict, Set, Tuple) | اختیاری علامت نخورده | **هسته** — list/dict و انتخاب ساختار برای رکوردها لازم است؛ ساختارهای داخلی پیشرفتهٔ زبان به نیاز پروژه موکول شوند. |
| `ds-1-3` مدیریت محیط مجازی (venv / Conda) و Git پایه | اختیاری علامت نخورده | **تفکیک ابزارها** — یک محیط venv یا Conda انتخاب شود، نه تسلط هم‌زمان هر دو. Git کنترل نسخه است و از جداسازی کتابخانه‌ها مسئلهٔ متفاوتی حل می‌کند. |
| `ds-1-4` تسلط بر محیط Jupyter Notebook و Google Colab (استفاده از GPU رایگان) | اختیاری علامت نخورده | **ساده‌سازی** — اجرای notebook، restart/run-all و ذخیرهٔ خروجی لازم‌اند. GPU برای Python/Pandas/SQL پیش‌نیاز نیست و رایگان/همیشه‌موجود بودن آن نباید وعده شود. |
| `ds-1-5` برنامه‌نویسی شیءگرا (OOP) در پایتون | اختیاری | **حفظ اختیاری** — همین وضعیت برای شروع تحلیل مناسب است؛ فهم ساخت و استفادهٔ object کافی است، معماری OOP سنگین پیش‌نیاز EDA نیست. |

**کمبود یا جابه‌جایی لازم:** فایل CSV، نوع داده، نصب کتابخانه و اجرای دوبارهٔ کامل notebook از محیط پاک.

**معیار پایان پیشنهادی:** از یک CSV آماده گزارشی ساده بساز و notebook با run-all بدون وابستگی به ترتیب تصادفی سلول‌ها اجرا شود.

#### ds-step-2 — کار با داده، پاک‌سازی و تسلط بر SQL

**مسئلهٔ مرحله:** NumPy/Pandas/پاک‌سازی/SQL پیشرفته باید به زیرواحد تبدیل شوند؛ یک منبع مستقل NumPy وجود ندارد.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-2-1` محاسبات برداری و ماتریسی سریع با کتابخانه NumPy | اختیاری علامت نخورده | **هسته در حد کاربرد** — array، shape، dtype، slicing و vectorization کافی است. ادعای همیشگی «ده‌ها برابر سریع‌تر» بدون benchmark محدودکننده است؛ جبر خطی سنگین اینجا لازم نیست. |
| `ds-2-2` پردازش و تحلیل داده‌های جدولی با Pandas (DataFrames) | اختیاری علامت نخورده | **هسته** — read_csv، select/filter، groupby و merge با سؤال تحلیلی مشخص؛ حفظ تمام API Pandas لازم نیست. |
| `ds-2-3` پاک‌سازی داده (Data Cleaning): مدیریت داده‌های گمشده (Missing Values) و پرت (Outliers) | اختیاری علامت نخورده | **هسته؛ تکمیل تصمیم‌گیری** — dtype، duplicate، missing و مقادیر نامعتبر با گزارش تصمیم‌ها؛ outlier را خودکار حذف نکن. imputation در ML فقط روی train برازش شود. |
| `ds-2-4` تسلط کامل بر SQL برای تحلیل داده (JOINs, Group By, Window Functions) | اختیاری علامت نخورده | **تفکیک دو سطح** — SELECT/JOIN/GROUP BY هسته؛ Window Functions یک زیرواحد بعد از پایه‌ها، نه «تسلط کامل» یک‌مرحله‌ای. ادعای ۱۰۰٪ مصاحبه حذف شود. |

**کمبود یا جابه‌جایی لازم:** منبع NumPy، duplicate/dtype/date، JOIN و window با تمرین مستقل و گزارش تصمیم پاک‌سازی.

**معیار پایان پیشنهادی:** داده را با دلایل ثبت‌شده پاک کن؛ چند سؤال با Pandas و SQL پاسخ بده و جمع‌های خروجی را با دادهٔ ورودی سازگار نگه دار.

#### ds-step-3 — تحلیل اکتشافی (EDA)، بصری‌سازی و آمار کاربردی

**مسئلهٔ مرحله:** EDA، سه کتابخانهٔ نمودار و آمار/A-B بیش از ظرفیت یک قدم هستند؛ شاخهٔ تحلیل‌گر فقط در بنر دیده می‌شود.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-3-1` تحلیل اکتشافی داده (EDA) و کشف الگوهای پنهان | اختیاری علامت نخورده | **هسته** — EDA با سؤال، کیفیت داده و نتیجهٔ قابل توضیح؛ کشف الگو بدون توجه به sampling و محدودیت داده کافی نیست. |
| `ds-3-2` رسم نمودارهای تحلیلی با Matplotlib، Seaborn و Plotly | اختیاری علامت نخورده | **انتخاب یک ابزار اصلی** — Matplotlib+Seaborn برای شروع کافی‌اند؛ Plotly در صورت نیاز به تعامل. یادگیری عمیق هر سه قبل از یک گزارش لازم نیست. |
| `ds-3-3` آمار توصیفی در عمل (میانگین، میانه، واریانس، چولگی و توزیع نرمال) | اختیاری علامت نخورده | **هسته؛ اصلاح مطلق‌گویی** — مرکز و پراکندگی و توزیع داده لازم‌اند؛ میانه همیشه از میانگین بهتر نیست و انتخاب به سؤال و توزیع وابسته است. |
| `ds-3-4` آمار استنباطی، احتمال پایه و آزمون فرض (Hypothesis Testing & A/B Testing) | اختیاری علامت نخورده | **تفکیک؛ عمق تدریجی** — احتمال و sampling و confidence interval قبل از فرضیه/A-B؛ p-value احتمال درست بودن فرض صفر نیست. طراحی آزمایش و توان آزمون یک تعمیق مستقل است. |
| `ds-3-5` روایت‌گری داده (Data Storytelling) و درک شاخص‌های کسب‌وکار (KPIs) | اختیاری علامت نخورده | **هسته** — تبدیل سؤال کسب‌وکار به metric و توضیح نمودار لازم است؛ یک گزارش با محدودیت‌ها بساز. مهارت presentation را با ابزار BI یکی ندان. |

**کمبود یا جابه‌جایی لازم:** نمونه‌گیری، عدم‌قطعیت/CI و محدودیت داده؛ در شاخهٔ BI یک ابزار و تمرین مستقل انتخاب شود.

**معیار پایان پیشنهادی:** به یک سؤال کسب‌وکار با چند نمودار مناسب پاسخ بده و محدودیت/نمونه‌گیری و metric انتخاب‌شده را توضیح بده.

#### ds-step-4 — ریاضیات شهودی ماشین لرنینگ (Just-in-Time Math)

**مسئلهٔ مرحله:** دو عنوان، محتوای دو درس دانشگاهی را پنهان می‌کنند؛ برای تحلیل‌گر این شاخهٔ ML پیش‌نیاز نیست.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-4-1` شهود جبر خطی: بردارها، ماتریس‌ها، ضرب نقطه‌ای و مقادیر ویژه (Eigenvalues) | اختیاری علامت نخورده | **ساده‌سازی؛ شرطی برای ML** — بردار/ماتریس و dot product با مثال کافی‌اند؛ eigenvalue و اثبات‌ها زمانی که PCA/مدل مربوط لازم شد. برای خروجی تحلیل‌گر داده همهٔ این مرحله اجباری نیست. |
| `ds-4-2` مفهوم مشتق، گرادیان و الگوریتم بهینه‌سازی Gradient Descent | اختیاری علامت نخورده | **ساده‌سازی؛ شرطی برای ML** — شهود مشتق و گرادیان و یک مثال learning rate؛ تمام حسابان یا حل نمادین سخت برای شروع مدل‌سازی لازم نیست. |

**کمبود یا جابه‌جایی لازم:** تمرین عددی کوچک برای dot/gradient در مدل مربوط، نه افزودن تمام حسابان یا اثبات PCA.

**معیار پایان پیشنهادی:** روی دادهٔ کوچک معنای ضرب بردار و تغییر loss با learning rate را نشان بده؛ اثبات‌های عمیق الزام عبور نباشند.

#### ds-step-5 — یادگیری ماشین کلاسیک و مهندسی ویژگی

**مسئلهٔ مرحله:** الگوریتم‌ها، معیارها و مهندسی ویژگی فشرده‌اند؛ baseline باید پیش از چندین boosting بیاید.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-5-1` یادگیری نظارت‌شده (Supervised): رگرسیون خطی/لجستیک، درخت تصمیم و Random Forest | اختیاری علامت نخورده | **هستهٔ شاخهٔ ML؛ تفکیک** — یک regression و یک classification ساده با baseline؛ درخت و Random Forest بعد از ارزیابی. چهار الگوریتم را یک مهارت بدون معیار پایان ندان. |
| `ds-5-2` پادشاهان داده‌های جدولی: الگوریتم‌های XGBoost، LightGBM و CatBoost | اختیاری علامت نخورده | **تعمیق پس از baseline** — از XGBoost/LightGBM/CatBoost یک پیاده‌سازی انتخاب کن؛ بقیه آشنایی مقایسه‌ای. هم‌زمانی سه ابزار و hyperparameter tuning عمیق شرط اولین پروژه نیست. |
| `ds-5-3` یادگیری بدون نظارت (Unsupervised): خوشه‌بندی K-Means و کاهش ابعاد PCA | اختیاری علامت نخورده | **اختیاری بر اساس مسئله** — K-Means و PCA دو مسئلهٔ متفاوت‌اند و پیش‌نیاز همهٔ پروژه‌های supervised نیستند؛ دو زیرواحد با تمرین جدا بهتر است. |
| `ds-5-4` مهندسی ویژگی (Feature Engineering) و کدگذاری متغیرها | اختیاری علامت نخورده | **هستهٔ شاخهٔ ML** — encoding، scaling لازم برای مدل و preprocessing pipeline؛ انتخاب ویژگی و روش‌های پیچیده به پس از baseline منتقل شوند. |
| `ds-5-5` ارزیابی مدل (Precision, Recall, F1, ROC-AUC) و اعتبارسنجی Cross-Validation | اختیاری علامت نخورده | **هسته؛ تکمیل معیارها** — classification با precision/recall/F1 و معیار متناسب با مسئله؛ برای regression هم MAE/RMSE لازم است. threshold و PR-AUC برای عدم توازن مهم‌تر از حفظ نام همهٔ معیارهاست. |
| `ds-5-6` مدیریت بیش‌برازش (Overfitting)، نشت داده (Data Leakage) و عدم توازن کلاس‌ها (Class Imbalance) | اختیاری علامت نخورده | **هسته؛ تفکیک** — overfitting، leakage و imbalance جدا با مثال؛ split پیش از fit و pipeline در هسته. SMOTE درمان پیش‌فرض نیست و فقط داخل train/fold مربوط مجاز است. |

**کمبود یا جابه‌جایی لازم:** معیار regression، baseline، pipeline و split درست متناسب با دادهٔ تصادفی/گروهی/زمانی؛ منبع مستقیم leakage.

**معیار پایان پیشنهادی:** یک baseline و یک مدل بساز؛ preprocessing فقط روی train fit شود و نتیجه با metric و محدودیت مناسب گزارش شود.

#### ds-step-6 — استقرار مدل و تبدیل پروژه به محصول (Model Deployment)

**مسئلهٔ مرحله:** دمو و API دو خروجی متفاوت‌اند؛ صرف نبود وب‌اپ، تحلیل یا notebook را بی‌ارزش نمی‌کند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-6-1` ذخیره و بازیابی مدل‌های آموزش‌دیده (Pickle / Joblib) | اختیاری علامت نخورده | **هسته برای انتشار مدل؛ تکمیل** — بارگذاری artifact فقط از منبع قابل اعتماد و با نسخهٔ سازگار؛ pickle/joblib ورودی ناشناس را ایمن نمی‌کنند. ذخیرهٔ کد preprocessing هم ضروری است. |
| `ds-6-2` ساخت رابط کاربری تعاملی و دمو برای مدل با Streamlit | اختیاری علامت نخورده | **یک گزینهٔ دموی ساده** — برای ارائهٔ پروژه مناسب است؛ یک دموی Streamlit کافی است و نیاز به FastAPI هم‌زمان ندارد. «۵۰ خط» معیار کیفیت یا تضمین استقرار نیست. |
| `ds-6-3` ساخت سرویس API سریع برای مدل با FastAPI | اختیاری علامت نخورده | **اختیاری نسبت به نقش** — برای ML serving یا همکاری محصول مفید است؛ برای تحلیل‌گر داده الزامی نیست. قرارداد ورودی، پاسخ و validation قبل از استقرار پیچیده لازم‌اند. |
| `ds-6-4` چیدمان پورتفولیو حرفه‌ای در GitHub (مستندسازی README و نتایج) | اختیاری علامت نخورده | **همراه از ابتدای مسیر** — README، روش اجرا، نسخه‌ها، داده و محدودیت‌ها را از اولین پروژه اضافه کن؛ مستندسازی فقط مرحلهٔ آخر یا زیباسازی پروفایل نیست. |

**کمبود یا جابه‌جایی لازم:** یکسان‌بودن preprocessing آموزش/پیش‌بینی، نسخهٔ artifact و ورودی معتبر؛ منبع مستقیم persistence و FastAPI/Streamlit.

**معیار پایان پیشنهادی:** یک مدلِ قابل اعتماد با همان preprocessing اجرا شود و برای دادهٔ ناقص پیام قابل فهم بدهد؛ یکی از دمو یا API برای نقش انتخاب شود.

#### ds-step-7 — شاخه‌های پیشرفته هوش مصنوعی (انتخابی بر اساس علاقه)

**مسئلهٔ مرحله:** اختیاری بودن از قبل درست است؛ چهار شاخه با دو منبع، مسیر مستقل کافی ندارند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `ds-7-1` یادگیری عمیق (Deep Learning) و شبکه‌های عصبی با PyTorch | اختیاری | **حفظ اختیاری؛ پیش‌نیاز روشن** — الان هم اختیاری است؛ مبانی ML/Python و یک پروژه لازم دارد. توسعهٔ PyTorch از صفر یا training سنگین شرط مسیر تحلیل نیست. |
| `ds-7-2` پردازش زبان طبیعی (NLP) و معماری ترنسفورمرها | اختیاری | **حفظ اختیاری** — NLP/Transformer شاخهٔ مستقل با پیش‌نیاز DL؛ آشنایی اولیه را از آموزش عمیق attention و fine-tuning جدا کن. |
| `ds-7-3` مهندسی هوش مصنوعی مولد، LLMها و سیستم‌های RAG | اختیاری | **حفظ اختیاری؛ منبع کم دارد** — RAG و مهندسی LLM در هستهٔ دانشجوی تازه‌کار لازم نیست؛ retrieval، ارزیابی، هزینه و داده باید در یک شاخهٔ جدا بیایند. «ترندترین بازار» ادعای مستند نیست. |
| `ds-7-4` تحلیل سری‌های زمانی (Time Series) یا سیستم‌های پیشنهاددهنده (Recommender Systems) | اختیاری | **حفظ اختیاری؛ تفکیک** — سری زمانی و recommender دو مسیرند؛ لازم نیست هر دو خوانده شوند. split زمانی و baseline یا ranking/evaluation هرکدام منبع و معیار جدا می‌خواهند. |

**کمبود یا جابه‌جایی لازم:** برای RAG، سری زمانی و recommender هدف، پیش‌نیاز، dataset، baseline و معیار پایان جدا لازم است.

**معیار پایان پیشنهادی:** یک شاخه انتخاب شود و پروژهٔ کوچک با baseline/evaluation آن شاخه بسازد؛ تمام شاخه‌ها شرط پایان این رودمپ نباشند.

### لینوکس، سیستم‌عامل و Docker برای برنامه‌نویس‌ها

#### lx-step-1 — مفاهیم درس سیستم‌عامل در دنیای واقعی

**مسئلهٔ مرحله:** با OS نظری شروع می‌کند، درحالی‌که هنوز محیط تمرین و فرمان پایه روشن نیست؛ LPIC با همهٔ این مفاهیم هم‌تراز نیست.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `lx-1-1` تفاوت Process و Thread در عمل و نحوه مدیریت منابع | اختیاری علامت نخورده | **ساده‌سازی و جابه‌جایی** — دیدن process و thread در ابزارها برای شروع کافی است؛ internals و هزینهٔ ارتباط به تعمیق OS برود. سرعت ارتباط ترد/پروسس حکم مطلق نیست. |
| `lx-1-2` مفهوم Race Condition و Deadlock (از سیستم‌عامل تا تراکنش‌های دیتابیس) | اختیاری علامت نخورده | **تعمیق یا ارجاع به پایگاه داده** — race/deadlock کامل برای شروع CLI لازم نیست. مثال خرید آخرین کالا به تراکنش و قفل دیتابیس مربوط است و در پروژهٔ backend بهتر آموزش داده می‌شود. |
| `lx-1-3` مدیریت حافظه (RAM، Stack vs Heap و مفهوم Swap) | اختیاری علامت نخورده | **ساده‌سازی** — مصرف RAM و swap کاربردی است؛ جزئیات stack/heap و تخصیص حافظهٔ پایین‌سطح از مسیر پایهٔ لینوکس جدا شود. |

**کمبود یا جابه‌جایی لازم:** راه‌اندازی یک محیط امنِ تمرین، اجرای فرمان و مشاهدهٔ process/memory.

**معیار پایان پیشنهادی:** یک process را پیدا کن، مصرف حافظه را ببین و تفاوت process/thread را با مثال توضیح بده؛ حل deadlock نظری شرط شروع نباشد.

#### lx-step-2 — تسلط بر ترمینال لینوکس و اسکریپت‌نویسی Bash

**مسئلهٔ مرحله:** عنوان scripting دارد، اما مبحث صریح script/variable/condition/loop ندارد. چند موضوع بزرگ در چهار شاخه جا گرفته‌اند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `lx-2-1` فایل‌سیستم لینوکس، دستورات پایه و لوله‌کشی دستورات (Pipes & Redirection) | اختیاری علامت نخورده | **هسته؛ مرحله‌بندی** — navigation و فایل‌ها، سپس pipe و redirection و جستجوی متن؛ هرکدام تمرین کوتاه. تبدیل همه به یک عنوان «تسلط بر ترمینال» کافی نیست. |
| `lx-2-2` مدیریت کاربران و سطح دسترسی فایل‌ها (chmod / chown) | اختیاری علامت نخورده | **هسته** — کاربر، مالکیت و rwx با فایل واقعی؛ چند دستور و معنی‌شان کافی است. سطح دسترسی باید از نیاز فایل نتیجه شود، نه حفظ چند عدد. |
| `lx-2-3` اتصال امن به سرور با SSH و مدیریت کلیدهای عمومی/خصوصی | اختیاری علامت نخورده | **هسته** — اتصال با کلید و مدیریت permission کلید؛ خطایابی سادهٔ اتصال. تنظیمات پیچیدهٔ bastion و چندلایهٔ SSH برای شروع لازم نیست. |
| `lx-2-4` مانیتورینگ منابع سرور و سرویس‌ها (htop, btop, systemd, journalctl) | اختیاری علامت نخورده | **تفکیک** — htop/btop انتخاب ابزار مانیتورینگ است؛ systemd/journalctl مدیریت سرویس و لاگ. یکی از htop/btop کافی است و برای service یک تمرین مستقل لازم است. |

**کمبود یا جابه‌جایی لازم:** quoting، متغیر، exit status، شرط و حلقهٔ ساده و script کوتاه؛ یا تغییر عنوان به CLI اگر این‌ها اضافه نمی‌شوند.

**معیار پایان پیشنهادی:** فایل‌ها را با pipe تحلیل کن، با SSH وصل شو، log سرویس را بخوان و یک script کوتاه با مدیریت خطا اجرا کن.

#### lx-step-3 — کانتینرسازی با Docker و Docker Compose

**مسئلهٔ مرحله:** از معماری مستقیم به Dockerfile بهینه می‌پرد؛ منبع مرورگری بازنشسته است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `lx-3-1` تفاوت معماری ماشین مجازی (VM) و کانتینر (Container) | اختیاری علامت نخورده | **هستهٔ مفهومی** — تفاوت VM/container را کوتاه و با اجرا توضیح بده. اشتراک kernel دربارهٔ میزبان لینوکسی است؛ Docker Desktop ممکن است VM لینوکسی واسط داشته باشد. |
| `lx-3-2` نوشتن Dockerfile بهینه و مدیریت Imageها و Volumeها | اختیاری علامت نخورده | **تفکیک؛ کاهش بهینه‌سازی زودهنگام** — اول run/logs/exec و image/container، سپس Dockerfile خوانا و volume. multi-stage و بهینه‌سازی عمیق به بعد از نمونهٔ کارا بروند. |
| `lx-3-3` اجرای هم‌زمان بک‌اند، فرانت‌اند و دیتابیس با Docker Compose | اختیاری علامت نخورده | **هسته در سطح app+database** — Compose با شبکهٔ سرویس و volume ماندگار مناسب است؛ همهٔ افراد لازم نیست هم‌زمان frontend/backend/db/Nginx را از صفر پیاده کنند. |

**کمبود یا جابه‌جایی لازم:** run/ps/logs/exec/stop، port mapping، service DNS، env و volume؛ بهینه‌سازی بعد از اجرای درست.

**معیار پایان پیشنهادی:** app و database با Compose اجرا شوند، restart داده را پاک نکند و خطای اتصال از log و network رفع شود.

### توسعهٔ فرانت‌اند

#### fe-step-0 — پایه‌های وب

**مسئلهٔ مرحله:** برای پیش از HTML، جزئیات HTTP/TLS/rendering و چند ابزار را یکجا آورده؛ برخی موضوعات بعداً بهتر فهمیده می‌شوند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-0-1` اینترنت، کلاینت و سرور | اختیاری علامت نخورده | **هسته در حد مدل ذهنی** — client/server و DNS و نقش IP/CDN به‌صورت مفهومی؛ جزئیات routing شبکه یا مدیریت CDN پیش از HTML لازم نیست. |
| `fe-0-2` HTTP، HTTPS و امنیت ارتباط | اختیاری علامت نخورده | **ساده‌سازی و توزیع در مسیر** — request/status/header و HTTPS ابتدا؛ cookie/CORS کنار fetch و auth و CSRF. جزئیات TLS، گواهی و رمزنگاری عمیق در هستهٔ شروع لازم نیست. |
| `fe-0-3` از URL تا نمایش صفحه | اختیاری علامت نخورده | **هسته؛ بدون تکرار** — این موضوع جمع‌بندی client/DNS/HTTP/render است؛ آن را معیار پایانِ پایه‌ها کن تا یک شاخهٔ تکراری با مطالب قبلی نباشد. |
| `fe-0-4` رندر مرورگر و DOM / CSSOM | اختیاری علامت نخورده | **آشنایی اولیه؛ تعمیق بعداً** — نام و نقش DOM/CSSOM کافی است؛ reflow/repaint و tracing عمیق پس از HTML/CSS و در performance قرار گیرد، نه مانع شروع. |
| `fe-0-5` API، JSON و روش‌های رندر | اختیاری علامت نخورده | **تفکیک و جابه‌جایی** — API/JSON کنار JavaScript/fetch؛ CSR/SSR/SSG پس از ساخت صفحه و در انتخاب معماری. حفظ همهٔ روش‌های رندر قبل از HTML لازم نیست. |
| `fe-0-6` دامنه، میزبانی و ابزارهای اجرا | اختیاری علامت نخورده | **تفکیک** — ترمینال و package manager به ابزارهای توسعه؛ دامنه/hosting هنگام اولین انتشار. آشنایی اولیه خوب است، تسلط عملی هم‌زمان لازم نیست. |

**کمبود یا جابه‌جایی لازم:** تمایز شبکه با رندر و منبع مقالهٔ رندر؛ DNS/HTTP ابتدا و CORS/cookie همراه API/auth.

**معیار پایان پیشنهادی:** در حد مفهومی مسیر URL تا HTML/CSS/JS را توضیح بده و یک request واقعی را در Network پیدا کن.

#### fe-step-1 — HTML و CSS

**مسئلهٔ مرحله:** CSS layout منبع دارد ولی cascade/specificity منبع شروع مستقل ندارند؛ فرم نیاز به تمرین مشخص دارد.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-1-1` ساختار HTML و فرم‌ها | اختیاری علامت نخورده | **هسته** — ساختار معنایی، heading، link/button و فرم؛ HTML بومی و label از اولین تمرین استفاده شوند. جدول و تصویر هم در تمرین پوشش داده شوند. |
| `fe-1-2` عناصر بومی HTML | اختیاری علامت نخورده | **ادغام با HTML معنایی** — انتخاب عنصر بومی یک اصل کاربردی در همان ساخت صفحه است؛ لازم نیست واحد حجیم مستقل یا الزام ساخت کنترل سفارشی داشته باشد. |
| `fe-1-3` مدل جعبه‌ای، cascade و specificity | اختیاری علامت نخورده | **هسته** — box model، cascade و specificity قبل از framework CSS لازم‌اند؛ بدون آن‌ها Grid/Tailwind به حدس‌زدن تبدیل می‌شوند. |
| `fe-1-4` Flexbox، Grid و positioning | اختیاری علامت نخورده | **هسته؛ تدریجی** — Flex برای چیدمان ساده، سپس Grid و positioning لازم؛ حفظ همهٔ ویژگی‌ها یا layout بسیار پیچیده در شروع لازم نیست. |
| `fe-1-5` طراحی واکنش‌گرا | اختیاری علامت نخورده | **هسته** — عرض سیال و mobile layout، media query لازم؛ آموختن همهٔ breakpointها یا صرفاً تقلید اندازهٔ دستگاه معیار مهارت نیست. |
| `fe-1-6` دسترس‌پذیری پایه | اختیاری علامت نخورده | **هسته؛ ادامه‌دار** — semantic، label، keyboard، focus و contrast از ابتدا؛ ARIA سفارشی پیچیده یا حفظ کل WCAG پیش‌نیاز شروع نیست. |
| `fe-1-deep-1` تعمیق HTML & CSS | اختیاری | **تفکیک هسته و تعمیق موجود** — الان اختیاری است؛ CSS variables، overflow و stacking پایه برای layout واقعی مفیدند و بهتر است نمونهٔ ساده‌شان زودتر بیاید. container query و containment عمیق اختیاری بمانند. |

**کمبود یا جابه‌جایی لازم:** Styling basics، تصویر/فرم، keyboard/focus و overflow در پروژه؛ ARIA سفارشی عمیق لازم نیست.

**معیار پایان پیشنهادی:** یک صفحه و فرم معنایی در موبایل/دسکتاپ بساز، با کیبورد استفاده کن و یک مشکل CSS را با DevTools رفع کن.

#### fe-step-2 — ابزارهای توسعه

**مسئلهٔ مرحله:** فهرست همهٔ پنل‌های DevTools می‌تواند تسلط هم‌زمان را القا کند؛ ابزارها بهتر است همراه مسئله تدریجی شوند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-2-1` Git و همکاری در GitHub | اختیاری علامت نخورده | **هسته** — commit/branch/PR و conflict ساده همراه پروژه؛ rebase پیچیده و Git internals لازم نیست. |
| `fe-2-2` ابزارهای مرورگر (DevTools) | اختیاری علامت نخورده | **مرحله‌بندی ابزار** — Elements/Console ابتدا، Network با API، Application با storage؛ profiling عمیق Performance بعد از محصول. همهٔ پنل‌ها هم‌زمان لازم نیستند. |
| `fe-2-3` اشکال‌زدایی و stack trace | اختیاری علامت نخورده | **هسته** — بازسازی خطا، خواندن پیام و stack و کوچک‌کردن مسئله؛ حفظ همهٔ امکانات debugger یا واگذاری علت‌یابی به AI لازم نیست. |
| `fe-2-4` npm و ابزار ساخت Vite | اختیاری علامت نخورده | **هسته؛ انتخاب یک ابزار** — Node و npm و scripts/lockfile با Vite کافی‌اند؛ یادگیری هم‌زمان تمام package managerها و تنظیم دستی bundlerها لازم نیست. |

**کمبود یا جابه‌جایی لازم:** Node و scripts/lockfile و نصب/اجرای پروژه؛ تمرین CLI conflict جدا از GitHub Hello World.

**معیار پایان پیشنهادی:** مخزن را clone و اجرا کن، یک تغییر با PR بده و درخواست شکست‌خورده را از Network و stack trace پیدا کن.

#### fe-step-3 — JavaScript

**مسئلهٔ مرحله:** منبع زبان، DOM/events/storage را کامل پوشش نمی‌دهد؛ موضوعات پایهٔ شرط و حلقه زیر عنوان‌ها پنهان‌اند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-3-1` نوع داده، scope، closure و ماژول‌ها | اختیاری علامت نخورده | **تفکیک پایه از تعمیق** — نوع، شرط/حلقه، تابع و module پایه؛ closure با مثال ساده لازم است، بحث پیچیدهٔ hoisting/closure internals پیش از پروژه ضرورتی ندارد. شرط و حلقه اکنون در عنوان‌ها صریح نیستند. |
| `fe-3-2` آرایه، آبجکت، Map و Set | اختیاری علامت نخورده | **هسته** — array/object و map/filter/reduce کاربردی؛ Map/Set آشنایی اولیه. تبدیل‌های پیچیده یا حفظ همهٔ متدها لازم نیست. |
| `fe-3-3` رویدادها و به‌روزرسانی DOM | اختیاری علامت نخورده | **هسته** — DOM selection/update و رویداد، bubbling و delegation با مثال. همهٔ APIهای مرورگر یا جزئیات هر phase لازم نیست. |
| `fe-3-4` کد غیرهم‌زمان، fetch و مدیریت خطا | اختیاری علامت نخورده | **هسته؛ تدریجی** — Promise و async/await و مدیریت خطای شبکه؛ fetch برای خطای HTTP خودکار reject نمی‌شود. cancellation و race پاسخ در پروژهٔ جستجو معرفی شوند. |
| `fe-3-5` ذخیره‌سازی در مرورگر | اختیاری علامت نخورده | **هسته در حد نیاز** — local/sessionStorage و serialize/parse و انتخاب دادهٔ مناسب؛ IndexedDB و offline sync در شروع لازم نیست. storage مرورگر را محل خودکار نگهداری هر token ندان. |
| `fe-3-deep-1` تعمیق JavaScript Core | اختیاری | **تعمیق موجود با یک استثنا** — this/prototype در حد خواندن کد و event loop در حد ترتیب اجرا مفید است؛ generator/iterator سفارشی و event loop عمیق اختیاری بمانند. لازم نیست همه را به یک عمق بخوانی. |

**کمبود یا جابه‌جایی لازم:** منبع DOM و Web Storage، کنترل flow، error state و cancellation/race در درخواست جستجو.

**معیار پایان پیشنهادی:** یک رابط بدون framework با input، DOM و API بساز که loading/empty/error و تلاش دوباره را مدیریت کند.

#### fe-step-4 — TypeScript

**مسئلهٔ مرحله:** ترکیب هم‌زمان با React در متن اصلی مجاز است؛ props قبل از شناخت کامپوننت به تمرین نیاز دارد، نه افزودن قفل اجباری جدید.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-4-1` نوع‌های پایه و genericهای ساده | اختیاری علامت نخورده | **هسته** — نوع‌های پایه، union و narrowing، generic ساده؛ conditional/type-level programming سنگین لازم نیست. |
| `fe-4-2` تایپ props و پاسخ API | اختیاری علامت نخورده | **هم‌زمان با React** — پاسخ API را می‌توان بعد از JavaScript تایپ کرد؛ props وقتی کامپوننت را می‌شناسی. فایل اصلی هم یادگیری هم‌زمان TS و React را مجاز می‌داند؛ این یک قفل پیش‌نیاز جدید نیست. |
| `fe-4-3` narrowing، unknown و any | اختیاری علامت نخورده | **هسته** — unknown و narrowing مرز ورودی، پرهیز از any غیرضروری؛ منع مطلق هر any معیار عمومی مناسبی نیست. متن Markdown منع غیرضروری را می‌گوید، نه ممنوعیت مطلق. |
| `fe-4-4` خواندن خطاهای TypeScript | اختیاری علامت نخورده | **هسته** — خواندن خطای واقعی و اصلاح مدل نوع؛ خاموش‌کردن خطا با assertion بی‌دلیل یا افزایش پیچیدگی type هدف نیست. |
| `fe-4-5` اعتبارسنجی داده با Zod | اختیاری علامت نخورده | **اصل هسته؛ ابزار نمونه اختیاری** — اعتبارسنجی runtime ورودی لازم است؛ Zod یک انتخاب نمونه است. یادگیری عمیق همهٔ API آن یا افزودنش به هر پروژه لازم نیست. |
| `fe-4-deep-1` تعمیق TypeScript | اختیاری | **حفظ اختیاری با تفکیک** — Partial/Pick ساده هنگام نیاز عادی‌اند؛ conditional typeهای پیچیده و utilityهای سفارشی عمیق اختیاری بمانند. همهٔ utility typeها را «پیشرفته» فرض نکن. |

**کمبود یا جابه‌جایی لازم:** مرز type compile-time با validation runtime و یک ورودی واقعاً نامطمئن.

**معیار پایان پیشنهادی:** پاسخ API را با narrowing/validation امن مصرف کن؛ خطای نوع را با مدل درست رفع کن، نه assertion بی‌دلیل.

#### fe-step-5 — React

**مسئلهٔ مرحله:** معیار پایان به URL/server state اشاره می‌کند که بخشی از ماژول بعد است؛ مرجع runner تست هم کم است.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-5-1` کامپوننت، props، state و rendering | اختیاری علامت نخورده | **هسته** — کامپوننت/props و state/render پایهٔ Reactاند؛ مشتق‌کردن دادهٔ قابل محاسبه از props را از ساخت state اضافه جدا کن. |
| `fe-5-2` effects و محدودیت‌های آن | اختیاری علامت نخورده | **هسته** — effect برای هماهنگی با سیستم بیرونی، همراه dependency و cleanup؛ تبدیل هر محاسبه یا event handler به effect آموزش غلطی می‌سازد. |
| `fe-5-3` فرم controlled، فهرست و key | اختیاری علامت نخورده | **تفکیک تمرین‌ها** — فرم controlled و اعتبارسنجی یک تمرین؛ list/key یک تمرین کوتاه دیگر. key پایدار و معنای داده مهم‌تر از حفظ warning است. |
| `fe-5-4` context و ref | اختیاری علامت نخورده | **هسته در حد استفاده** — context برای نیاز واقعیِ اشتراک و ref برای DOM/مقدار mutable؛ global کردن هر state یا ref برای دور زدن render لازم نیست. |
| `fe-5-5` composition و error boundary | اختیاری علامت نخورده | **تفکیک عمق** — composition ساده و نمایش fallback خطا لازم‌اند؛ پیاده‌سازی دستی error boundary پیچیده یا همهٔ design patternها برای شروع لازم نیست. |
| `fe-5-6` الگوهای دریافت داده | اختیاری علامت نخورده | **هستهٔ اولیه؛ تعمیق در اپلیکیشن** — یک درخواست با loading/error و cleanup کافی است؛ caching و server-state library بعد از الگوی ساده. مستندات effects جای تمام معماری داده را نمی‌گیرد. |
| `fe-5-deep-1` تعمیق React | اختیاری | **حفظ اختیاری** — advanced composition، memoization همه‌جانبه و headless سفارشی پس از نیاز و اندازه‌گیری؛ ساخت design system یا بهینه‌سازی حدسی شرط React پایه نیست. |

**کمبود یا جابه‌جایی لازم:** cleanup/effect مناسب، state مشتق‌شده و تست رفتار با runner؛ URL/server state در اپلیکیشن واقعی تکمیل شود.

**معیار پایان پیشنهادی:** جریان فرم/فهرست را با state در جای مناسب بساز، effect غیرضروری نداشته باشد و یک تست تعامل مهم کاربر بگذرد.

#### fe-step-6 — ساخت اپلیکیشن واقعی

**مسئلهٔ مرحله:** پنج حوزهٔ بزرگ و تعداد زیادی ابزار در یک ماژول هستند؛ سه منبع موجود برای routing/auth/UI کافی نیستند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-6-1` داده و API | اختیاری علامت نخورده | **تفکیک؛ کاهش تعداد ابزار اجباری** — REST/fetch و خطا ابتدا؛ server state و TanStack Query بعد؛ service layer ساده. Axios یا fetch یکی کافی است و Zustand فقط برای client state واقعی نیاز است. |
| `fe-6-2` مسیریابی و احراز هویت | اختیاری علامت نخورده | **تفکیک؛ امنیت زودتر** — routing، حالت login و permission با قرارداد backend؛ JWT/OTP/refresh سه الزام هم‌زمان نیستند. کنترل مجوز واقعی در سرور و خطرهای token باید همین‌جا روشن شوند. |
| `fe-6-3` فرم‌ها و مدیریت خطا | اختیاری علامت نخورده | **هستهٔ محصول** — یک فرم با خطای فیلد، submit async، خطای سرور و retry؛ React Hook Form/Zod ابزارند. تمام فرم‌ها نیاز به هر دو کتابخانه ندارند. |
| `fe-6-4` وضعیت‌های رابط کاربری | اختیاری علامت نخورده | **تفکیک هسته و تعمیق** — loading/empty/error/disabled و responsive هسته؛ جستجو و pagination کاربردی؛ optimistic update برای مسئلهٔ مناسب و با rollback، نه الزام هر محصول. |
| `fe-6-5` ابزارهای ساخت رابط کاربری | اختیاری علامت نخورده | **انتخاب ابزار؛ کاهش انباشت** — یک رویکرد CSS و استفاده از کنترل‌های قابل‌دسترس کافی است؛ Tailwind، shadcn و Radix را سه پیش‌نیاز مستقل و اجباری نکن. motion ظریف اختیاری و سازگار با reduced motion باشد. |
| `fe-6-deep-1` تعمیق Building Real Applications | اختیاری | **حفظ اختیاری؛ نیازمحور** — WebSocket یا SSE بعد از نیاز real-time؛ upload و analytics نیز زیرواحد جدا با قرارداد داده. برای همهٔ پروژه‌ها لازم نیستند. |

**کمبود یا جابه‌جایی لازم:** منبع routing، قرارداد auth با backend، source برای UI انتخابی، خطای سرور و مجوز و تست سناریوهای شکست.

**معیار پایان پیشنهادی:** یک جریان کامل با فرم، API، routing و حالت غیرمجاز بساز؛ pending و شکست و بازیابی آن در آزمون رفتاری بررسی شوند.

#### fe-step-7 — Next.js و انتشار محصول

**مسئلهٔ مرحله:** Next، امنیت، performance و انتشار در یک مرحله؛ بازسازی اجباری پروژه با Next برای همهٔ انواع frontend لازم نیست.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-7-1` App Router و مرز سرور و کلاینت | اختیاری علامت نخورده | **هستهٔ مسیر Next؛ انتخابی در فرانت عمومی** — App Router و مرز Server/Client را برای پروژهٔ Next یاد بگیر؛ Next تنها راه ساخت و انتشار frontend نیست. متن اصلی نیز سبک‌کردن آن را مجاز دانسته است. |
| `fe-7-2` SSR، SSG، ISR و caching | اختیاری علامت نخورده | **تدریجی و نسخه‌دار** — تفاوت روش‌های رندر در حد انتخاب برای پروژه؛ caching/ISR عمیق و همهٔ مدل‌های هم‌زمان پیش‌نیاز شروع نیستند. رفتار مستندات با نسخهٔ پروژه تطبیق داده شود. |
| `fe-7-3` SEO و metadata | اختیاری علامت نخورده | **هسته برای صفحات عمومی؛ نیازمحور** — title/description و metadata پایه کافی است؛ SEO پیشرفته برای پنل داخلیِ خصوصی اولویت شروع ندارد. |
| `fe-7-4` Core Web Vitals و بهینه‌سازی | اختیاری علامت نخورده | **هستهٔ پایه؛ بهینه‌سازی پس از اندازه‌گیری** — اندازهٔ تصویر، بارگذاری فونت و JavaScript معقول؛ code splitting عمیق فقط برای bottleneck واقعی. حفظ نام metricها خروجی عملی نیست. |
| `fe-7-5` اندازه‌گیری پیش و پس از تغییر | اختیاری علامت نخورده | **هسته؛ معیار دقیق‌تر** — baseline و شرایط دستگاه/شبکه و چند بار سنجش ثبت شود؛ امتیاز Lighthouse به‌تنهایی تضمین بهبود تجربهٔ همهٔ کاربران نیست. |
| `fe-7-6` امنیت پایه در فرانت‌اند | اختیاری علامت نخورده | **انتقال بخشی به قبل؛ حفظ تعمیق** — XSS و token/auth/CSRF کنار فرم و auth مطرح شوند؛ threat modeling عمیق و ممیزی همهٔ وابستگی‌ها برای شروع لازم نیست. امنیت پایه را تکمیلی تلقی نکن. |
| `fe-7-7` انتشار و CI ساده | اختیاری علامت نخورده | **هستهٔ انتشار سبک** — یک deployment قابل تکرار و CI با build/typecheck/test مرتبط کافی است؛ چند میزبان، pipeline سازمانی و زیرساخت پیچیده لازم نیست. |

**کمبود یا جابه‌جایی لازم:** فصل صریح CI/deploy و امنیت متناسب با معماری؛ نسخهٔ Next و تمرین Playwright واقعی.

**معیار پایان پیشنهادی:** یک پروژه را منتشر کن، build و تست حیاتی در CI اجرا شود و اثر یک تغییر performance با baseline ثبت شود؛ Next در صورت انتخاب مسیر آن.

#### fe-step-8 — انتخاب مسیر تخصصی (اختیاری)

**مسئلهٔ مرحله:** شش تخصص عملاً فقط برای دو شاخه منبع دارند؛ optional بودن صحیح است و نباید همه به الزامات تبدیل شوند.

| شناسه و مبحث موجود | وضعیت فعلی | تصمیم پیشنهادی و حد مناسب عمق |
| --- | --- | --- |
| `fe-8-1` Design System | اختیاری | **حفظ اختیاری** — Design System تخصص مستقل است؛ قبل از یک محصول به ساخت کتابخانهٔ سفارشی headless یا monorepo نیاز نیست. مثال کوچک و معیار جدا لازم دارد. |
| `fe-8-2` بهینه‌سازی عملکرد وب | اختیاری | **حفظ اختیاری** — عمق performance پس از اندازه‌گیری یک محصول؛ منبع پایهٔ تکراری به‌تنهایی برنامهٔ تخصصی نیست. bottleneck و نتیجهٔ مشخص تعیین شود. |
| `fe-8-3` توسعهٔ فول‌استک محصول‌محور | اختیاری | **حفظ اختیاری؛ مسیر مستقل** — fullstack/MVP نیاز به API، داده و auth سمت سرور دارد؛ یک گرهٔ کوتاه جای رودمپ backend نیست. برای frontend عمومی الزام نیست. |
| `fe-8-4` رابط محصولات هوش مصنوعی | اختیاری | **حفظ اختیاری** — streaming/agent UI به قرارداد جریان، قطع/خطا/لغو و تجربهٔ کاربر نیاز دارد؛ توسعهٔ agent و همهٔ ابزارهای AI شرط ورود به frontend نیست. |
| `fe-8-5` React Native | اختیاری | **حفظ اختیاری؛ شاخهٔ موبایل** — React Native نیاز مسیر موبایل را پاسخ می‌دهد؛ پیش‌نیاز شغل frontend وب نیست. پروژه و setup مخصوص خودش لازم است. |
| `fe-8-6` بین‌المللی‌سازی، امنیت و حریم خصوصی | اختیاری | **تفکیک سطح‌ها؛ حفظ انتخابی بودن تخصص** — i18n و امنیت عمیق و privacy یک موضوع واحد نیستند؛ مبانی RTL و حفظ داده و امنیت باید در پروژه‌های فارسی رعایت شوند، تخصص عمیق هر شاخه اختیاری بماند. |

**کمبود یا جابه‌جایی لازم:** چهار شاخهٔ design system، fullstack، AI UI و i18n/security به منبع و هدف مستقل نیاز دارند.

**معیار پایان پیشنهادی:** یک تخصص انتخاب و پروژهٔ کوچک با معیار همان تخصص تعریف شود؛ ورود به همهٔ شاخه‌ها لازم نیست.


### منابع مستقیم برای چند کمبود مهم

این‌ها پیشنهاد تکمیل‌اند، نه تغییر انجام‌شده در سایت و نه الزام خواندن تمام مستندات:

- `ds-2-1`: [NumPy برای شروع](https://numpy.org/doc/stable/user/absolute_beginners.html)، برای array/shape/dtype و عملیات پایه؛ منبع صریح این موضوع در مرحلهٔ فعلی نیست.
- `ds-2-2`: [آموزش‌های شروع Pandas](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)، برای فایل، انتخاب، محاسبه، گروه‌بندی و ادغام داده‌ها.
- `ds-2-4`: [Window Functions در PostgreSQL](https://www.postgresql.org/docs/current/tutorial-window.html)، برای بخش مشخصی که SQLBolt پوشش صریح ندارد؛ SQL پایه پیش‌نیاز است.
- `lx-step-1`: فصل منتخب [OSTEP از نویسندگان کتاب](https://pages.cs.wisc.edu/~remzi/OSTEP/)، اگر واقعاً قرار است concurrency/memory تدریس شود؛ تمام کتاب پیش‌نیاز CLI نیست.
- `fe-3-3` و `fe-3-5`: [Dynamic scripting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) و [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) برای نیاز مرورگر که مرجع زبان JavaScript جای آن نیست.
- `fe-6-2`: یک انتخاب نمونهٔ router و [راهنمای Routing در React Router](https://reactrouter.com/start/declarative/routing)؛ انتخاب router باید در تمرین مشخص باشد، نه اینکه چند router الزام شوند.
- تست React و مرحلهٔ انتشار: [شروع Vitest](https://vitest.dev/guide/) و [Writing tests در Playwright](https://playwright.dev/docs/writing-tests)، به‌جای اتکا به صفحهٔ معرفی library یا نصب runner.

### کمبودهایی که با افزودن کتابخانه حل نمی‌شوند

| مسیر | آنچه اکنون کم است | آنچه نباید برای جبران بی‌دلیل به هسته اضافه شود |
| --- | --- | --- |
| Django | تست همراه قابلیت، permission مالکیت، قرارداد خطا، transaction/constraint برای پروژهٔ رزرو، تمرین انتشار و منبع دقیق ORM | چند cache/broker، همهٔ اصول معماری، همهٔ سبک‌های View و چند روش deployment هم‌زمان |
| علم داده | شاخهٔ خروج روشن برای تحلیل‌گر، منبع NumPy/SQL پیشرفته، baseline، معیار regression، pipeline بدون leakage و بازتولید نتیجه | هر سه boosting، کل calculus/eigenvalue، اجبار RAG/PyTorch یا FastAPI برای تمام تحلیل‌گرها |
| لینوکس | راه‌اندازی محیط تمرین، Bash scripting واقعی، چرخهٔ container، خواندن log و شبکه/volume | kernel internals، حل نظری deadlock، سفارشی‌سازی عمیق shell یا Kubernetes/کل زیرساخت cloud |
| فرانت‌اند | منبع DOM/storage/CSS basics، routing/auth و UI انتخابی، تست runner واقعی، امنیت همراه فرم/auth و منبع شاخه‌های تخصصی | چند state manager، fetch و Axios هم‌زمان، همهٔ کتابخانه‌های UI، memoization سراسری یا الزام Next/AI/موبایل برای همه |

انتخاب‌های فعلیِ درست را هم حفظ کنیم: OOP در شروع دیتا، چهار شاخهٔ AI، تعمیق‌های فرانت‌اند و کل ماژول تخصص‌های فرانت‌اند **از قبل اختیاری‌اند**. درخت علم داده هم بنر خروج برای Data Analyst دارد؛ پیشنهاد این است که آن خروج به شاخه/معیار واضح‌تری تبدیل شود، نه اینکه نبود مطلق هر اشاره به تحلیل‌گر ادعا شود.

<a id="claims"></a>
## ۵. خطاهای علمی، ادعاهای بدون شاهد و لحن گمراه‌کننده

| محل دقیق | متن/ادعای موجود | مشکل و متن پیشنهادی |
| --- | --- | --- |
| `dj-1-2` | همهٔ Modelها و Viewها کلاس‌اند | نادرست دربارهٔ View. «مدل‌ها کلاس‌اند؛ View می‌تواند تابعی یا کلاسی باشد.» [مرجع View تابعی](https://docs.djangoproject.com/en/5.2/topics/http/views/) |
| `dj-1-1` | Set/Dict: O(1)، List: O(n)، سؤال ثابت مصاحبه | برای lookup مبتنی بر hash، O(1) معمولاً بیان حالت متوسط است؛ قید و نوع عملیات روشن شود. «همیشه در مصاحبه» شاهد ندارد. |
| `dj-step-6.description` | ۹۵٪ شرکت‌ها DRF می‌خواهند | عدد و دامنهٔ بازار/سال منبع ندارد. «DRF یکی از روش‌های متداول ساخت REST API با Django است؛ انتخاب بر اساس پروژه.» |
| `ds-step-2.description` | ۸۰٪ زمان متخصص داده صرف SQL و پاک‌سازی است | نسبت ثابت بدون منبع/جامعهٔ آماری. «استخراج و پاک‌سازی بخش مهمی از بسیاری از پروژه‌های داده است.» |
| `ds-2-4` | Window Functions در ۱۰۰٪ مصاحبه‌ها | مطلق و بی‌سند. «در تحلیل داده کاربرد دارد؛ پس از SQL پایه با تمرین بیاموز.» |
| `dj-7-1` | prefetch_related برای ManyToMany | توضیح ناقص است، نه اینکه استفاده برای M2M غلط باشد. prefetch روابط دیگر را هم پوشش می‌دهد؛ select_related برای روابط تک‌مقداری join می‌زند. [مرجع QuerySet](https://docs.djangoproject.com/en/stable/ref/models/querysets/) |
| `ds-2-1` | vectorization ده‌ها برابر سریع‌تر است | میزان و حتی برتری به dtype، اندازه، الگوریتم و overhead بستگی دارد؛ یک benchmark کوچک با شرایطش ارائه شود. |
| `ds-3-3` | چرا median برای درآمد/خانه بهتر است؟ | به توزیع و سؤال بستگی دارد. «برای دادهٔ چوله یا پرت، مقایسه کن میانگین و میانه چه چیزی می‌گویند.» |
| `ds-5-6` | هر normalization پیش از split باعث leakage می‌شود | دقیق‌تر: «برازش scaler/imputer بر کل داده می‌تواند اطلاعات test را وارد train کند.» تبدیل بدون fit و مستقل برای هر ردیف را با برازش روی کل dataset یکی ندان. [راهنمای pitfalls](https://scikit-learn.org/stable/common_pitfalls.html) |
| `ds-step-6.description` | مدل فقط در Notebook ارزش تجاری ندارد | نادرست به‌صورت کلی؛ خروجی تحلیل و notebook بازتولیدپذیر می‌تواند ارزش داشته باشد. برای نقش serving، API/دمو خروجی مناسب‌تری است. |
| `ds-7-3` | ترندترین حوزهٔ فعلی بازار کار | دادهٔ بازار، منطقه و تاریخ ندارد. «یک شاخهٔ تخصصی برای ساخت محصول مبتنی بر مدل زبانی.» |
| `ds-1-4` | GPU رایگان | امکان/سهمیهٔ محیط تمرین باید بررسی شود؛ تضمین همیشگی منابع نیست و برای شروع Pandas/SQL لازم نیست. [FAQ رسمی Colab](https://research.google.com/colaboratory/faq.html) |
| `lx-1-1` | چرا ارتباط تردها سریع‌تر است؟ | پرسش برتری همیشگی را القا می‌کند. «اشتراک حافظه و هزینهٔ هماهنگی را در این مثال مقایسه کن»؛ IPCهای مختلف را یک حکم واحد نده. |
| `lx-3-1` | کانتینر kernel میزبان را شریک است | برای کانتینر لینوکسی، kernel میزبان لینوکسی ملاک است؛ در Docker Desktop ممکن است VM واسط باشد. مرز مثال مشخص شود، نه آموزش عمیق مجازی‌سازی. [مستندات Docker Desktop](https://docs.docker.com/desktop/setup/install/linux/) |
| پروژهٔ پیشرفتهٔ Django | پوشش تست بالای ۷۰٪ | coverage به‌تنهایی کیفیت assertion، auth و شکست‌ها را ثابت نمی‌کند؛ رفتارهای حیاتی فهرست و تست شوند. |
| معرفی منابع مختلف | بهترین دنیا، شاهکار، یادگیری کل Git در دو ساعت، ۵۰ خط کد | رتبه‌بندی و زمان/حجم تضمینی حذف شوند؛ سرفصل، پیش‌نیاز، تمرین و محدودیت منبع جای آن بیاید. |

نکات خودِ فایل فرانت‌اند را هم دقیق بخوانیم: Markdown می‌گوید «از any غیرضروری پرهیز کن»، نه منع مطلق هر any؛ سبک‌کردن Next.js را برای پروژهٔ نامرتبط هم مجاز می‌داند. نسخهٔ انگلیسی PDF تعبیر سخت‌گیرانه‌تری مثل صفر any دارد. در تدوین مشترک، هدف «پنهان نکردن خطای نوع و اعتبارسنجی ورودی» باشد. به متن فعلی ادعای «همیشه Next.js» نسبت ندهیم که صریحاً خلافش را هم گفته است.

برای resampling نیز [راهنمای رسمی imbalanced-learn](https://imbalanced-learn.org/stable/common_pitfalls.html) مسئلهٔ leakage را توضیح می‌دهد؛ oversampling کل داده قبل از split نباید در تمرین Churn به‌عنوان روش صحیح آموزش داده شود.

اصل منابع رسمی: امنیت/آزمون باید به قابلیت مربوط نزدیک باشد؛ برای نمونه [مجوزهای DRF](https://www.django-rest-framework.org/api-guide/permissions/) با صرف login فرق دارد، [امنیت Django](https://docs.djangoproject.com/en/stable/topics/security/) هم حفاظت مطلق برای هر raw SQL یا HTML unsafe را وعده نمی‌دهد. برای [pickle/joblib](https://scikit-learn.org/stable/model_persistence.html)، artifact ناشناس قابل اعتماد نیست. در React، [کاربرد مناسب effect](https://react.dev/learn/you-might-not-need-an-effect) و در مرورگر [رسیدگی به خطای HTTP در fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) باید در تمرین دیده شوند.

<a id="projects"></a>
## ۶. ارزیابی تمام پروژه‌های پیشنهادی و ایستگاه‌های بازار کار

این جدول پیشنهاد بازنویسی دامنهٔ تمرین است؛ پروژه‌ها در سایت حذف یا عوض نشده‌اند.

| پروژهٔ فعلی | ایراد یا وابستگی پنهان | دامنهٔ متعادل و معیار بهتر |
| --- | --- | --- |
| Django، مبتدی: «پلتفرم وبلاگ و مدیریت تسک تیمی» | عنوان وبلاگ و Task Tracker دو محصول متفاوت را مخلوط کرده؛ auth/comment/deadline برای اولین View زیاد است. | یکی را انتخاب کن؛ نسخهٔ اول CRUD تسک، سپس مالکیت و comment. تست ورودی نامعتبر و دسترسی کاربر دوم. |
| Django، متوسط: رزرو/فروشگاه | inventory و جلوگیری از race به transaction/constraint و سناریوی هم‌زمان نیاز دارد که در هسته صریح نیست. | یک مسئلهٔ رزرو یا خرید؛ عدم رزرو تکراری/فروش بیش از موجودی با تست مشخص. JWT الزام همهٔ نسخه‌ها نباشد. |
| Django، پیشرفته: cache+Celery+Docker | چند فناوری و معیار arbitrary coverage در یک تمرین‌اند. | ابتدا API آزمون‌شده و مستقر؛ cache یا task فقط با نیاز اندازه‌گیری‌شده، همراه invalidation یا retry. |
| دیتا، مبتدی: داشبورد بازار کار ایران | جمع‌آوری آگهی، پاک‌سازی، تحلیل حقوق و Streamlit چهار مهارت‌اند؛ جمع‌آوری داده در مباحث آموزش داده نشده است. | ابتدا CSV آمادهٔ کوچک و EDA با سؤال روشن؛ جمع‌آوری و دمو خروجی‌های بعدی و انتخابی. |
| دیتا، متوسط: churn با XGBoost | SMOTE، دو مدل boosting و serving زیاد است؛ SMOTE پیش‌فرض و قبل از split خطاست. | baseline، یک مدل و metric مناسب؛ balancing تنها در صورت نیاز و داخل train/fold. preprocessing مشترکِ inference حفظ شود. |
| دیتا، پیشرفته: RAG جزوات | منبع اختصاصی retrieval/evaluation و معیار کیفیت ندارد؛ صرف اتصال LangChain و vector DB پایان کار نیست. | مجموعهٔ کوچک سؤال/سند و baseline retrieval، پاسخ با ارجاع و رفتار هنگام نبود پاسخ؛ مسیر مستقل پس از مبانی. |
| لینوکس، مبتدی: Dotfiles و Zsh/Tmux | بیشتر شخصی‌سازی است؛ scripting/log/SSHِ کاربردی را لزوماً ثابت نمی‌کند و Tmux در مباحث مرحله‌ها صریح نیست. | به تمرین اختیاری تبدیل شود؛ تمرین پایه، script کوتاه برای فایل/لاگ با exit code و راهنمای اجرا باشد. |
| لینوکس، متوسط: Dockerfile چندمرحله‌ای+DB+Nginx | multi-stage قبل از نیاز، بهینه‌سازی زودهنگام است؛ ساخت خود app می‌تواند هدف تمرین را عوض کند. | app آماده + DB با volume و port/network مشخص؛ تشخیص خطای اتصال و ماندگاری داده. بعد multi-stage. |
| فرانت‌اند، مبتدی: داشبورد داده‌محور | جدول، جستجو، sorting، pagination و React/TS برای روز اول مبتدی نیستند. این سطح‌بندی در پیاده‌سازی قبلی اضافه شد؛ فایل مبنا برای سه نوع پروژه سطح تعیین نکرده است. | نسخهٔ JS ساده در ماژول ۳؛ نسخهٔ React/TS با حالت‌های خطا در ماژول ۶. برچسب‌ها «نوع پروژه» یا سطح پیش‌نیاز واقعی باشند. |
| فرانت‌اند، متوسط: اپ فرم‌محور | بدون سناریوی واقعی ممکن است فقط نمایش فرم شود؛ همهٔ فرم‌ها به RHF+Zod+MSW هم‌زمان نیاز ندارند. | یک فرم با خطای فیلد و خطای API و retry، keyboard/focus و تست جریان submit. ابزار بر اساس نیاز. |
| فرانت‌اند، پیشرفته: جریان کاری محصول | وضعیت auth در UI با امنیت backend فرق دارد؛ مهاجرت اجباری به Next هدف همهٔ frontendها نیست. | مسیر مجاز/غیرمجاز و شکست API در تست E2E، یک deploy و توضیح معماری؛ Next در مسیر انتخابی خودش. |

### چهار بنر فعلیِ آمادگی شغلی

| محل | مسئلهٔ متن فعلی | بازنویسی پیشنهادی |
| --- | --- | --- |
| `dj-step-6.milestoneBanner` | «کاملاً آماده» پس از دو پروژه، قبل از ورود تست و انتشار به هسته | «اگر CRUD، validation، مجوز، تست پایه و توضیح پروژه را مستقل انجام می‌دهی، می‌توانی برای فرصت‌های متناسب اقدام کنی و شکاف‌هایت را ادامه بدهی.» |
| `ds-step-3.milestoneBanner` | مسیر تحلیل‌گر وجود دارد، اما ابزار BI به‌صورت ناگهانی در بنر اضافه می‌شود و تمرین/منبع مستقل ندارد. | خروج شاخهٔ تحلیل‌گر با SQL، EDA، گزارش و یک ابزار متناسب با نقش؛ معیار پروژه به‌جای صرف پایان شمارهٔ مرحله. |
| `ds-step-5.milestoneBanner` | دو پروژه به‌تنهایی معیار عمومی جونیور/کارآموزی نیست. | توانایی split درست، baseline، evaluation، بازتولید و توضیح محدودیت‌ها سنجیده شود؛ فرصت شغلی به نقش و شرکت وابسته است. |
| `lx-step-3.milestoneBanner` | داشتن Dockerfile به‌تنهایی «یک سر و گردن بالاتر» را ثابت نمی‌کند. | «می‌توانی محیط پروژه را تکرارپذیر اجرا و یک خطای سرویس را عیب‌یابی کنی.» |

### راهنما، AI و معیار پایان فرانت‌اند

تفکیک هسته/تعمیق، انتخاب نقطهٔ شروع و اجازهٔ یادگیری هم‌زمان TS/React مناسب‌اند. این ساختار حفظ شود. «بدون کمک» در آزمون یادگیری می‌تواند تمرین مفیدی باشد، اما استفاده از مستندات را نشانهٔ ناتوانی نگیریم. معیار حرفه‌ای‌تر، توان توضیح تصمیم، اصلاح خطا و آزمون نتیجه است. نقش AI ابزار کمکی بماند؛ هیچ حساب یا سرویس پولی AI نباید پیش‌نیاز عبور از ماژول باشد. فهرست آمادگی در PDF یک ابزار خودارزیابی است، نه تضمین استخدام. در اسلاید ۱۳ PDF انگلیسی، تعبیر قطعیِ شکست در مصاحبه با ردکردن یادگیری از طریق AI هم بیش از حد مطلق است؛ متن احتمالی و مبتنی بر توان توضیح/رفع خطا، مانند نسخهٔ ملایم‌تر Markdown، دقیق‌تر است.

معیار پایانِ فعلی React از URL/server state سؤال می‌کند؛ این بخش با ماژول ۶ کامل شود. معیار Next.js نیز انتشار و سنجش را از «مهاجرت حتمی تمام افراد به Next» جدا کند. برای هر شش تخصص ماژول ۸، فقط در صورت انتخاب آن شاخه، معیار پایان مستقل لازم است.

<a id="standard"></a>
## ۷. قالب مشترک عملی و ترتیب اصلاح

**یک‌دست شدن یعنی خروجی و سطح عمق قابل مقایسه، نه تعداد مرحله یا ابزار برابر.**

هر واحد یادگیری:

1. یک هدفِ قابل مشاهده، با پیش‌نیاز مشخص.
2. معمولاً ۳ تا ۶ گروه مبحث هم‌سطح؛ عنوان کوتاه درخت و جزئیات در پنل. این تعداد راهنماست، نه دلیل حذف محتوا.
3. بخش تعمیق جدا با توضیح زمان نیاز؛ موضوعی که از قبل اختیاری است دوباره به‌عنوان الزام معرفی نشود.
4. یک منبع شروع، یک تمرین و در صورت نیاز یک مرجع. یک منبع می‌تواند دو نقش داشته باشد؛ نیاز به سه کارت تکراری نیست.
5. معیار پایان با رفتار قابل بررسی: نمونهٔ ورودی/خروجی، شکست/بازیابی و توضیح تصمیم.
6. محدودیت نسخه و دسترسی روشن؛ دورهٔ فارسی، مرجع رسمی انگلیسی و تمرین تعاملی نقش یکسان ندارند.

برای منابع، نوع محتوا از زبان جدا شود: `kind` (ویدئو/متن/مستندات/تمرین)، `language`، `role` (شروع/تمرین/مرجع/تعمیق)، `level`، `cost/access`، `version`، `lastAccessCheckedAt` و `lastContentReviewedAt`. ثبت تاریخ دسترسی نباید به معنی تأیید محتوا نمایش داده شود. برای پوشش منبع نیز شناسهٔ موضوعات تحت پوشش و بخش‌های خارج از دامنه ثبت شود.

**اصلاح فوری:** سه ۴۰۴، آزمایشگاه بازنشسته، پنج لینک جستجو، کارت ORM/DRF، عنوان‌های چنددوره‌ای با یک URL، سه لینک عمومی گردآورنده و ادعاهای علمی/درصدیِ نادرست.

**اصلاح بعدی:** افزودن فصل‌های مستقیم و کمبودهای واقعی؛ تست/امنیت نزدیک قابلیت، تقسیم مرحلهٔ ۷ Django، مرحلهٔ ۲/۵ دیتا و ماژول ۶ فرانت‌اند؛ روشن کردن شاخهٔ تحلیل‌گر و دامنهٔ پایهٔ لینوکس.

**اصلاح نهایی:** بازنویسی معیارها و پروژه‌ها، سبک کردن زنجیرهٔ ابزارها، انتخاب یک روش برای هر هدف و تکمیل تنها تخصص‌های انتخاب‌شده. برای یک‌دستی، مفاهیم درست حذف نمی‌شوند؛ دامنه و ترتیب و منبعشان اصلاح می‌شود.

## ۸. کنترل کامل‌بودن این ممیزی

این سند از داده‌های فعلی ساخته شده و پوشش شناسه‌ها کنترل شده است: **۷۲ ارزیابی منبع، ۱۲۸ تصمیم مبحث، ۲۷ ارزیابی مرحله، ۱۱ پروژه، چهار بنر شغلی، سه لینک گردآورنده و سه فایل اصلی**. فایل JSON همراه امکان تطبیق شناسه‌ها با دادهٔ سایت را می‌دهد. متن منبع سایت در این نوبت دست‌نخورده است؛ تست build رابط برای تغییر صرفاً مستندات دوباره اجرا نشده است. محدودهٔ نامطمئن، پخش/اجرای منابع خارجی است که در بالا صریح و منبع‌به‌منبع ثبت شده؛ این محدودیت با «لینک سالم و محتوای کامل تأیید شد» پوشانده نشده است.

