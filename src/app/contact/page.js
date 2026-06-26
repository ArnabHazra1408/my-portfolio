export default function Contact() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-12">
      <div className="max-w-3xl w-full text-center">
        
        <h1 className="text-white text-5xl font-bold tracking-widest mb-4 animate-fade-in">
          LET'S TALK
        </h1>
        <p className="text-gray-400 tracking-wide mb-16 animate-fade-in-delay">
          I'm always up for a conversation — about tech, engineering, games, or anything that amazes you.
        </p>

        <div className="flex flex-col gap-6">
          
          <a href="mailto:arnabhazra2005@email.com" 
            className="border border-gray-800 p-6 hover:border-white transition-all duration-500 group">
            <p className="text-gray-600 text-sm tracking-widest mb-2">EMAIL</p>
            <p className="text-white text-lg group-hover:text-gray-300 transition-all duration-300">
              arnabhazra2005@email.com
            </p>
          </a>

          <a href="https://linkedin.com/in/arnabhazra1408" target="_blank"
            className="border border-gray-800 p-6 hover:border-white transition-all duration-500 group">
            <p className="text-gray-600 text-sm tracking-widest mb-2">LINKEDIN</p>
            <p className="text-white text-lg group-hover:text-gray-300 transition-all duration-300">
              Arnab Hazra
            </p>
          </a>

          <a href="https://github.com/ArnabHazra1408" target="_blank"
            className="border border-gray-800 p-6 hover:border-white transition-all duration-500 group">
            <p className="text-gray-600 text-sm tracking-widest mb-2">GITHUB</p>
            <p className="text-white text-lg group-hover:text-gray-300 transition-all duration-300">
              github.com/arnabhazra
            </p>
          </a>

        </div>

        <p className="text-gray-600 text-sm tracking-widest mt-16">
          ARNAB HAZRA · ECE · 2027
        </p>

      </div>
    </main>
  );
}