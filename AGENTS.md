# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Trap Ramen design decisions

- Build a responsive website, not a mobile-app shell. Mobile should closely match `design/mobile-reference.png`; desktop should recompose the same poster language using `design/desktop-reference.png`.
- Treat the approved desktop reference as a one-screen poster composition at 1487 × 1058: compact header, split hero, category rail, two-column favorites/campaign section, gallery strip, and contact/order bar should all preserve those proportions.
- Desktop navigation labels are `MENU`, `ABOUT`, `CATERING`, and `CONTACT`, followed by the large `ORDER NOW` action.
- Preserve the black, red, gold, and white street-poster palette, distressed texture, dominant pineapple bowl, horizontal category rail, fan-favorites rows, rotating campaign flyers, gallery strip, contact band, and large order CTA.
- Keep the word “DIFFERENT” strongly tracked and legible. In particular, leave visible space between the I and F forms; never use the extreme negative tracking shown in the earlier draft.
- Keep commerce copy, navigation, prices, contact details, and controls code-native and interactive.
