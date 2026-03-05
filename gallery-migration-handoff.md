# Animal Explorer — Gallery Migration Handoff

## What Changed

Restructured the animal-explorer project from a single-app layout to a multi-app Gallery architecture (mirroring the `dashboards/` project pattern). The Gallery serves as a landing page with 4 app cards that route to individual apps.

## New Files

| File | Purpose |
|------|---------|
| `src/pages/Gallery.jsx` | Landing page with app grid |
| `src/components/AppCard.jsx` | Gallery card component with icon registry (book, search, swords, puzzle) |
| `src/components/BackToGallery.jsx` | Shared back-navigation button (available but games use inline nav) |
| `src/data/views.js` | App registry — `APPS` array with id, title, description, path, accent, icon |
| `src/pages/library/AnimalLibrary.jsx` | Existing Animal Library (moved from `App.jsx`) |
| `src/pages/library/animalIcons.jsx` | Animal icons (moved alongside AnimalLibrary) |
| `src/pages/games/AnimalSeek.jsx` | Peek & Seek hidden object game (from `CodingFiles/AnimalSeek.jsx`) |
| `src/pages/games/BugBattle.jsx` | Bug Battle fighting game (from `CodingFiles/bug-battle.jsx`) |
| `src/pages/games/SwampPuzzle.jsx` | Swamp drag-and-drop puzzle (from `CodingFiles/SwampPuzzle.jsx`) |

## Modified Files

| File | Change |
|------|--------|
| `src/App.jsx` | Replaced single-component render with `react-router-dom` Routes (5 routes) |
| `src/main.jsx` | Wrapped App in `<BrowserRouter>` |
| `package.json` | Added `react-router-dom` dependency |

## New Dependencies

```bash
npm install react-router-dom
```

## Environment Variables

- Existing `.env` with `VITE_OPENAI_KEY` — unchanged, used by AnimalLibrary's AI chat feature.

## Build Verification

```bash
npm install && npm run build
```

## SPA Routing

The project uses client-side routing. If deployed to Azure Static Web Apps, ensure `staticwebapp.config.json` has the fallback route:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

## Route Map

| Path | Component |
|------|-----------|
| `/` | Gallery |
| `/library/animal-library` | AnimalLibrary |
| `/games/animal-seek` | AnimalSeek |
| `/games/bug-battle` | BugBattle |
| `/games/swamp-puzzle` | SwampPuzzle |

## Notes

- All 3 game files are self-contained (data + UI in one file) — no further decomposition needed since they're standalone games, not multi-instance dashboards
- Each app has its own "← Apps" back button styled to match its theme (dark overlay for SwampPuzzle/AnimalSeek, light translucent for BugBattle, solid for AnimalLibrary)
- The `BackToGallery.jsx` shared component exists for future apps that want the standardized back button
- AnimalLibrary header was updated from "Animal Explorer" to "Animal Library" to differentiate from the Gallery title
