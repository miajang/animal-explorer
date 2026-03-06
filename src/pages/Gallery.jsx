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
        <div style={{ padding: "32px 0 12px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: 16, height: 16, flexShrink: 0 }}><circle cx="24" cy="24" r="24" fill="#0d7a5f"/><g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(11,11) scale(1.08)"><path d="M12 4c-1.5 0-3 1-3 3s1.5 3 3 3 3-1 3-3-1.5-3-3-3z"/><path d="M8 10c-2 0-4 2-4 4l2 6"/><path d="M16 10c2 0 4 2 4 4l-2 6"/><path d="M10 14l-1 8h6l-1-8"/></g></svg>
            <span style={{ fontSize: ".82rem" }}><span style={{ fontWeight: 500, color: "#0d7a5f" }}>Animal</span><span style={{ fontWeight: 300, color: "#0d7a5f" }}>Explorer</span></span>
            <span style={{ fontSize: ".68rem", color: "#aaa" }}>&middot;</span>
            <span style={{ fontSize: ".68rem", color: "#aaa" }}>Discover the wild world</span>
          </div>
          <div style={{ fontSize: ".68rem", color: "#aaa", marginTop: 10 }}>Powered by Grandma <span style={{ color: "#e0aab8" }}>&hearts;</span></div>
        </div>
      </div>
    </div>
  );
}
