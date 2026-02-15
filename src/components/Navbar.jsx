import { useState, useEffect } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-6">
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-3 px-6 flex justify-between items-center shadow-2xl">
        
        {/* Left side: Logo/Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-sm font-bold tracking-wider text-white uppercase">
            v01d <span className="text-gray-500 font-normal">/ Developer</span>
          </span>
        </div>

        {/* Central part: Status */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Available for projects</span>
          </div>
        </div>

        {/* Right side: Local time and City */}
        <div className="flex items-center gap-4 text-right">
          <div className="hidden xs:block">
            <p className="text-[10px] text-gray-500 uppercase font-bold leading-none">Local Time</p>
            <p className="text-sm text-white font-medium">{time} <span className="text-gray-500 text-[10px]">GMT+3</span></p>
          </div>
          
          {/* A small, stylish call-to-action button if you still need to select a contact */}
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="px-4 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95"
          >
            Hire Me
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;