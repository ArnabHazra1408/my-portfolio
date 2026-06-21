export default function Projects() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-white text-5xl font-bold tracking-widest mb-16 text-center animate-fade-in">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 gap-8">

          <div className="border border-gray-800 p-8 hover:border-white transition-all duration-500">
            <span className="text-gray-600 text-sm tracking-widest">01</span>
            <h2 className="text-white text-2xl font-bold tracking-wide mt-2">Mist Umbrella</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">Description coming soon.</p>
            <p className="text-gray-600 text-sm tracking-widest mt-6">ARDUINO · HARDWARE</p>
          </div>

          <div className="border border-gray-800 p-8 hover:border-white transition-all duration-500">
            <span className="text-gray-600 text-sm tracking-widest">02</span>
            <h2 className="text-white text-2xl font-bold tracking-wide mt-2">Automatic Hand Sanitizer</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">Description coming soon.</p>
            <p className="text-gray-600 text-sm tracking-widest mt-6">ARDUINO · HARDWARE</p>
          </div>

          <div className="border border-gray-800 p-8 hover:border-white transition-all duration-500">
            <span className="text-gray-600 text-sm tracking-widest">03</span>
            <h2 className="text-white text-2xl font-bold tracking-wide mt-2">Traffic Light Sensor</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">Description coming soon.</p>
            <p className="text-gray-600 text-sm tracking-widest mt-6">ARDUINO · HARDWARE</p>
          </div>

        </div>
      </div>
    </main>
  );
}