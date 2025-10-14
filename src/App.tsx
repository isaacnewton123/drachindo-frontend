import Headers from "./components/headers";
import TrendingSection from "./components/trendingSection";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Headers />
      <main>
        <TrendingSection />
      </main>
    </div>
  );
}

export default App;
