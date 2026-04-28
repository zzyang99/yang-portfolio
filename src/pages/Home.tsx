/**
 * ZHOU Zhengyang — Journalism Portfolio
 * DESIGN: Minimal Editorial
 * Black (#1A1A1A), White (#FFFFFF), Grey (#808080), Green accent (#4A7C59)
 * Fonts: Playfair Display (display), Lora (body), DM Sans (UI)
 * Layout: Clean, minimal, focus on content
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Mail, ExternalLink, ChevronDown, Video, BookOpen, Camera } from "lucide-react";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663447045994/mr46deaBnMdpxpQw777kcH/DSC02515_83272c33.jpg";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663447045994/mr46deaBnMdpxpQw777kcH/hero-bg-texture-QkXmrBto4e9xPJM8NZLozz.webp";

// ─── Work Items ──────────────────────────────────────────────────────────────
const workItems = {
  audio: {
    title: "Audio",
    icon: () => <span>🎙</span>,
    items: [
      {
        id: "podcast",
        titleEn: "Podcast: Sunshine Park (Season 5)",
        titleZh: "放晴早安播客（第五季）",
        descEn: "A solutions journalism podcast telling stories of those who work to solve problems around the world",
        descZh: "一档解困式报道播客，讲述那些努力解决问题的人们的故事。",
        isCategory: true,
        episodes: [
          {
            id: "ep1",
            titleZh: "s5e3. 流水山城：让旧物在大学校园活起来",
            titleEn: "s5e3. Lau Seoi Saan Sing: Building Community Through Recycling",
            url: "https://sunshine.fireside.fm/s5e3",
          },
          {
            id: "ep2",
            titleZh: "s5e13. 厨尊灶台，如何蒸腾起残障人士的尊严",
            titleEn: "s5e13. Dignity Kitchen: Brewing Dignity of the Disabled",
            url: "https://sunshine.fireside.fm/s5e13",
          },
          {
            id: "ep3",
            titleZh: "s5e47. 一次旅行，让我们看到这个国家在电诈之外的另一面",
            titleEn: "s5e47. Traveling in Myanmar: Stories Beyond Scams",
            url: "https://sunshine.fireside.fm/s5e47",
          },
          {
            id: "ep4",
            titleZh: "s5e54. 给有自闭症的学生补习是一种什么体验",
            titleEn: "s5e54. What Is It Like to Tutor Students with ASD",
            url: "https://sunshine.fireside.fm/s5e54",
          },
          {
            id: "ep5",
            titleZh: "s5e80. 放晴早安幕后大揭秘！第五季制作人员采访手记",
            titleEn: "s5e80. Behind the Voice: In Conversation With the Producers",
            url: "https://sunshine.fireside.fm/s5e80",
          },
        ],
      },
    ],
  },
  video: {
    title: "Video",
    icon: Video,
    items: [
      {
        id: "sha-tau-kok",
        titleEn: "Life After Tourism Promotion in Sha Tau Kok",
        titleZh: "旅遊熱潮過後，還有人去沙頭角嗎？",
        descEn: "An infotainment video exploring Sha Tau Kok after the 2024 tourism surge faded. What changed for local residents, business owners, and tourism workers when the crowds moved on?",
        descZh: "影片记录了2024年旅游热潫脱去后，当下沙头角的旅游业状况。当人群散去时，当地居民、商家和文化工作者的生活发生了什么变化？",
        url: "https://youtu.be/5CaSj4lZWyU",
        date: "2026",
      },
    ],
  },
  written: {
    title: "Written",
    icon: BookOpen,
    items: [
      {
  id: "seeing-myanmar-beyond-the-scams",
  titleZh: "看見詐騙陰影之外的緬甸",
  titleEn: "Seeing Myanmar Beyond the Scams",
  descZh: "透過去緬甸旅行的中國人、當地旅遊業從業者，看見公眾敘事如何遮蔽更複雜的現實。",
  descEn: "Chinese travellers are returning to Myanmar despite the country’s online reputation as a “paradise for scam syndicates”.",
  publication: "Varsity",
  date: "Apr 2026",
  url: "https://varsity.com.cuhk.edu.hk/index.php/2026/04/seeing-myanmar-beyond-the-scams/",
},
      {
        id: "luo-fangdan",
        titleZh: "对话罗方丹：分裂时代的写作弥合尝试",
        titleEn: "In Conversation with Luo Fangdan: Writing as an Attempt to Bridge Division",
        descZh: "与记者罗方丹的访谈，探讨非虚构写作、媒体伦理、审查制度，以及记者如何弥合社会分裂。",
        descEn: "An interview with journalist Luo Fangdan exploring non-fiction writing, media ethics, censorship, and how journalists can bridge societal divisions.",
        publication: "围炉 (Weilu)",
        date: "May 27, 2024",
        url: "https://mp.weixin.qq.com/s/DSlMFKUKYXRz0iPtYd1-5g",
      },
    ],
  },
photography: {
  title: "Photography",
  icon: Camera,
  items: [],
},
};

// ─── Components ──────────────────────────────────────────────────────────────

function WorkCategory({ category, items }: { category: (typeof workItems)[keyof typeof workItems]; items: any[] }) {
  const IconComponent = category.icon;
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 border-b-2 border-accent pb-3">
        {typeof category.icon === 'function' ? (category.icon as any)() : (() => { const Icon = category.icon as any; return <Icon className="w-6 h-6 text-accent" />; })()}
        <h3 className="text-2xl font-bold font-display text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id}>
            {(item as any).isCategory ? (
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6 py-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.titleZh}</h4>
                      {item.titleEn && <p className="text-sm text-muted-foreground italic">{item.titleEn}</p>}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.descZh}</p>
                    {item.descEn && <p className="text-sm text-foreground/70 leading-relaxed italic">{item.descEn}</p>}
                  </div>
                </div>
                <div className="space-y-3 ml-6">
                  {(item as any).episodes?.map((episode: any) => (
                    <div key={episode.id} className="border-l-2 border-accent/50 pl-4 py-2">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{episode.titleZh}</p>
                          {episode.titleEn && <p className="text-xs text-muted-foreground italic">{episode.titleEn}</p>}
                        </div>
                        <a
                          href={episode.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                        >
                          <span className="text-xs font-medium">Listen</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border-l-4 border-accent pl-6 py-4">
                <div className="space-y-3">
                 <div>
  {item.id === "seeing-myanmar-beyond-the-scams" ? (
    <>
      <h4 className="text-lg font-semibold text-foreground">{item.titleEn}</h4>
      <p className="text-sm text-muted-foreground">{item.titleZh}</p>
    </>
  ) : (
    <>
      <h4 className="text-lg font-semibold text-foreground">{item.titleZh}</h4>
      {item.titleEn && (
        <p className="text-sm text-muted-foreground">{item.titleEn}</p>
      )}
    </>
  )}
</div>
                  
                  {item.id === "seeing-myanmar-beyond-the-scams" ? (
  <>
    {item.descEn && (
      <p className="text-sm text-foreground/80 leading-relaxed italic">
        {item.descEn}
      </p>
    )}
    <p className="text-sm text-foreground/70 leading-relaxed italic">
      {item.descZh}
    </p>
  </>
) : (
  <>
    <p className="text-sm text-foreground/80 leading-relaxed italic">
      {item.descZh}
    </p>
    {item.descEn && (
      <p className="text-sm text-foreground/70 leading-relaxed italic">
        {item.descEn}
      </p>
    )}
  </>
)}
                  {item.publication && <p className="text-xs text-muted-foreground mt-2">Published in {item.publication} • {item.date}</p>}
                  {item.date && !item.publication && <p className="text-xs text-muted-foreground mt-2">{item.date}</p>}
                  {(item as any).images && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {(item as any).images.map((image: any, idx: number) => (
                        <div key={idx} className="overflow-hidden rounded-lg">
                          <img
                            src={image.url}
                            alt={image.caption || `Photo ${idx + 1}`}
                            className="w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          {image.caption && <p className="text-xs text-muted-foreground mt-2">{image.caption}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-accent hover:text-accent/80 transition-colors"
                    >
                      <span className="text-sm font-medium">View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// ─── Main Component ──────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof workItems>("video");
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Navigation ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex justify-between items-center py-4">
          <a href="#" className="text-lg font-bold font-display text-foreground">
            周正洋
          </a>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 bg-white" style={{backgroundColor: '#e2e3de'}}
      >
        <div className="container relative z-10 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{color: '#667a6c'}}>JOURNALIST</p>
              <h1 className="text-6xl md:text-7xl font-black text-foreground leading-none mb-2" style={{letterSpacing: '-0.02em', fontFamily: 'Georgia, serif'}}>
                ZHOU<br />
                <span style={{color: '#667a6c', fontFamily: 'Georgia, serif'}}>Zhengyang</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-foreground/60 font-serif tracking-wide">周正洋</p>
            </div>
            <p className="text-base leading-relaxed text-foreground/80 max-w-md">
              Psychology student at CUHK, minoring in journalism. Exploring storytelling across video, audio, photography, and written formats.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#work"
                className="px-6 py-3 font-medium rounded border-2 hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#e2e3de', color: '#667a6c', borderColor: '#667a6c'}}
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 font-medium rounded hover:bg-opacity-10 transition-colors"
                style={{borderColor: '#667a6c', color: '#667a6c'}}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={HERO_PORTRAIT}
              alt="ZHOU Zhengyang"
              className="w-full shadow-lg"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* ─── About Section ──────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">ABOUT</p>
            <div className="prose prose-sm max-w-none text-foreground/80 space-y-4">
              <p>
                I am a final-year psychology student at The Chinese University of Hong Kong, minoring in Journalism and Communication. After lots of trial and error, I found myself the happiest when learning new things and creating, so I made up my mind to work as a journalist after graduation.
              </p>
              <p>
                I am interested in issues surrounding marginalized communities, diasporic identities, and social affairs across mainland China, Hong Kong, and Taiwan. Having studied in mainland China, Hong Kong, Taiwan, and the United States, I bring a cross-regional perspective to the way I tell stories. Beyond journalism and writing, I am also drawn to film, musical theatre, and backpacking, all of which continue to shape my curiosity and storytelling.
              </p>
              <p>
                I am currently seeking opportunities in journalism, be it reporting, production or collaborative projects, where I can continue developing my craft in both Chinese and English.
              </p>
              <hr className="my-8" />
              <p>
                我目前就读于香港中文大学心理学专业四年级，辅修新闻与传播。在大学期间有过很多探索和试错，最终发现我在学习新知识和创作的时候最幸福，于是决定毕业后成为一名记者。
              </p>
              <p>
                我关注弱势群体、离散社群、以及中港台社会议题。曾在中国大陆、香港、台湾与美国求学，这些跨地域的生活与学习经历也塑造了我理解社会、观察人与地方关系的方式。除了新闻与写作，我也喜欢电影、音乐剧和背包旅行，并不断从不同的文化经验中寻找讲述故事的灵感。
              </p>
              <p>
                目前，我正在寻找新闻报道、内容制作或其他合作机会，希望继续以中文和英文打磨自己的新闻实践。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Work Section ───────────────────────────────────────────────────────── */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">SELECTED WORK</p>
          <h2 className="text-4xl font-bold font-display text-foreground mb-12">My Work</h2>

          {/* ─── Work Tabs ──────────────────────────────────────────────────────── */}
          <div className="flex gap-2 mb-12 border-b border-border pb-4 flex-wrap">
            {Object.entries(workItems).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as keyof typeof workItems)}
                  className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                    activeTab === key
                      ? "text-accent border-b-2 border-accent -mb-4 pb-6"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {typeof category.icon === 'function' ? (category.icon as any)() : (() => { const Icon = category.icon as any; return <Icon className="w-4 h-4" />; })()}
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* ─── Audio Tab ──────────────────────────────────────────────────────── */}
          {activeTab === "audio" && (
            <WorkCategory category={workItems.audio} items={workItems.audio.items} />
          )}

          {/* ─── Video Tab ──────────────────────────────────────────────────────── */}
          {activeTab === "video" && (
            <WorkCategory category={workItems.video} items={workItems.video.items} />
          )}

          {/* ─── Written Tab ─────────────────────────────────────────────────────── */}
          {activeTab === "written" && (
            <WorkCategory category={workItems.written} items={workItems.written.items} />
          )}

          {/* ─── Photography Tab ─────────────────────────────────────────────────── */}
          {activeTab === "photography" && (
            <div className="space-y-8">
              <WorkCategory category={workItems.photography} items={workItems.photography.items} />
              <div className="mt-8">
  <a
    href="https://instagram.com/yangswayofseeing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors italic"
  >
    <span className="text-lg"></span>
    <span>
      For my photography works, please visit Instagram
      <span className="ml-1 font-medium not-italic">@yangswayofseeing</span>
    </span>
    <ExternalLink className="w-4 h-4" />
  </a>
</div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Contact Section ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-foreground text-background">
        <div className="container">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">CONTACT</p>
          <h2 className="text-4xl font-bold font-display mb-8">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl">
            If you're interested in my work, or want to have a chat, I'd love to hear from you.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:zhouzhengyang299@gmail.com"
              className="inline-flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              zhouzhengyang299@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
<div className="text-red-500 text-4xl font-bold">
  TEST STYLE
</div>