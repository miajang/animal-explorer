import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import AnimalLibrary from './pages/library/AnimalLibrary';
import AnimalSeek from './pages/games/AnimalSeek';
import BugBattle from './pages/games/BugBattle';
import SwampPuzzle from './pages/games/SwampPuzzle';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/library/animal-library" element={<AnimalLibrary />} />
      <Route path="/games/animal-seek" element={<AnimalSeek />} />
      <Route path="/games/bug-battle" element={<BugBattle />} />
      <Route path="/games/swamp-puzzle" element={<SwampPuzzle />} />
    </Routes>
  );
}
