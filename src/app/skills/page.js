export default function Skills() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-white text-5xl font-bold tracking-widest mb-16 text-center animate-fade-in">
          SKILLS
        </h1>

        <div className="grid grid-cols-2 gap-16">
          
          {/* Technical */}
          <div>
            <p className="text-gray-600 text-sm tracking-widest mb-8">TECHNICAL</p>
            <div className="flex flex-col gap-6">
              {[
                { name: "Arduino & Hardware", level: "Built 3+ real projects" },
                { name: "VLSI & Verilog", level: "Workshop level" },
                { name: "Python", level: "Basic" },
                { name: "C", level: "Basic" },
                { name: "C++", level: "Learning for ROS2" },
                { name: "React & Next.js", level: "Learning by building" },
              ].map((skill, i) => (
                <div key={i} className="border-b border-gray-800 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white tracking-wide">{skill.name}</span>
                    <span className="text-gray-600 text-sm tracking-widest">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Human */}
          <div>
            <p className="text-gray-600 text-sm tracking-widest mb-8">HUMAN</p>
            <div className="flex flex-col gap-6">
              {[
                { name: "Curiosity", level: "Unreasonably high" },
                { name: "Optimism", level: "Default state" },
                { name: "Self Awareness", level: "Brutally honest" },
                { name: "Appreciating the overlooked", level: "Rare skill" },
                { name: "Public Speaking", level: "Growing" },
              ].map((skill, i) => (
                <div key={i} className="border-b border-gray-800 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white tracking-wide">{skill.name}</span>
                    <span className="text-gray-600 text-sm tracking-widest">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}