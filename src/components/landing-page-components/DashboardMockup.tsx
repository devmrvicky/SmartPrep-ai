export default function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
        <div className="space-y-6">
          {/* Circular Charts Row */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 bg-gray-700/50 rounded-lg p-4">
                <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent mx-auto mb-2"></div>
                <div className="h-2 bg-gray-600 rounded mt-4"></div>
              </div>
            ))}
          </div>

          {/* Bar Charts Row */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-700/50 rounded-lg p-3">
                <div className="h-12 bg-emerald-500/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
