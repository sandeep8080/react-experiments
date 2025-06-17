import { ResetStateExample } from "./components/ResetStateExample";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow py-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          React Experiments
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Learn and experiment with React
        </p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Reset State Example
          </h2>
          <ResetStateExample />
        </section>
        {/* Add more sections/components here */}
      </main>
      <footer className="text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} React Experiments
      </footer>
    </div>
  );
}

export default App;
