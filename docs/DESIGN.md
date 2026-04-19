# Design System: The Kinetic Editorial

## 1. Overview & Creative North Star: "The Kinetic Breath"
This design system moves away from the dense, data-heavy "utility" look of traditional fitness trackers. Instead, it adopts a **Kinetic Editorial** aesthetic—blending the prestige of high-end wellness magazines with the fluid responsiveness of modern digital motion.

The Creative North Star is **"The Kinetic Breath."** Much like a controlled exhale during a rep, the UI must feel expansive, intentional, and rhythmic. We break the "app template" mold by using **intentional asymmetry**: placing large-scale typographic metrics off-center to create movement, and utilizing massive negative space to reduce cognitive load. We are not just building a tracker; we are building a digital sanctuary for health.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
We utilize a sophisticated palette of off-whites and soft grays to create a "gallery" feel, allowing our vibrant accents to signify action and energy.

### Core Palette
*   **Background (`#f5f6f7`):** Our canvas. It is never pure white, providing a softer, more premium foundation.
*   **Primary (`#006a34`) & Primary Container (`#6dfe9c`):** Used for "Growth" and "Success" states.
*   **Secondary (`#904800`) & Secondary Container (`#ffc69f`):** Used for "Energy" and "Urgency" (e.g., nearing calorie limits).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts. To separate a meal entry from the daily summary, place a `surface-container-low` card against the `surface` background. The eye should perceive depth, not barriers.

### Glass & Texture
*   **The Glass Rule:** For floating action elements (like the bottom navigation bar), use a semi-transparent `surface-container-lowest` with a `20px` backdrop blur. This makes the UI feel like it's floating over the user’s data.
*   **Signature Gradients:** For high-impact CTAs, use a subtle linear gradient from `primary` to `primary_dim`. This adds a "weighted" feel to buttons, making them feel like physical, pressable objects.

---

## 3. Typography: The Metric-First Hierarchy
We pair the technical precision of **Inter** with the editorial character of **Manrope**.

*   **Display (Manrope):** Large, airy numbers for calorie counts and weights. Using `display-lg` (3.5rem) creates an authoritative focal point.
*   **Headlines (Manrope):** Used for screen titles and section headers. High-contrast sizing between `headline-lg` and `body-md` is encouraged to create an editorial "magazine" feel.
*   **Body & Labels (Inter):** Reserved for functional data, food names, and descriptions. Inter’s tall x-height ensures readability during active movement.

**Editorial Tip:** Don't be afraid of the "Big Number" layout. A single calorie count in `display-lg` should dominate the top third of the dashboard, surrounded by at least `xl` (3rem) of white space.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-heavy." We achieve hierarchy through **Tonal Layering** and **Ambient Shadows**.

*   **The Layering Principle:** Stack surfaces to indicate importance. 
    *   *Level 0:* `surface` (Global background)
    *   *Level 1:* `surface-container-low` (Secondary content blocks)
    *   *Level 2:* `surface-container-lowest` (Interactive cards/primary focus)
*   **Ambient Shadows:** If a card must "float," use a shadow with a blur radius of `48px` and an opacity of `4%` using a tint of the `on-surface` color. It should feel like a soft glow of light, not a dark silhouette.
*   **The Ghost Border:** For input fields where a boundary is legally or functionally required, use the `outline-variant` at `15%` opacity.

---

## 5. Components: Softness & Thumb-First Interaction
All components adhere to a high-radius philosophy (`24px` to `full`) to evoke a sense of organic friendliness.

### Buttons
*   **Primary Action:** Use `primary` background with `on_primary` text. Corners must be `full` (pill-shaped) or `xl` (3rem). Height should be a minimum of `64px` for high-speed "thumb-tapping."
*   **Secondary/Tertiary:** Use `surface-container-high` backgrounds. Avoid "Ghost" buttons (outlines only) unless used for destructive actions.

### Cards & Lists
*   **The "Katori" Card:** For the Indian context, food entry cards should accommodate regional units. Use a horizontal layout where the food name is `title-md` and the unit ("1 Katori" or "2 Rotis") is a `label-md` in `on_surface_variant`. 
*   **No Dividers:** Lists are separated by `16px` of vertical space or a toggle between `surface` and `surface-container-low`. 

### The Kinetic Bottom Bar
*   **Structure:** A bottom-heavy navigation hub. The main "Add Food" action should be a floating `primary_container` circle with a `glassmorphism` backdrop, positioned within easy reach of the thumb's natural arc.

### Input Fields
*   **Soft Inputs:** Use `surface-container-highest` for the input background. Avoid boxes; use highly rounded corners (`lg`) and ensure the font size for user input is at least `body-lg` to prevent mobile zooming.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. Having a wider left margin than right can create a high-end, custom-designed feel.
*   **Do** prioritize "Thumb-Zone" ergonomics. Place the most frequent actions (Log Water, Log Meal) in the bottom 30% of the screen.
*   **Do** use the `primary` green for progress and `secondary` orange for metabolic "burn" or energy stats.

### Don't:
*   **Don't** use 1px black or gray borders. It shatters the "Kinetic Breath" atmosphere.
*   **Don't** crowd the screen. If you have more than five elements on a dashboard, move two of them to a secondary layer or a "See More" expansion.
*   **Don't** use sharp corners. Nothing in this system should have a radius smaller than `0.5rem (sm)`, and primary elements should never be less than `1.5rem (md)`.