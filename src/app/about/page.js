export default function About() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-white text-5xl font-bold tracking-widest mb-8 animate-fade-in">
          ABOUT ME
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed tracking-wide animate-fade-in-delay">
          I'm Arnab Hazra — an ECE student who is genuinely amazed by everything 
          mankind has ever built. A lighter. A PCB. A pixel lighting up on a screen. 
          I don't just see objects — I see the engineering, the economics, the 
          human effort behind every single thing around me.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed tracking-wide mt-6 animate-fade-in-delay">
         My biggest skill isn't technical. It's appreciating things that are overlooked — 
        the engineering behind a lighter, the economics behind packaged food, 
        the electrons behind every pixel on this screen.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8 justify-center">
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold">3+</h2>
            <p className="text-gray-400 text-sm tracking-widest mt-2">ARDUINO PROJECTS</p>
          </div>
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold">∞</h2>
            <p className="text-gray-400 text-sm tracking-widest mt-2">CURIOSITY</p>
          </div>
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold">1</h2>
            <p className="text-gray-400 text-sm tracking-widest mt-2">WEBSITE BUILT</p>
          </div>
        </div>

        <div className="mt-16 border border-gray-800 p-8">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">Currently Amazed By</p>
          <p className="text-white text-lg leading-relaxed">
            How a lighter — something volatile and dangerous — is made safe, 
            cheap, and available everywhere. The engineering. The economics. 
            The fact that it exists at all.
          </p>
        </div>

      </div>
    </main>
  );
}