# TAG Design System

This document is the implementation contract for the redesigned Teens Academy Global website. Use semantic tokens and shared primitives rather than copying colours or control styles into pages.

## Foundations

- Display and headings: Bricolage Grotesque, weights 600-800.
- Body and interface: DM Sans, weights 400-700.
- Primary ground: Cream. Alternate sections with white.
- Core dark: Midnight. Use for headings, navigation, dark sections, and dark controls.
- Core action: Royal. Use for primary actions, links, and the boys programme.
- Accent action: Gold. Reserve for joining, applying, registering, current steps, and focus rings.
- Girls programme: Ember and blush-sand. It must have equal visual weight to the boys programme.
- Body copy should usually be 16-17px with a 1.6-1.7 line height and a readable measure.
- Use 14px card radii, pill actions/chips, restrained shadows, and no decorative floating orbs.

## Typography

- Hero display: 64-80px desktop, 46-56px mobile, line-height 0.96-1.02.
- Page title: 48-60px desktop, 40-48px mobile.
- Section heading: 36-44px desktop, 30-36px mobile.
- Card heading: 20-28px depending on hierarchy.
- Eyebrow: 11-12px, uppercase, bold, 0.14em tracking.
- Never use viewport-width font sizing. Use responsive breakpoints and stable sizes.
- Keep Bricolage Grotesque for display moments; DM Sans carries paragraphs, controls, labels, and metadata.

## Actions And Inputs

- Primary: Royal fill, white text. Use for explore and submit actions.
- Accent: Gold fill, Midnight text. Use for join, apply, enrol, and register actions.
- Secondary: Cream fill with Midnight outline and text.
- Dark: Midnight fill with Cream text. Use for media and utility actions.
- On dark: transparent with Cream outline. Use for secondary actions on Midnight or Royal.
- Button sizes are 58px large, 52px default, and 44px small. Mobile primary actions may be full width.
- Focus is always a visible Gold ring. Never communicate focus or validation with colour alone.
- Inputs are 52px high, Cream-filled, with 14px corners and a Gold focus state.
- Labels sit above fields. Helper or error text sits below. Required fields must be announced semantically.

## Components

- Filter chips are pills. Selected is Midnight-filled; unselected is white with a strong line border.
- Segmented tabs use a white selected segment inside a Sand or Cream track.
- Badges are compact status metadata, not actions.
- Programme cards may use bold colour fields; general cards should be white or Cream and quiet.
- Mentor directory cards use a location chip, portrait, role, expertise tag, and a restrained text link.
- Speaker cards use editorial imagery and minimal chrome.
- Testimonials should mix portrait, light quote, dark quote, programme-colour quote, and video variants. Do not repeat one card treatment in a row.
- Empty, error, success, loading, and disabled states are required wherever data or submission is involved.

## Page Rhythm

- Alternate Cream and white grounds. White sections receive a thin Gold rule at the top or bottom when useful.
- Add approximately one Midnight or deep programme-colour section for every three light sections.
- Do not stack two dark bands directly together.
- Each page starts with one clear hero, one lead statement, and no more than two hero actions.
- Every page closes with an inset action band followed by a Midnight footer with a safeguarding/trust strip.
- Use split, editorial statement, from-to rows, masonry, bento, and task-help layouts. Avoid repeating the same card grid down the page.

## Page Anatomy

- Home: split hero, at-a-glance strip, mission statement, five pillars, two programmes, impact, mentor preview, training, conference, testimonials, routing CTA.
- About: hero with video/photo, story, vision and mission, reason TAG exists, Christian foundation, values, safeguarding, CTA.
- Boys Hub: full Royal hero, key facts, who it is for, three-month journey, outcomes, experience bento, activities, mentors, parents, pricing, FAQ, final CTA.
- Girls Hub: Cream/Ember hero, who it is for, what girls develop, four-stage journey, outcomes, experience bento, activities, mentors, testimonial, FAQ, Ember CTA.
- Mentors: Midnight hero, search and filters, mentor directory, Gold become-a-mentor band.
- Training: hero with media card, three-step approach, tabs with video grid, Midnight media CTA.
- Conferences: Midnight hero, Gold featured upcoming event, archive by year, Royal stay-informed band.
- Contact: hero, direct channels including WhatsApp, task-help contact form, Midnight footer.

## Programme Personalities

- Boys Mentoring Hub: Royal and sky tint, bold full-colour hero, leaf-corner photo shape, Gold primary action.
- Girls Mentorship Hub: Ember and blush-sand, warm split hero, arch photo shape with ember block, Ember action and accents.
- Keep the same component quality and prominence for both programmes; distinction comes from personality, not hierarchy.

## Content And Imagery

- Speak to the young person first; reassure parents second.
- Use hopeful, direct writing. Prefer short sentences and verb-led actions such as Apply Now, Join TAG, Explore, and Watch.
- Put reassurance in the interface rather than vague promises: safeguarding, response times, eligibility, price, duration, and next steps.
- Use real TAG moments: African and Black British teens, candid learning, mentoring, celebration, and faith-in-community.
- Avoid generic stock, staged handshakes, poverty framing, and faces of minors without documented consent.
- Use leaf-corner shapes for boys, arches for girls, circles for people, and standard rectangles for general content.

## Accessibility

- Body text must meet WCAG AA contrast; headings and body pairings in the source system are the approved combinations.
- Interactive targets are at least 44px; primary controls should generally be 48-58px.
- Gold focus rings appear on every interactive element.
- Use real buttons, links, labels, inputs, headings, lists, and landmarks.
- Icon-only controls require an accessible name and decorative icons use `aria-hidden`.
- Tabs, accordions, dialogs, and sheets must expose state through ARIA.
- Respect reduced-motion preferences and never make animation necessary to understand content.
