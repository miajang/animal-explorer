import { getApps } from '../data/views';
import AppCard from '../components/AppCard';

export default function Gallery() {
  const apps = getApps();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-800 tracking-tight">
            Animal Explorer
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Learn, play, and discover the animal kingdom
          </p>
        </div>

        {/* App grid */}
        {apps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-sm text-gray-400">
            No apps available yet.
          </div>
        )}

        {/* Footer */}
        <div className="text-xs text-gray-300 text-center mt-8">
          Animal Explorer
        </div>
      </div>
    </div>
  );
}
