import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Hero with Spline 3D keypad */}
      <Hero />

      {/* Calculator Section */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-10 -mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Calculator />
            </div>
            <div className="relative z-10 p-6 lg:p-10 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-white">How it works</h2>
              <p className="mt-3 text-slate-300">
                Tap the glowing keys to perform calculations. It supports addition, subtraction, multiplication, division, decimals, and chaining of operations. The design echoes a gaming keypad with purple and blue glows.
              </p>
              <ul className="mt-6 space-y-2 text-slate-300 list-disc list-inside">
                <li>Clear resets everything</li>
                <li>Use the dot for decimals</li>
                <li>Press equals to evaluate</li>
                <li>Continue with another operator to chain results</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
