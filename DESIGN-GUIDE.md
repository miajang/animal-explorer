# Animal Explorer — Design & Development Guide

## Overview
An educational animal encyclopedia for kids — 54 animals across 6 categories, with character guides, fun facts, and AI-powered Q&A. Includes a Gallery page for animal art. Multi-page React app (AnimalLibrary + Gallery). All styles inline.

**Tagline:** "Discover the wild world"
**Brand color:** `#0d7a5f` (green — wordmark color, never changes)
**Wordmark:** "Animal" (fontWeight 550) + "Explorer" (fontWeight 350), both `#0d7a5f`
**Credit line:** "Powered by Grandma ♥" (.68rem, #777)

---

## File Structure
```
src/pages/
  library/
    AnimalLibrary.jsx  — Main app (categories, cards, detail, chat, settings)
    animalIcons.jsx    — SVG icon components for each animal
  Gallery.jsx          — Art gallery page
  games/               — (future game pages)
```

---

## Color System

### No Theme Switcher — Per-Category Colors
```js
const catColors = {
  amphibians: { primary: "#2E7D32", light: "#e8f5e9" },
  birds:      { primary: "#3D7A9E", light: "#e8f1f6" },
  dinosaurs:  { primary: "#C0612B", light: "#fdf0e6" },
  insects:    { primary: "#8B6914", light: "#faf3e0" },
  ocean:      { primary: "#1A6B7A", light: "#e4f0f3" },
  reptiles:   { primary: "#7A9A3A", light: "#f0f5e6" },
};
```
- Each category has its own primary + light color pair
- Used for category headings, card accents, active sidebar indicators
- App chrome (header, footer, nav) uses brand green `#0d7a5f`

---

## Data Architecture

### Animals (54 total — 9 per category)
Each: `{ id, cat, name, chars (card preview), who (first-person intro), size, food, habitat, facts[] }`
- `chars`: short teaser for card grid
- `who`: longer first-person narrative for detail view
- `facts[]`: 4 fun facts per animal

### Categories (6)
```js
const categories = [
  { id: "amphibians", label: "Amphibians", emoji: "🐸" },
  { id: "birds",      label: "Birds",      emoji: "🦜" },
  { id: "dinosaurs",  label: "Dinosaurs",  emoji: "🦕" },
  { id: "insects",    label: "Insects",     emoji: "🐛" },
  { id: "ocean",      label: "Ocean Animals", emoji: "🐙" },
  { id: "reptiles",   label: "Reptiles",   emoji: "🦎" },
];
```

### Characters (Guide Companions)
```js
const characters = [
  { id: "basilisk", name: "Basilisk Lizard", emoji: "🦎", greeting: "I can crawl on walls! Let's explore!" },
  { id: "anaconda", name: "Anaconda",        emoji: "🐍", greeting: "Ssssup! Let's discover amazing animals!" },
  { id: "crab",     name: "Crab",            emoji: "🦀", greeting: "Snip snap! Ready to learn cool facts?" },
];
```
- Displayed in sidebar below nav items (desktop)
- Bouncing animation: `.bounce-character` CSS class

---

## Navigation Structure

### Desktop: Left Sidebar
- `CatBtn` components: emoji + label, active indicated by category primary color left border
- Below nav: character guide emoji (3.8rem) + greeting text
- Sticky at top: 53px

### Mobile: Bottom Nav Bar (6 items — Tight Layout)
- Class: `.aeBottomBar`
- **Tight variant** for 6 categories:
  - Emoji icons: `1.25rem`
  - Labels: `.65rem`, weight 500/600
  - Container: paddingLeft/Right 8, paddingTop 12, paddingBottom `calc(env(safe-area-inset-bottom) + 10px)`
  - Buttons: padding `0 2px`, minWidth 0, height 50
  - `space-evenly` distribution

---

## Screens & Flows

### 1. Loading / Profile Init
- Loads profile from localStorage (`"profile"`)
- Default: `{ name: "Evan", character: "basilisk" }`
- No onboarding screen — goes straight to home

### 2. Home View (Card Grid)
- Welcome message: "Welcome, **{name}**!"
- Category heading: emoji + label in category primary color
- Card grid: `repeat(auto-fill, minmax(200px, 1fr))`, gap 18
- Empty state: "No animals match your search."

### Animal Cards
- White card, rounded 10
- SVG animal icon (from `animalIcons`) with category light bg
- Name + chars preview text (2-line clamp)
- Hover: elevated shadow

### 3. Detail View
- Back button ← category label
- Large SVG icon with category light bg circle
- Sections: Who Am I (first-person), Size, Food, Habitat, Fun Facts
- "Ask [Character] about [Animal]" AI button
- Share/favorite actions

### 4. Settings Modal
- Name input, character picker (3 options with emoji + greeting)
- Save/cancel

### 5. AI Chat (Ask Character)
- Triggered from detail view or sidebar
- Character-themed: "[Character emoji] Ask [Character name]"
- Fun, kid-friendly responses about the current animal
- Position: same modal pattern (top:100, right:24)

### 6. Gallery Page (Gallery.jsx)
- Separate page component
- Displays animal art/illustrations
- Same header/footer pattern as library
- Wordmark: 550/350, `#0d7a5f`

---

## Key Components

### CatBtn (Sidebar)
`({ label, emoji, active, color, onClick })` — category button
- Active: category primary color text + left border
- Inactive: `#777` text

### AnimalCard
- Category-colored top accent
- SVG icon from `animalIcons` module
- Name + preview text

### DetailView
`({ animal, char, profile, onBack, onAskAI })` — full animal detail

---

## Header Pattern
CSS grid: `gridTemplateColumns: "auto 1fr auto"` (3 columns for search), `gridTemplateRows: "auto auto"`, columnGap 16, rowGap 4
- Col 1 (merged): person icon (26×26, green circle + white figure) + wordmark + tagline
- Col 2: search input (desktop only, 280px)
- Col 3: settings gear
- Mobile: search moves below header

---

## Footer Pattern
Centered: 16px person icon + "AnimalExplorer" (550/350, #0d7a5f) + · + "Discover the wild world" (.68rem, #777)
Below: "Powered by Grandma ♥" (.68rem, #777, marginTop 10)

---

## State Management
All localStorage:
- `profile`: `{ name, character }` — persisted on save

### App State
- `activeCat`: current category
- `search`: text filter
- `selectedAnimal`: open detail view (null = grid)
- `settingsOpen`, `aiOpen`: modal states
- `isMobile`: breakpoint tracking (≤768px)

---

## Responsive Behavior
- Breakpoint: 768px
- Desktop: sidebar (220px) + content
- Mobile: bottom nav bar (tight 6-item variant), search in header
- Card grid adjusts: `minmax(200px, 1fr)`

---

## Typography & Color Constants
- Body text: `#555`
- Welcome name: `#0d7a5f`, fontWeight 600
- Category headings: category primary color
- Muted text: `#aaa` (card category labels)
- Tagline: `#777` (header, footer, "Powered by Grandma")
- Card shadows: `0 2px 8px rgba(0,0,0,.04)` or `0 1px 3px rgba(0,0,0,.04)`
- Content bg: `#F9FAFB` (main area)
- Card bg: `#fff`

---

## Kid-Friendly Design Notes
- Large emoji icons throughout (categories, characters)
- First-person animal narratives ("I'm the largest...")
- Fun facts with exclamation marks
- Character companions with personality
- Bouncing animation on character emoji
- No complex interactions — tap to read
- Age-appropriate language, short sentences
