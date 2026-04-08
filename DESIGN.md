# Design System: Portfolio App — Product Engineer Edition

## 1. Visual Theme & Atmosphere
A restrained, high-agency interface with confident asymmetric layouts and technical density. The atmosphere is that of a premium "Product Engineering" studio — precise, balanced, and hardware-accelerated. It avoids all generic AI clichés in favor of sharp typography and calibrated negative space.

* **Density:** 7/10 (Cockpit Balanced)
* **Variance:** 8/10 (Asymmetric Offset)
* **Motion:** 6/10 (Fluid Spring CSS)

## 2. Color Palette & Roles
- **Zinc-950** (#09090B) — Primary canvas background
- **Zinc-900** (#18181B) — Elevated surface color for cards/modals
- **Zinc-100** (#F4F4F5) — Primary text (high contrast)
- **Zinc-400** (#A1A1AA) — Secondary text, metadata, descriptions
- **Emerald-500** (#10B981) — Singular accent color for CTAs, focus rings, and active states
- **Alpha Border** (rgba(255,255,255,0.08)) — 1px structural lines

**Strict Rule:** No "AI Purple" or "Neon Blue" gradients. No pure black (#000000).

## 3. Typography Rules
- **Display:** **Geist Sans** — Track-tight (-0.02em), controlled scale. Hierarchy driven by weight (SemiBold/Bold) rather than size.
- **Body:** **Satoshi** — Relaxed leading (1.6), 65ch max-width for readability.
- **Mono:** **Geist Mono** — For code blocks, technical metadata, and timestamps.
- **Banned:** `Inter` is strictly forbidden. Generic system fonts are banned for headlines. No serif fonts in this technical UI.

## 4. Component Stylings
- **Buttons:** Tactile feel with `-1px` active translation. Flat backgrounds with 1px inset borders. No outer glows or neon shadows.
- **Cards:** Generously rounded corners (`1.5rem`). Subtle border-top accent or `Alpha Border` instead of heavy shadows.
- **Inputs:** Label above, helper text below. Accent focus rings. Static backgrounds.
- **Loaders:** Skeletal shimmers matching layout geometry. No rotating spinners.

## 5. Layout Principles
- **Asymmetric Hero:** Split-screen or offset layouts. Centered hero sections are banned.
- **Inline Image Typography:** Small, rounded contextual photos embedded directly within headlines of the Hero section.
- **No Equal Grids:** Avoid the "3-column equal card" pattern. Use asymmetric masonry or zig-zag rows for project showcases.
- **Max Width:** Contain primary content within a `1440px` max-width container.

## 6. Motion & Interaction
- **Spring Physics:** `stiffness: 100, damping: 20` for all interactive transitions.
- **Perpetual Micro-Interactions:** Active elements should feature subtle "pulses" or technical "shimmers".
- **Hardware Acceleration:** Only animate `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- **No Emojis**: Do not use emojis anywhere in the interface. Use [Lucide React] icons exclusively.
- **No AI Copywriting**: Avoid "Elevate", "Seamless", "Unleash". Use direct, technical, and confident language.
- **No Generic Data**: Do not invent metrics (e.g., "99.9% uptime"). Use `[metric]` or real data only.
- **No 3-Column Grids**: Use asymmetric layouts for lists and cards.
- **No Neon/Glows**: No purple button glows or neon background blobs.
