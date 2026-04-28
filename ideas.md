# Design Ideas for ZHOU Zhengyang — Journalism Portfolio

## Context
ZHOU Zhengyang is a psychology student minoring in journalism at CUHK, transitioning into a journalism career. Her work is grounded in solutions journalism (解困式报道), focusing on human stories about community, disability, and cross-cultural understanding. Her podcast "放晴早安" (Sunshine Good Morning) is warm, thoughtful, and socially conscious.

---

<response>
<idea>
**Design Movement:** New Sincerity Editorial — inspired by East Asian literary magazines of the 1980s–90s, blending warmth with intellectual rigor.

**Core Principles:**
1. Warmth-first: every element should feel like an invitation, not a declaration
2. Typographic storytelling: headlines carry emotional weight, body text breathes
3. Asymmetric calm: layouts that feel considered, not chaotic
4. Cultural duality: honors both Chinese and English, neither subordinated

**Color Philosophy:**
A palette drawn from dawn light and aged paper — warm ivory (#F7F3EC), deep ink (#1C1A17), terracotta accent (#C4714A), and a muted sage (#7A8C7E). Evokes the feeling of reading a beloved magazine on a quiet morning.

**Layout Paradigm:**
Offset-column editorial grid. Hero section uses a large left-aligned typographic block with a photo inset to the right, slightly overlapping. Work cards use a staggered two-column layout with alternating text-left and text-right. Navigation is a slim horizontal bar with generous letter-spacing.

**Signature Elements:**
1. Thin horizontal rules (1px, terracotta) used as section dividers with small Chinese characters as section labels
2. Pull-quote blocks with oversized quotation marks in terracotta
3. Episode cards with a subtle paper-texture background

**Interaction Philosophy:**
Slow, deliberate hover transitions (300–400ms ease). Links underline from left on hover. Cards lift with a gentle shadow increase. Scrolling reveals sections with a soft fade-up.

**Animation:**
- Hero text: staggered character fade-in (not letter-by-letter, but word-by-word)
- Section entry: translateY(20px) → 0 with opacity 0→1 over 500ms
- Card hover: box-shadow deepens, slight scale(1.01)

**Typography System:**
- Display: "Playfair Display" (serif, high contrast) for hero headings
- Body: "Source Serif 4" for readable long-form text
- UI/Labels: "DM Sans" for navigation and metadata
- Chinese: system-ui fallback with careful line-height (1.8)
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Brutalist Clarity — raw, honest, and unafraid. Inspired by independent journalism and zine culture.

**Core Principles:**
1. Nothing decorative that doesn't serve information
2. High contrast as a political statement
3. Grid as visible structure, not hidden scaffolding
4. Text is the hero

**Color Philosophy:**
Near-black (#0D0D0D), pure white (#FAFAFA), and a single electric accent — a vivid yellow (#F5E642). The yellow signals urgency and energy, like a highlighter on a breaking story.

**Layout Paradigm:**
Exposed grid with visible column lines as design elements. The hero is a full-width text block in massive weight. Work items are listed in a dense table-like structure. No rounded corners anywhere.

**Signature Elements:**
1. Bold section numbers (01, 02, 03) in yellow, large and left-aligned
2. Monospace typewriter font for metadata (dates, categories)
3. Thick top border on cards instead of shadows

**Interaction Philosophy:**
Instant, snappy transitions (100–150ms). Hover states invert colors (black bg → white text). No easing — linear transitions only.

**Animation:**
- Hero: text slides in from left, hard cut (no fade)
- Sections: instant reveal on scroll (no animation, content just appears)
- Hover: immediate color inversion

**Typography System:**
- Display: "Space Grotesk" bold/black weight
- Body: "IBM Plex Mono" for a typewriter/newsroom feel
- Accent: "Space Grotesk" regular for captions
</idea>
<probability>0.06</probability>
</response>

<response>
<idea>
**Design Movement:** Quiet Modernism — the visual language of thoughtful long-form journalism. Think The Guardian's features section meets a personal literary journal.

**Core Principles:**
1. Generous whitespace as a sign of confidence
2. Typography does the heavy lifting — no decorative noise
3. Muted, sophisticated color — nothing competes with the stories
4. Structural clarity: the reader always knows where they are

**Color Philosophy:**
Off-white background (#F9F7F4), near-black text (#18181B), a dusty blue-green accent (#4A7C8E), and warm stone (#D4C5B0) for subtle backgrounds. Feels like a well-designed literary journal — serious but not cold.

**Layout Paradigm:**
Left-anchored asymmetric layout. The name/nav lives in a fixed left sidebar on desktop. Content flows in a wide right column. Work cards use a horizontal list format with a small thumbnail, date, and title — like a newspaper's archive page.

**Signature Elements:**
1. A thin vertical rule separating the sidebar from content
2. Episode cards styled as newspaper clippings with a subtle drop shadow
3. A "currently reading/listening" ticker at the top

**Interaction Philosophy:**
Understated elegance. Hover states use color shifts (not movement). Links have a slow underline-draw animation. Smooth scroll with subtle parallax on the hero image.

**Animation:**
- Hero: fade in over 800ms, no movement
- Cards: staggered fade-up on scroll (50ms delay between items)
- Sidebar: fixed, no animation

**Typography System:**
- Display: "Cormorant Garamond" for hero name and section titles (high-contrast serif)
- Body: "Lora" for episode descriptions and bio text
- UI: "Outfit" for navigation, tags, and metadata
</idea>
<probability>0.07</probability>
</response>

---

## Selected Approach: New Sincerity Editorial

Chosen for its warmth and cultural resonance — perfectly matching Zhou Zhengyang's solutions journalism ethos and her bilingual (Chinese/English) identity. The terracotta-and-ivory palette evokes the warmth of "放晴早安" (Sunshine Good Morning), while the editorial grid gives the portfolio intellectual credibility.
