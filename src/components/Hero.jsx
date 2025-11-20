import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(124,58,237,0.25),transparent)]"></div>

      {/* Headline */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_25px_rgba(147,51,234,0.35)]">
          Futuristic Calculator
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          A sleek, glowing keypad experience with precise math and delightful interactions.
        </p>
      </div>
    </section>
  );
}
