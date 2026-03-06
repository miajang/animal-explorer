# Animal Explorer — Claude Code Context

## Workflow Rules
- Never ask for permission or confirmation. Proceed with all fixes, builds, and iterations automatically.
- After successful build, push to git.

## Project Overview
Interactive animal encyclopedia for kids. Users pick a character guide, browse 6 animal categories (54 animals total), and explore facts with a playful, age-appropriate UI.

## Architecture
Single-file React app — all logic in `src/App.jsx` (475 lines).

### Key Data Structures
- `categories` — 6 categories: Amphibians, Birds, Dinosaurs, Insects, Ocean Animals, Reptiles
- `characters` — 3 guide characters with emoji + greeting (Basilisk, Anaconda, Crab)
- `catColors` — primary + light background color per category
- Animal data — 54 animals (9 per category), each with name, emoji, tagline, and 5 facts

### Features
- Character selection onboarding
- Sidebar category navigation with emoji icons
- Animal card grid with click-to-expand detail view
- Settings panel for character switching
- Responsive layout

## Tech Stack
- React + Vite + Tailwind
- No external data libraries — all data is inline
- No routing — single-page with state-driven views

## Design Standards
- Muted, desaturated color palette per category
- Font weights 400-600 only
- Playful but clean — emoji-based icons, no decorative borders
- Cards with subtle shadows and rounded corners
- Consistent spacing and padding across all sections
