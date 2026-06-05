import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-xs font-bold">
            O
          </div>
          <span className="font-semibold text-lg tracking-tight">Ojasye</span>
          <span className="text-xs text-gray-500 hidden sm:block">Wellness Technologies</span>
        </div>
        <span className="text-xs text-emerald-400 font-medium px-3 py-1 rounded-full border border-emerald-800 bg-emerald-950">
          AI Wellness Assistant
        </span>
      </header>

      {/* Chat */}
      <div className="w-full max-w-3xl flex-1 flex flex-col px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Feel Better. Perform Better.
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Your private, judgment-free AI wellness companion. Ask anything about your health, energy, and performance.
          </p>
        </div>
        <Chat />
      </div>

      {/* Footer */}
      <footer className="w-full px-6 py-3 border-t border-gray-800 text-center text-xs text-gray-600">
        Ojasye Wellness Technologies Pvt. Ltd. &mdash; This AI is for wellness guidance only, not medical advice.
      </footer>
    </main>
  );
}
