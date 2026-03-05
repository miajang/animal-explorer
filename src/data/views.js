/**
 * App registry for Animal Explorer.
 * Each entry represents one app accessible from the Gallery.
 */
export const APPS = [
  {
    id: 'animal-library',
    title: 'Animal Library',
    description: 'Explore 54 animals across 6 categories with fun facts, sounds, and an AI chat companion.',
    category: 'library',
    path: '/library/animal-library',
    accent: '#2E7D32',
    icon: 'book',
  },
  {
    id: 'animal-seek',
    title: 'Peek & Seek',
    description: 'Find hidden animals in beautifully illustrated scenes — farm, ocean, garden, and swamp.',
    category: 'games',
    path: '/games/animal-seek',
    accent: '#0D4F4F',
    icon: 'search',
  },
  {
    id: 'bug-battle',
    title: 'Bug Battle',
    description: 'Pick two bug fighters and battle it out — tap to attack with fun sound effects and animations.',
    category: 'games',
    path: '/games/bug-battle',
    accent: '#5D4037',
    icon: 'swords',
  },
  {
    id: 'swamp-puzzle',
    title: 'Swamp Puzzle',
    description: 'Drag and drop swamp animals into their matching shadow slots in this atmospheric puzzle.',
    category: 'games',
    path: '/games/swamp-puzzle',
    accent: '#1a3a2a',
    icon: 'puzzle',
  },
];

/**
 * Returns all apps (no audience filtering needed for this project).
 */
export function getApps() {
  return APPS;
}
