type CommunityDetails = {
  name: string;
  communityUrl: string | null;
  questionsUrl: string | null;
  founder: {
    name: string | null;
    handle: string;
    contactUrl: string | null;
  };
  purpose: string[];
};

// Contact details and the founding story are supplied by the community owner.
export const community: CommunityDetails = {
  name: "UniDev",
  communityUrl: "https://t.me/unidev_community",
  questionsUrl: "https://t.me/unidev_community/117",
  founder: {
    name: null,
    handle: "@Graph_ql",
    contactUrl: "https://t.me/Graph_ql",
  },
  purpose: [
    "یونی‌دو برای کمک به دانشجوهای رشتهٔ کامپیوتر شکل گرفت؛ برای کم‌کردن فاصلهٔ میان آنچه در دانشگاه یاد می‌گیریم و مهارت‌هایی که برای ورود به بازار کار به آن‌ها نیاز داریم. دانش دانشگاهی پایهٔ ارزشمندی است و تجربهٔ ساختن، حل مسئله و کار گروهی کمک می‌کند از این پایه در دنیای واقعی استفاده کنیم.",
    "می‌خواهیم فضایی بسازیم که در آن از تجربه‌های هم یاد بگیریم، سؤال‌هایمان را مطرح کنیم و آموخته‌هایمان را به عمل برسانیم. برگزاری جلسه‌های اشتراک دانش و همکاری روی پروژه‌های متن‌باز، راه‌هایی هستند که برای رسیدن به این هدف دنبال می‌کنیم؛ فرصتی برای تمرین مهارت‌های فنی، گفت‌وگو دربارهٔ کد و تجربهٔ همکاری در یک تیم.",
    "نقشه‌راه‌های یونی‌دو هم بخشی از همین هدف‌اند: روشن‌تر کردن مسیر یادگیری و پیوند دادن مباحث به منابع و پروژه‌های عملی. می‌خواهیم دانشجوها با شناخت بهتر مسیرشان، تجربهٔ بیشتر و آمادگی بالاتری برای کارآموزی، پیوستن به شرکت‌ها و ورود به فضای حرفه‌ای قدم بردارند.",
  ],
};
