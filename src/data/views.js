/**
 * App registry for Animal Explorer.
 * Each entry represents one app accessible from the Gallery.
 */
export const APPS = [
  {
    id: 'animal-explorer',
    title: 'Animal Explorer',
    description: 'Discover animals from around the world with fun facts, sounds, and an AI chat companion.',
    category: 'library',
    path: '/library/animal-explorer',
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
];

/**
 * Returns all apps (no audience filtering needed for this project).
 */
export function getApps() {
  return APPS;
}
