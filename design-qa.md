# Trap Ramen Exact Version — Design QA

## Comparison target

- Source visual truth: `design/mobile-reference.png` (852 × 1847 px) and `design/desktop-reference.png` (1487 × 1058 px).
- Implementation: `http://localhost:4174/`, captured and inspected in the Codex in-app Browser/IAB as full-page desktop and mobile renders.
- Implementation screenshot evidence: Browser/IAB tab 4 live captures. The CUA surface displayed the captures inline but does not persist them as workspace files.
- Desktop viewport: current IAB desktop viewport, approximately 1265 × 708 CSS px, device scale handled by the browser.
- Mobile viewport: explicit Browser/IAB override of 390 × 844 CSS px, then reset after QA.
- State: Ramen tab selected, first promotion pair visible, mobile menu closed.
- Density normalization: composition compared at equal CSS viewport scale; source references were used for layout/proportion rather than literal device-pixel equality.

## Full-view comparison evidence

The final desktop capture preserves the reference structure: logo/header/order CTA, split hero with headline left and pineapple bowl right, five-part category rail, favorites/promotions editorial split, three-image gallery strip, and a dense contact/order footer. The final mobile capture preserves the same sequence as the portrait reference and recomposes it as a narrow poster rather than shrinking the desktop grid.

## Focused comparison evidence

- Headline: white `RAMEN`, gold `DONE`, and red `DIFFERENT` retain the source hierarchy. Positive tracking was added to all three words; the I/F region in `DIFFERENT` no longer merges.
- Hero media: the supplied pineapple bowl remains the dominant image with a dark red/gold circular backing and no tint applied over the food.
- Category rail: five horizontal categories, gold selected Ramen state, red separators, and mobile horizontal overflow match the reference treatment.
- Menu rows: thumbnail, uppercase item name, red divider, gold price, and chevron match the source anatomy and density.
- Promotions: two poster images, previous/next controls, and pagination dots match the reference’s campaign carousel.
- Footer: `PULL UP HUNGRY`, address, phone, business hours, Instagram, and a large order CTA preserve the contact band’s hierarchy.
- Palette and texture: near-black distressed paper, red brush edges, gold commerce accents, and bright white type remain locked to the reference.

## Above-the-fold copy diff

Allowed copy from the selected references: `RAMEN`, `DONE`, `DIFFERENT`, `ORDER NOW`, `VIEW MENU`, `MENU`, `ABOUT`, `CATERING`, and `CONTACT`. The implementation adds no unapproved hero messaging and now uses the desktop reference’s complete navigation labels.

## Findings

- No remaining P0, P1, or P2 mismatch.
- P3: the production headline uses Anton/Barlow Condensed/Permanent Marker rather than the exact custom hand-painted display lettering embedded in the concept. Weight, angle, tracking, color, and hierarchy are matched closely, and the code-native version is more legible.
- P3: the mobile full-page screenshot shows the fixed order bar once at the first captured viewport position; during normal use it remains fixed to the viewport bottom as intended.

## Comparison history

### Pass 1 — blocked

- [P1] Mobile hero CTAs overlapped the headline because the absolutely positioned button stack was anchored to `.hero-copy`.
- Fix: changed `.hero-copy` to `position: static` at the mobile breakpoint so the CTA stack anchors to the full hero.

### Pass 2 — passed

- The CTA stack now sits beneath the headline and food image with clear separation.
- Increased `RAMEN` and `DONE` tracking to `.012em`, `DIFFERENT` to `.015em` desktop / `.02em–.022em` mobile.
- Verified desktop and mobile full-page captures, mobile menu open/close, Rice tab state change, promotion next control, telephone/location/Instagram links, and zero browser console errors.

### Pass 3 — exact desktop composition

- Re-proportioned desktop at the reference’s 1487 × 1058 artboard: compact 6% header, 23% hero, slim category rail, equal favorites/promotions columns, gallery strip, and compact contact/order footer.
- At the reference aspect ratio, the final document height is 815 CSS px against an 814 CSS px viewport after browser scaling—effectively a one-screen composition with no meaningful desktop scroll.
- Restored the exact desktop navigation labels: Menu, About, Catering, Contact.
- Added the gold divider between favorites and promotions and used near-square campaign cards to match the approved reference.
- Preserved positive tracking in `RAMEN`, `DONE`, and `DIFFERENT`; the I/F forms remain clearly separated.

## Implementation checklist

- [x] Responsive desktop and mobile composition.
- [x] Real supplied logo, food imagery, promotional flyers, and generated distressed texture.
- [x] Working category tabs, mobile navigation, promo carousel, and commerce/contact links.
- [x] Reduced-motion support, focus indicators, semantic tabs/buttons, and descriptive image alternatives.
- [x] Production build and Sites worker tests pass.

final result: passed
